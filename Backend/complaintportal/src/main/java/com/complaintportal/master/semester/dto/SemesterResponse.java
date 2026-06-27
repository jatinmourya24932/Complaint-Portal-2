package com.complaintportal.master.semester.dto;

public class SemesterResponse {

    private Long id;

    private Integer semesterNo;

    public SemesterResponse(Long id,Integer semesterNo){

        this.id=id;

        this.semesterNo=semesterNo;

    }

	public Long getId() {
		return id;
	}


	public Integer getSemesterNo() {
		return semesterNo;
	}


}