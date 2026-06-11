package com.complaintportal.comment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.complaintportal.comment.entity.Comment;
import com.complaintportal.complaint.entity.Complaint;

public interface CommentRepository
        extends JpaRepository<Comment, Long> {

    List<Comment> findByComplaint(Complaint complaint);

}