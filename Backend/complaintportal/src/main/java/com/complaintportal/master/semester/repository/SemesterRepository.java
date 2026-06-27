package com.complaintportal.master.semester.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.complaintportal.master.semester.entity.Semester;

public interface SemesterRepository
extends JpaRepository<Semester,Long>{

    List<Semester> findByDepartmentId(Long departmentId);

}
