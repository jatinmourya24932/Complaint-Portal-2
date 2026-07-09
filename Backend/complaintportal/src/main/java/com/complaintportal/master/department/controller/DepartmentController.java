package com.complaintportal.master.department.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.complaintportal.master.department.dto.DepartmentResponse;
import com.complaintportal.master.department.service.DepartmentService;

@RestController
@RequestMapping("/api/departments")
public class DepartmentController {

    private final DepartmentService service;

    public DepartmentController(
            DepartmentService service) {

        this.service = service;

    }

    @GetMapping("/course/{courseId}")
    public List<DepartmentResponse> getDepartments(
            @PathVariable Long courseId) {

        return service.getDepartments(courseId);

    }

    @GetMapping
    public List<DepartmentResponse> getAllDepartments() {

        return service.getAllDepartments();

    }
}