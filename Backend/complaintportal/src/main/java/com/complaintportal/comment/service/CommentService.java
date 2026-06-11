package com.complaintportal.comment.service;

import java.util.List;

import com.complaintportal.comment.dto.AddCommentRequest;
import com.complaintportal.comment.dto.CommentResponse;


public interface CommentService {

    CommentResponse addComment(
            AddCommentRequest request);

    List<CommentResponse> getCommentsByComplaint(
            long complaintId);

}