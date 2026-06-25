package com.complaintportal.attachment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.complaintportal.attachment.entity.Attachment;

public interface AttachmentRepository extends JpaRepository<Attachment, Long> {

List<Attachment> findByComplaintId(Long complaintId);

}
