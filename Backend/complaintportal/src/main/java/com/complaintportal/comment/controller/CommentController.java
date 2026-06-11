package com.complaintportal.comment.controller;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.complaintportal.comment.dto.AddCommentRequest;
import com.complaintportal.comment.dto.CommentResponse;
import com.complaintportal.comment.service.CommentService;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private final CommentService commentService;

    public CommentController(
            CommentService commentService) {

        this.commentService = commentService;

    }

    @PostMapping
    public CommentResponse addComment(
            @RequestBody
            AddCommentRequest request) {

        return commentService
                .addComment(request);

    }

    @GetMapping("/complaint/{id}")
    public List<CommentResponse>
    getCommentsByComplaint(
            @PathVariable long id) {

        return commentService
                .getCommentsByComplaint(id);

    }

}