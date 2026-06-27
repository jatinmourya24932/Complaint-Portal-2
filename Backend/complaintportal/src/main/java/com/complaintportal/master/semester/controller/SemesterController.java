package com.complaintportal.master.semester.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.complaintportal.master.semester.dto.SemesterResponse;
import com.complaintportal.master.semester.service.SemesterService;

@RestController
@RequestMapping("/api/semesters")
public class SemesterController {
	
	private final SemesterService service;
	
	public SemesterController(SemesterService service) {
		super();
		this.service = service;
	}

	@GetMapping("/department/{departmentId}")
	public List<SemesterResponse> getSemesters(
	@PathVariable Long departmentId){

	    return service.getSemesters(departmentId);

	}

}
