package com.complaintportal.complaint.dto;

import com.complaintportal.complaint.enums.Category;
import com.complaintportal.complaint.enums.Priority;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateComplaintRequest {

    @NotBlank
    private String title;

    @NotBlank
    private String description;

    @NotNull
    private Priority priority;

    @NotNull
    private Category category;

    private boolean anonymous;

    @NotNull
    private Long studentProfileId;

    private Long facultySubjectId;

    private Long departmentId;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Priority getPriority() {
		return priority;
	}

	public void setPriority(Priority priority) {
		this.priority = priority;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public boolean isAnonymous() {
		return anonymous;
	}

	public void setAnonymous(boolean anonymous) {
		this.anonymous = anonymous;
	}

	public Long getStudentProfileId() {
		return studentProfileId;
	}

	public void setStudentProfileId(Long studentProfileId) {
		this.studentProfileId = studentProfileId;
	}

	public Long getFacultySubjectId() {
		return facultySubjectId;
	}

	public void setFacultySubjectId(Long facultySubjectId) {
		this.facultySubjectId = facultySubjectId;
	}

	public Long getDepartmentId() {
		return departmentId;
	}

	public void setDepartmentId(Long departmentId) {
		this.departmentId = departmentId;
	}

    
}