package com.complaintportal.master.academicYear.dto;

public class AcademicYearResponse {

	private Long id;
	private String yearName;
	private Boolean active;

	public AcademicYearResponse(Long id, String yearName, Boolean active) {

		this.id = id;
		this.yearName = yearName;
		this.active = active;

	}

	public Long getId() {
		return id;
	}

	public String getYearName() {
		return yearName;
	}

	public Boolean getActive() {
		return active;
	}

}