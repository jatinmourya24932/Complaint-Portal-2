package com.complaintportal.complaint.controller;

import org.springframework.web.bind.annotation.*;

import com.complaintportal.complaint.dto.ComplaintResponse;
import com.complaintportal.complaint.dto.CreateComplaintRequest;
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

}