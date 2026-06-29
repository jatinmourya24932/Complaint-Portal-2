package com.complaintportal.facultyProfile.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.complaintportal.facultyProfile.entity.FacultyProfile;

public interface FacultyProfileRepository
        extends JpaRepository<FacultyProfile, Long> {

    List<FacultyProfile> findByDepartmentId(Long departmentId);

    Optional<FacultyProfile> findByUserId(Long userId);
    

}