package com.complaintportal.facultyProfile.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.complaintportal.facultyProfile.dto.CreateFacultyRequest;
import com.complaintportal.facultyProfile.dto.FacultyProfileResponse;
import com.complaintportal.facultyProfile.dto.UpdateFacultyRequest;
import com.complaintportal.facultyProfile.entity.FacultyProfile;
import com.complaintportal.facultyProfile.repository.FacultyProfileRepository;
import java.time.LocalDateTime;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.complaintportal.exception.DuplicateResourceException;
import com.complaintportal.exception.ResourceNotFoundException;

import com.complaintportal.master.department.entity.Department;
import com.complaintportal.master.department.repository.DepartmentRepository;

import com.complaintportal.user.entity.User;
import com.complaintportal.user.enums.Role;
import com.complaintportal.user.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class FacultyProfileService {

    private final FacultyProfileRepository repository;
    private final UserRepository userRepository;

    private final DepartmentRepository departmentRepository;

    private final PasswordEncoder passwordEncoder;

    public FacultyProfileService(FacultyProfileRepository repository, UserRepository userRepository,
			DepartmentRepository departmentRepository, PasswordEncoder passwordEncoder) {
		super();
		this.repository = repository;
		this.userRepository = userRepository;
		this.departmentRepository = departmentRepository;
		this.passwordEncoder = passwordEncoder;
	}

    public List<FacultyProfileResponse> getFacultyByDepartment(Long departmentId) {

        return repository.findByDepartmentId(departmentId)
                .stream()
                .map(f -> new FacultyProfileResponse(

                	    f.getId(),

                	    f.getUser().getId(),

                	    f.getUser().getName(),

                	    f.getEmployeeCode(),

                	    f.getDesignation(),

                	    f.getPhone(),

                	    f.getDepartment().getId(),

                	    f.getUser().getEmail(),

                	    f.getDepartment().getName()

                	)).toList();

                

    }
    @Transactional
    public FacultyProfileResponse createFaculty(
            CreateFacultyRequest request) {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {

            throw new DuplicateResourceException(
                    "Email already exists");

        }

        Department department =
                departmentRepository.findById(request.getDepartmentId())
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Department not found"));

        User user = new User();

        user.setName(request.getName());

        user.setEmail(request.getEmail());

        user.setPassword(
                passwordEncoder.encode(
                        request.getPassword()));

        user.setRole(Role.FACULTY);

        user.setActive(true);

        user.setCreatedAt(LocalDateTime.now());

        User savedUser =
                userRepository.save(user);

        FacultyProfile profile =
                new FacultyProfile();

        profile.setUser(savedUser);

        profile.setEmployeeCode(
                request.getEmployeeCode());

        profile.setDesignation(
                request.getDesignation());

        profile.setPhone(
                request.getPhone());

        profile.setDepartment(
                department);

        FacultyProfile savedProfile =
                repository.save(profile);

        return new FacultyProfileResponse(

                savedProfile.getId(),

                savedUser.getId(),

                savedUser.getName(),

                savedProfile.getEmployeeCode(),

                savedProfile.getDesignation(),

                savedProfile.getPhone(),

                department.getId(),

                savedUser.getEmail(),

                department.getName()

        );

    }
    public List<FacultyProfileResponse> getAllFaculty(){

        return repository.findAll()

                .stream()

                .map(f -> new FacultyProfileResponse(

                        f.getId(),

                        f.getUser().getId(),

                        f.getUser().getName(),

                        f.getEmployeeCode(),

                        f.getDesignation(),

                        f.getPhone(),

                        f.getDepartment().getId(),

                        f.getUser().getEmail(),

                        f.getDepartment().getName()

                ))

                .toList();

    }
    
    @Transactional
    public FacultyProfileResponse updateFaculty(
            Long id,
            UpdateFacultyRequest request){

        FacultyProfile profile = repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Faculty not found"));

        Department department = departmentRepository.findById(
                request.getDepartmentId())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Department not found"));

        User user = profile.getUser();

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        userRepository.save(user);

        profile.setDesignation(request.getDesignation());
        profile.setPhone(request.getPhone());
        profile.setDepartment(department);

        FacultyProfile saved = repository.save(profile);

        return new FacultyProfileResponse(
                saved.getId(),
                user.getId(),
                user.getName(),
                saved.getEmployeeCode(),
                saved.getDesignation(),
                saved.getPhone(),
                department.getId(),
                user.getEmail(),
                department.getName()
        );
    }

}