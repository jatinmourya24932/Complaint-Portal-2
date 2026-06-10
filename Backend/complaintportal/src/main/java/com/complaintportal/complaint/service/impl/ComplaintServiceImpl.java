package com.complaintportal.complaint.service.impl;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.complaintportal.complaint.dto.ComplaintResponse;
import com.complaintportal.complaint.dto.CreateComplaintRequest;
import com.complaintportal.complaint.entity.Complaint;
import com.complaintportal.complaint.enums.ComplaintStatus;
import com.complaintportal.complaint.repository.ComplaintRepository;
import com.complaintportal.complaint.service.ComplaintService;
import com.complaintportal.user.entity.User;
import com.complaintportal.user.repository.UserRepository;

@Service
public class ComplaintServiceImpl implements ComplaintService{
	
	private final ComplaintRepository complaintRepository;
	private final UserRepository userRepository;
	public ComplaintServiceImpl(ComplaintRepository complaintRepository, UserRepository userRepository) {
		super();
		this.complaintRepository = complaintRepository;
		this.userRepository = userRepository;
	}


	@Override
	public ComplaintResponse createComplaint(CreateComplaintRequest request) {
		
		User createdBy = userRepository
		        .findById(request.getCreatedById())
		        .orElseThrow(
		                () -> new RuntimeException(
		                        "User not found"));

		User againstUser = userRepository
		        .findById(request.getAgainstUserId())
		        .orElseThrow(
		                () -> new RuntimeException(
		                        "Against user not found"));
		
		Complaint complaint = new Complaint();
		
		complaint.setTitle(request.getTitle());

		complaint.setDescription(request.getDescription());

		complaint.setPriority(request.getPriority());

		complaint.setCategory(request.getCategory());

		complaint.setAnonymous(request.isAnonymous());
		
		complaint.setStatus(ComplaintStatus.PENDING);

		complaint.setCreatedAt(LocalDateTime.now());

		complaint.setSpamScore(0.0);

		complaint.setAiSummary("");
		
		complaint.setCreatedBy(createdBy);
		complaint.setUpdatedAt(LocalDateTime.now());

		complaint.setAgainstUser(againstUser);
		
		Complaint savedComplaint = complaintRepository.save(complaint);
		
		ComplaintResponse response = new ComplaintResponse();
		
		response.setId(savedComplaint.getId());

		response.setTitle(savedComplaint.getTitle());

		response.setDescription(savedComplaint.getDescription());

		response.setStatus(savedComplaint.getStatus());

		response.setPriority(savedComplaint.getPriority());

		response.setCategory(savedComplaint.getCategory());

		response.setCreatedByName(
		        savedComplaint.getCreatedBy()
		                      .getName());

		response.setAgainstUserName(
		        savedComplaint.getAgainstUser()
		                      .getName());

		response.setCreatedAt(
		        savedComplaint.getCreatedAt());
		
		
		
		
		return response;
	}




}
