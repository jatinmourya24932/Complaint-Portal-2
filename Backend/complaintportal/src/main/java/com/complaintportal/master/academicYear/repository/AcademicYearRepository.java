package com.complaintportal.master.academicYear.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.complaintportal.master.academicYear.entity.AcademicYear;

public interface AcademicYearRepository
        extends JpaRepository<AcademicYear, Long> {

    Optional<AcademicYear> findByActiveTrue();

}