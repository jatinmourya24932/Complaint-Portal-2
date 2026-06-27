package com.complaintportal.master.semester.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.complaintportal.master.semester.dto.SemesterResponse;
import com.complaintportal.master.semester.repository.SemesterRepository;

@Service
public class SemesterService {
	
	private final SemesterRepository repository;

	public SemesterService(SemesterRepository repository) {
		super();
		this.repository = repository;
	}

	public List<SemesterResponse> getSemesters(Long departmentId){

	    return repository.findByDepartmentId(departmentId)
	            .stream()
	            .map(s->new SemesterResponse(
	                    s.getId(),
	                    s.getSemesterNo()))
	            .toList();

	}
}
