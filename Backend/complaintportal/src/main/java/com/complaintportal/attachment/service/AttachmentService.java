package com.complaintportal.attachment.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.complaintportal.attachment.dto.AttachmentResponse;

public interface AttachmentService {

    AttachmentResponse uploadFile(
            Long complaintId,
            MultipartFile file);

    List<AttachmentResponse>
    getAttachmentsByComplaint(
            Long complaintId);

}