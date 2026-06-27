package com.complaintportal.master.department.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.complaintportal.master.department.dto.DepartmentResponse;
import com.complaintportal.master.department.repository.DepartmentRepository;

@Service
public class DepartmentService {

    private final DepartmentRepository repository;

    public DepartmentService(DepartmentRepository repository) {
        this.repository = repository;
    }

    public List<DepartmentResponse> getDepartments(Long courseId){

        return repository.findByCourseId(courseId)
                .stream()
                .map(department ->
                        new DepartmentResponse(
                                department.getId(),
                                department.getName()))
                .toList();

    }
}