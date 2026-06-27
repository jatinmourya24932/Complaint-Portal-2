package com.complaintportal.complaint.controller;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.complaintportal.complaint.dto.ComplaintResponse;
import com.complaintportal.complaint.dto.CreateComplaintRequest;
import com.complaintportal.complaint.dto.UpdateStatusRequest;
import com.complaintportal.complaint.service.ComplaintService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/complaints")
public class ComplaintController {

    private final ComplaintService complaintService;

    public ComplaintController(ComplaintService complaintService) {
        this.complaintService = complaintService;
    }

    // Create Complaint
    @PreAuthorize("hasRole('STUDENT')")
    @PostMapping
    public ComplaintResponse createComplaint(
            @Valid @RequestBody CreateComplaintRequest request) {

        return complaintService.createComplaint(request);
    }

    // Admin - All Complaints
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public List<ComplaintResponse> getAllComplaints() {

        return complaintService.getAllComplaints();
    }

    // Complaint By Id
    @GetMapping("/{id}")
    public ComplaintResponse getComplaintById(
            @PathVariable Long id) {

        return complaintService.getComplaintById(id);
    }

    // Update Status
    @PreAuthorize("hasAnyRole('ADMIN','FACULTY')")
    @PatchMapping("/{id}/status")
    public ComplaintResponse updateComplaintStatus(
            @PathVariable Long id,
            @RequestBody UpdateStatusRequest request) {

        return complaintService.updateComplaintStatus(id, request);
    }

    // Student Complaints
    @PreAuthorize("hasAnyRole('ADMIN','STUDENT')")
    @GetMapping("/student/{studentProfileId}")
    public List<ComplaintResponse> getComplaintsByStudent(
            @PathVariable Long studentProfileId) {

        return complaintService.getComplaintsByStudent(studentProfileId);
    }

    // Faculty Complaints
    @PreAuthorize("hasAnyRole('ADMIN','FACULTY')")
    @GetMapping("/faculty-subject/{facultySubjectId}")
    public List<ComplaintResponse> getComplaintsByFacultySubject(
            @PathVariable Long facultySubjectId) {

        return complaintService.getComplaintsByFacultySubject(facultySubjectId);
    }

    // Tracking Id
    @GetMapping("/track/{trackingId}")
    public ComplaintResponse getComplaintByTrackingId(
            @PathVariable String trackingId) {

        return complaintService.getComplaintByTrackingId(trackingId);
    }

}