package com.complaintportal.studentprofile.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.complaintportal.studentprofile.entity.StudentProfile;

public interface StudentProfileRepository
extends JpaRepository<StudentProfile, Long> {

Optional<StudentProfile> findByRollNumber(String rollNumber);

boolean existsByRollNumber(String rollNumber);

List<StudentProfile> findByDepartmentId(Long departmentId);

Optional<StudentProfile> findByUserId(Long userId);


}
