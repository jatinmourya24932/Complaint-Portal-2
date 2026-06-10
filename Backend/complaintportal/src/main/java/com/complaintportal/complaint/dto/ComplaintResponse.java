package com.complaintportal.complaint.dto;

import java.time.LocalDateTime;

import com.complaintportal.complaint.enums.Category;
import com.complaintportal.complaint.enums.ComplaintStatus;
import com.complaintportal.complaint.enums.Priority;

public class ComplaintResponse {

	private Long id;

	private String title;

	private String description;

	private ComplaintStatus status;

	private Priority priority;

	private Category category;

	private String createdByName;

	private String againstUserName;

	private LocalDateTime createdAt;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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

	public ComplaintStatus getStatus() {
		return status;
	}

	public void setStatus(ComplaintStatus status) {
		this.status = status;
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

	public String getCreatedByName() {
		return createdByName;
	}

	public void setCreatedByName(String createdByName) {
		this.createdByName = createdByName;
	}

	public String getAgainstUserName() {
		return againstUserName;
	}

	public void setAgainstUserName(String againstUserName) {
		this.againstUserName = againstUserName;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
}
