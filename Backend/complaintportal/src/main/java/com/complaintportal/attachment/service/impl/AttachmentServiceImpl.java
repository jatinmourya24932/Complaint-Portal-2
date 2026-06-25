package com.complaintportal.attachment.service.impl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.complaintportal.attachment.dto.AttachmentResponse;
import com.complaintportal.attachment.entity.Attachment;
import com.complaintportal.attachment.repository.AttachmentRepository;
import com.complaintportal.attachment.service.AttachmentService;
import com.complaintportal.complaint.entity.Complaint;
import com.complaintportal.complaint.repository.ComplaintRepository;
import com.complaintportal.exception.ResourceNotFoundException;

@Service
public class AttachmentServiceImpl implements AttachmentService {
	
	private final AttachmentRepository attachmentRepository;
	private final ComplaintRepository complaintRepository;
	
	public AttachmentServiceImpl(AttachmentRepository attachmentRepository, ComplaintRepository complaintRepository) {
		super();
		this.attachmentRepository = attachmentRepository;
		this.complaintRepository = complaintRepository;
	}
	
	@Override
	public AttachmentResponse uploadFile(
	        Long complaintId,
	        MultipartFile file) {

	    Complaint complaint =
	            complaintRepository.findById(
	                    complaintId)
	                    .orElseThrow(
	                            () -> new ResourceNotFoundException(
	                                    "Complaint not found"));

	    try {

	        String uploadDir = "uploads/";

	        Path uploadPath =
	                Paths.get(uploadDir);

	        Files.createDirectories(
	                uploadPath);

	        String fileName =
	                UUID.randomUUID()
	                        + "_"
	                        + file.getOriginalFilename();

	        Path filePath =
	                uploadPath.resolve(
	                        fileName);

	        file.transferTo(
	                filePath);

	        Attachment attachment =
	                new Attachment();

	        attachment.setFileName(
	                fileName);

	        attachment.setFileType(
	                file.getContentType());

	        attachment.setFilePath(
	                filePath.toString());

	        attachment.setUploadedAt(
	                LocalDateTime.now());

	        attachment.setComplaint(
	                complaint);

	        Attachment savedAttachment =
	                attachmentRepository.save(
	                        attachment);

	        return mapToResponse(
	                savedAttachment);

	    } catch (IOException e) {

	        throw new RuntimeException(
	                "File upload failed");

	    }
	}
	@Override
	public List<AttachmentResponse>
	getAttachmentsByComplaint(
	        Long complaintId) {

	    return attachmentRepository
	            .findByComplaintId(
	                    complaintId)

	            .stream()

	            .map(this::mapToResponse)

	            .toList();

	}
	
	private AttachmentResponse
	mapToResponse(
	        Attachment attachment) {

	    AttachmentResponse response =
	            new AttachmentResponse();

	    response.setId(
	            attachment.getId());

	    response.setFileName(
	            attachment.getFileName());

	    response.setFileType(
	            attachment.getFileType());

	    response.setFilePath(
	            attachment.getFilePath());

	    return response;

	}

}
