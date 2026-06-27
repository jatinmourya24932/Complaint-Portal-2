package com.complaintportal.facultysubject.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.complaintportal.facultysubject.dto.FacultySubjectRequest;
import com.complaintportal.facultysubject.dto.FacultySubjectResponse;
import com.complaintportal.facultysubject.service.FacultySubjectService;

@RestController
@RequestMapping("/api/faculty-subject")
public class FacultySubjectController {

    private final FacultySubjectService service;

    public FacultySubjectController(FacultySubjectService service) {
        this.service = service;
    }

    @PostMapping
    public FacultySubjectResponse assignFaculty(
            @RequestBody FacultySubjectRequest request) {

        return service.assignFaculty(request);

    }

    @GetMapping("/subject/{subjectId}")
    public List<FacultySubjectResponse> getBySubject(
            @PathVariable Long subjectId) {

        return service.getBySubject(subjectId);

    }

    @GetMapping("/faculty/{facultyProfileId}")
    public List<FacultySubjectResponse> getByFaculty(
            @PathVariable Long facultyProfileId) {

        return service.getByFaculty(facultyProfileId);

    }

}