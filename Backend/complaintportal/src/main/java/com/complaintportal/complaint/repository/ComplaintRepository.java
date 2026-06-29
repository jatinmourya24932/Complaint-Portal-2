package com.complaintportal.complaint.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.complaintportal.complaint.entity.Complaint;

public interface ComplaintRepository extends JpaRepository<Complaint, Long> {

	Optional<Complaint> findByTrackingId(String trackingId);
    List<Complaint> findByStudentProfileId(Long studentProfileId);

    List<Complaint> findByFacultySubjectId(Long facultySubjectId);

    List<Complaint> findByDepartmentId(Long departmentId);
    List<Complaint> findByFacultySubjectFacultyProfileId(Long facultyProfileId);
    List<Complaint> findByDepartmentHodUserId(Long userId);
    

}