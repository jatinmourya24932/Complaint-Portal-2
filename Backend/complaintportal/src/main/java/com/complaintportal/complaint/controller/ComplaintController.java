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

    public ComplaintController(
            ComplaintService complaintService) {

        this.complaintService = complaintService;
    }
    
    @PreAuthorize("hasRole('STUDENT')")
    @PostMapping
    public ComplaintResponse createComplaint(@Valid
            @RequestBody CreateComplaintRequest request) {

        return complaintService.createComplaint(request);

    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public List<ComplaintResponse>
    getAllComplaints() {

        return complaintService
                .getAllComplaints();
    }
    
    
    @GetMapping("/{id}")
    public ComplaintResponse
    getComplaintById(
            @PathVariable Long id) {

        return complaintService
                .getComplaintById(id);
    }
    
    @PreAuthorize("hasAnyRole('ADMIN','FACULTY')")
    @PatchMapping("/{id}/status")
    public ComplaintResponse updateComplaintStatus(
            @PathVariable Long id,
            @RequestBody UpdateStatusRequest request) {

        return complaintService
                .updateComplaintStatus(id, request);

    }
    
    @PreAuthorize("hasAnyRole('ADMIN','STUDENT')")
    @GetMapping("/student/{id}")
    public List<ComplaintResponse>
    getComplaintsByStudent(
            @PathVariable Long id) {

        return complaintService
                .getComplaintsByStudent(id);
    }
    
    @PreAuthorize("hasAnyRole('ADMIN','FACULTY')")
    @GetMapping("/against/{id}")
    public List<ComplaintResponse>
    getComplaintsAgainstUser(
            @PathVariable Long id) {

        return complaintService
                .getComplaintsAgainstUser(id);
    }

}