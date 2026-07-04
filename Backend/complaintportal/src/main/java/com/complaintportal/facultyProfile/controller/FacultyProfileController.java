package com.complaintportal.facultyProfile.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.complaintportal.facultyProfile.dto.FacultyProfileResponse;
import com.complaintportal.facultyProfile.service.FacultyProfileService;
import jakarta.validation.Valid;
import com.complaintportal.facultyProfile.dto.CreateFacultyRequest;

@RestController
@RequestMapping("/api/faculty-profile")
public class FacultyProfileController {

    private final FacultyProfileService service;

    public FacultyProfileController(
            FacultyProfileService service) {

        this.service = service;
    }

    @GetMapping("/department/{departmentId}")
    public List<FacultyProfileResponse> getFacultyByDepartment(
            @PathVariable Long departmentId) {

        return service.getFacultyByDepartment(departmentId);

    }
    @PostMapping
    public FacultyProfileResponse createFaculty(

            @Valid
            @RequestBody
            CreateFacultyRequest request){

        return service.createFaculty(request);

    }
    @GetMapping
    public List<FacultyProfileResponse> getAllFaculty(){

        return service.getAllFaculty();

    }

}