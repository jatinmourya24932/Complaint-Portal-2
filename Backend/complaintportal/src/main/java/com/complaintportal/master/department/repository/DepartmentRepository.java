package com.complaintportal.master.department.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.complaintportal.master.department.entity.Department;

public interface DepartmentRepository
        extends JpaRepository<Department, Long> {

    List<Department> findByCourseId(Long courseId);

}