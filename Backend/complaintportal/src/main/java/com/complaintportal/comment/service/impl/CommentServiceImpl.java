package com.complaintportal.comment.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.complaintportal.comment.dto.AddCommentRequest;
import com.complaintportal.comment.dto.CommentResponse;
import com.complaintportal.comment.entity.Comment;
import com.complaintportal.comment.repository.CommentRepository;
import com.complaintportal.comment.service.CommentService;
import com.complaintportal.complaint.entity.Complaint;
import com.complaintportal.complaint.repository.ComplaintRepository;
import com.complaintportal.exception.ResourceNotFoundException;
import com.complaintportal.user.entity.User;
import com.complaintportal.user.repository.UserRepository;

@Service
public class CommentServiceImpl implements CommentService {

	private final CommentRepository commentRepository;
	private final ComplaintRepository complaintRepository;
	private final UserRepository userRepository;
	
	public CommentServiceImpl(CommentRepository commentRepository, ComplaintRepository complaintRepository,
			UserRepository userRepository) {
		super();
		this.commentRepository = commentRepository;
		this.complaintRepository = complaintRepository;
		this.userRepository = userRepository;
	}
	@Override
	public CommentResponse addComment(
	        AddCommentRequest request) {

	    Complaint complaint =
	            complaintRepository.findById(
	                    request.getComplaintId())
	            .orElseThrow(() ->
	                    new ResourceNotFoundException(
	                            "Complaint not found"));

	    User user =
	            userRepository.findById(
	                    request.getUserId())
	            .orElseThrow(() ->
	                    new ResourceNotFoundException(
	                            "User not found"));

	    Comment comment = new Comment();

	    comment.setMessage(request.getMessage());

	    comment.setCreatedAt(LocalDateTime.now());

	    comment.setComplaint(complaint);

	    comment.setUser(user);

	    Comment savedComment =
	            commentRepository.save(comment);

	    return mapToResponse(savedComment);

	}
	
	@Override
	public List<CommentResponse>
	getCommentsByComplaint(
	        long complaintId) {

	    Complaint complaint =
	            complaintRepository.findById(
	                    complaintId)
	            .orElseThrow(() ->
	                    new ResourceNotFoundException(
	                            "Complaint not found"));

	    List<Comment> comments =
	            commentRepository.findByComplaint(
	                    complaint);

	    List<CommentResponse> responses =
	            new ArrayList<>();

	    for (Comment comment : comments) {

	        responses.add(
	                mapToResponse(comment));

	    }

	    return responses;

	}
	
	private CommentResponse
	mapToResponse(Comment comment) {

	    CommentResponse response =
	            new CommentResponse();

	    response.setId(comment.getId());

	    response.setMessage(
	            comment.getMessage());

	    response.setUserName(
	            comment.getUser()
	                    .getName());

	    response.setCreatedAt(
	            comment.getCreatedAt());

	    return response;

	}
}
