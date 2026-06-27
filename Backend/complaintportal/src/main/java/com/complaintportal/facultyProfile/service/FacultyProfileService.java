package com.complaintportal.facultyProfile.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.complaintportal.facultyProfile.dto.FacultyProfileResponse;
import com.complaintportal.facultyProfile.repository.FacultyProfileRepository;

@Service
public class FacultyProfileService {

    private final FacultyProfileRepository repository;

    public FacultyProfileService(
            FacultyProfileRepository repository) {

        this.repository = repository;
    }

    public List<FacultyProfileResponse> getFacultyByDepartment(Long departmentId) {

        return repository.findByDepartmentId(departmentId)
                .stream()
                .map(f -> new FacultyProfileResponse(

                        f.getId(),

                        f.getUser().getId(),

                        f.getUser().getName(),

                        f.getUser().getEmail(),

                        f.getEmployeeCode(),

                        f.getDesignation(),

                        f.getDepartment().getId(),

                        f.getPhone(),

                        f.getDepartment().getName()
)).toList();

                

    }

}