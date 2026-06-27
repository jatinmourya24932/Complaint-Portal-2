package com.complaintportal.master.subject.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.complaintportal.master.subject.dto.SubjectResponse;
import com.complaintportal.master.subject.service.SubjectService;

@RestController
@RequestMapping("/api/subjects")
public class SubjectController {

    private final SubjectService service;

    public SubjectController(SubjectService service) {
        this.service = service;
    }

    @GetMapping("/semester/{semesterId}")
    public List<SubjectResponse> getSubjects(
            @PathVariable Long semesterId) {

        return service.getSubjects(semesterId);

    }

}