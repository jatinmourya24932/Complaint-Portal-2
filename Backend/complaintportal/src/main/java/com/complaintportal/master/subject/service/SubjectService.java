package com.complaintportal.master.subject.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.complaintportal.master.subject.dto.SubjectResponse;
import com.complaintportal.master.subject.repository.SubjectRepository;

@Service
public class SubjectService {

    private final SubjectRepository repository;

    public SubjectService(SubjectRepository repository) {
        this.repository = repository;
    }

    public List<SubjectResponse> getSubjects(Long semesterId) {

        return repository.findBySemesterId(semesterId)
                .stream()
                .map(subject -> new SubjectResponse(
                        subject.getId(),
                        subject.getSubjectName()))
                .toList();

    }

}