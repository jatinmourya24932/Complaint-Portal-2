package com.complaintportal.complaint.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.complaintportal.complaint.dto.ComplaintResponse;
import com.complaintportal.complaint.dto.CreateComplaintRequest;
import com.complaintportal.complaint.dto.UpdateStatusRequest;
import com.complaintportal.complaint.service.ComplaintService;

@RestController
@RequestMapping("/api/complaints")
public class ComplaintController {

    private final ComplaintService complaintService;

    public ComplaintController(
            ComplaintService complaintService) {

        this.complaintService = complaintService;
    }

    @PostMapping
    public ComplaintResponse createComplaint(
            @RequestBody CreateComplaintRequest request) {

        return complaintService.createComplaint(request);

    }
    
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
    
    @PatchMapping("/{id}/status")
    public ComplaintResponse updateComplaintStatus(
            @PathVariable Long id,
            @RequestBody UpdateStatusRequest request) {

        return complaintService
                .updateComplaintStatus(id, request);

    }
    
    @GetMapping("/student/{id}")
    public List<ComplaintResponse>
    getComplaintsByStudent(
            @PathVariable Long id) {

        return complaintService
                .getComplaintsByStudent(id);
    }
    
    @GetMapping("/against/{id}")
    public List<ComplaintResponse>
    getComplaintsAgainstUser(
            @PathVariable Long id) {

        return complaintService
                .getComplaintsAgainstUser(id);
    }

}