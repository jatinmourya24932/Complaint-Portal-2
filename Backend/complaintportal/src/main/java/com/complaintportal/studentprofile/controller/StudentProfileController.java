package com.complaintportal.studentprofile.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.complaintportal.studentprofile.dto.StudentProfileResponse;
import com.complaintportal.studentprofile.service.StudentProfileService;

@RestController
@RequestMapping("/api/student-profile")
public class StudentProfileController {

    private final StudentProfileService service;

    public StudentProfileController(StudentProfileService service) {
        this.service = service;
    }

    @GetMapping("/verify/{rollNumber}")
    public StudentProfileResponse verifyRollNumber(
            @PathVariable String rollNumber) {

        return service.verifyRollNumber(rollNumber);
    }

    @GetMapping("/user/{userId}")
    public StudentProfileResponse getStudentProfile(
            @PathVariable Long userId) {

        return service.getStudentProfile(userId);
    }

    @GetMapping("/department/{departmentId}")
    public List<StudentProfileResponse> getStudentsByDepartment(
            @PathVariable Long departmentId) {

        return service.getStudentsByDepartment(departmentId);
    }

}