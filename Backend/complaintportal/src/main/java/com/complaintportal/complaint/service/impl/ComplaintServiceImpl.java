package com.complaintportal.complaint.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.complaintportal.complaint.dto.ComplaintResponse;
import com.complaintportal.complaint.dto.CreateComplaintRequest;
import com.complaintportal.complaint.dto.UpdateStatusRequest;
import com.complaintportal.complaint.entity.Complaint;
import com.complaintportal.complaint.enums.ComplaintStatus;
import com.complaintportal.complaint.repository.ComplaintRepository;
import com.complaintportal.complaint.service.ComplaintService;
import com.complaintportal.email.service.EmailService;
import com.complaintportal.exception.ResourceNotFoundException;
import com.complaintportal.user.entity.User;
import com.complaintportal.user.repository.UserRepository;

import jakarta.validation.Valid;

@Service
public class ComplaintServiceImpl implements ComplaintService{
	
	private final ComplaintRepository complaintRepository;
	private final UserRepository userRepository;
	private final EmailService emailService;
	public ComplaintServiceImpl(ComplaintRepository complaintRepository, UserRepository userRepository,EmailService emailService) {
		super();
		this.complaintRepository = complaintRepository;
		this.userRepository = userRepository;
		this.emailService = emailService;
	}


	@Override
	public ComplaintResponse createComplaint(@Valid @RequestBody  CreateComplaintRequest request) {
		
		User createdBy = userRepository
		        .findById(request.getCreatedById())
		        .orElseThrow(
		                () -> new RuntimeException(
		                        "User not found"));

		User againstUser = userRepository
		        .findById(request.getAgainstUserId())
		        .orElseThrow(
		                () -> new ResourceNotFoundException(
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
		
		ComplaintResponse response = mapToResponse(savedComplaint);
		
		System.out.println(" before complaint is send");
		emailService.sendComplaintNotification(savedComplaint);
		
		System.out.println(" aftere complaint is send");
		
		return response;
	}

	@Override
	public List<ComplaintResponse> getAllComplaints() {

	    List<Complaint> complaints =
	            complaintRepository.findAll();

	    List<ComplaintResponse> responses =
	            new ArrayList<>();

	    for (Complaint complaint : complaints) {

	        ComplaintResponse response =
	                mapToResponse(complaint);

	        response.setId(complaint.getId());

	        response.setTitle(
	                complaint.getTitle());

	        response.setDescription(
	                complaint.getDescription());

	        response.setStatus(
	                complaint.getStatus());

	        response.setPriority(
	                complaint.getPriority());

	        response.setCategory(
	                complaint.getCategory());

	        response.setCreatedByName(
	                complaint.getCreatedBy()
	                         .getName());

	        response.setAgainstUserName(
	                complaint.getAgainstUser()
	                         .getName());

	        response.setCreatedAt(
	                complaint.getCreatedAt());

	        responses.add(response);
	    }

	    return responses;
	}
	
	@Override
	public ComplaintResponse getComplaintById(
	        Long id) {

	    Complaint complaint =
	            complaintRepository
	            .findById(id)
	            .orElseThrow(
	                    () -> new ResourceNotFoundException(
	                            "Complaint not found"));

	    ComplaintResponse response =
	            mapToResponse(complaint);

	    return response;
	}


	@Override
	public ComplaintResponse updateComplaintStatus(
	        Long id,
	        UpdateStatusRequest request) {

	    Complaint complaint = complaintRepository
	            .findById(id)
	            .orElseThrow(
	                    () -> new ResourceNotFoundException(
	                            "Complaint not found"));

	    complaint.setStatus(request.getStatus());

	    complaint.setUpdatedAt(LocalDateTime.now());

	    Complaint updatedComplaint =
	            complaintRepository.save(complaint);
	    
	    emailService.sendStatusUpdateNotification(
	            updatedComplaint);
	   

	    ComplaintResponse response =
	           mapToResponse(updatedComplaint);

	    return response;


	}
	
	@Override
	public List<ComplaintResponse> getComplaintsByStudent(Long userId) {

	    User user = userRepository.findById(userId)
	            .orElseThrow(() ->
	                    new ResourceNotFoundException("User not found"));

	    List<Complaint> complaints =
	            complaintRepository.findByCreatedBy(user);

	    List<ComplaintResponse> responses =
	            new ArrayList<>();

	    for (Complaint complaint : complaints) {

	        ComplaintResponse response =
	                mapToResponse(complaint);

	        responses.add(response);
	    }

	    return responses;
	}
	
	@Override
	public List<ComplaintResponse> getComplaintsAgainstUser(Long userId) {

	    User user = userRepository.findById(userId)
	            .orElseThrow(() ->
	                    new ResourceNotFoundException("User not found"));

	    List<Complaint> complaints =
	            complaintRepository.findByAgainstUser(user);

	    List<ComplaintResponse> responses =
	            new ArrayList<>();

	    for (Complaint complaint : complaints) {

	        ComplaintResponse response =
	                mapToResponse(complaint);

	        responses.add(response);
	    }

	    return responses;
	}
	
	
	private ComplaintResponse mapToResponse(
	        Complaint complaint) {

	    ComplaintResponse response =
	            new ComplaintResponse();

	    response.setId(complaint.getId());

	    response.setTitle(complaint.getTitle());

	    response.setDescription(
	            complaint.getDescription());

	    response.setStatus(
	            complaint.getStatus());

	    response.setPriority(
	            complaint.getPriority());

	    response.setCategory(
	            complaint.getCategory());

	    response.setCreatedByName(
	            complaint.getCreatedBy().getName());

	    response.setAgainstUserName(
	            complaint.getAgainstUser().getName());

	    response.setCreatedAt(
	            complaint.getCreatedAt());

	    return response;
	}
}
