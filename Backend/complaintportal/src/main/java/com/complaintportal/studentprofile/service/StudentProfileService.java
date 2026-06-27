package com.complaintportal.studentprofile.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.complaintportal.studentprofile.dto.StudentProfileResponse;
import com.complaintportal.studentprofile.entity.StudentProfile;
import com.complaintportal.studentprofile.repository.StudentProfileRepository;

@Service
public class StudentProfileService {

    private final StudentProfileRepository repository;

    public StudentProfileService(StudentProfileRepository repository) {
        this.repository = repository;
    }

    // Verify Roll Number
    public StudentProfileResponse verifyRollNumber(String rollNumber) {

        StudentProfile student = repository.findByRollNumber(rollNumber)
                .orElseThrow(() -> new RuntimeException("Invalid Roll Number"));

        return mapToResponse(student);
    }

    // Get Profile by User Id
    public StudentProfileResponse getStudentProfile(Long userId) {

        StudentProfile student = repository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Student Not Found"));

        return mapToResponse(student);

    }

    // Get Students by Department
    public List<StudentProfileResponse> getStudentsByDepartment(Long departmentId) {

        return repository.findByDepartmentId(departmentId)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    // Mapper Method
    private StudentProfileResponse mapToResponse(StudentProfile student) {

        return new StudentProfileResponse(

                student.getId(),

                student.getUser() != null ? student.getUser().getName() : null,

                student.getUser() != null ? student.getUser().getEmail() : null,

                student.getRollNumber(),

                student.getCourse().getName(),

                student.getDepartment().getName(),

                student.getSemester().getSemesterNo(),

                student.getSection().name()

        );

    }

}