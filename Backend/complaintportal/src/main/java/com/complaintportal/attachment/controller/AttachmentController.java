package com.complaintportal.attachment.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.complaintportal.attachment.dto.AttachmentResponse;
import com.complaintportal.attachment.service.AttachmentService;

@RestController
@RequestMapping("/api/attachments")
public class AttachmentController {

    private final AttachmentService attachmentService;

    public AttachmentController(
            AttachmentService attachmentService) {

        this.attachmentService = attachmentService;
    }

    @PostMapping("/{complaintId}")
    public AttachmentResponse uploadFile(
            @PathVariable Long complaintId,
            @RequestParam("file")
            MultipartFile file) {

        return attachmentService
                .uploadFile(
                        complaintId,
                        file);
    }

    @GetMapping("/{complaintId}")
    public List<AttachmentResponse>
    getAttachmentsByComplaint(
            @PathVariable Long complaintId) {

        return attachmentService
                .getAttachmentsByComplaint(
                        complaintId);
    }

}