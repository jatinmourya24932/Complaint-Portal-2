package com.complaintportal.complaint.dto;

import com.complaintportal.complaint.enums.Category;
import com.complaintportal.complaint.enums.Priority;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateComplaintRequest {
	@NotBlank(message = "Title is required")
	private String title;

	@NotBlank(message = "Description is required")
	private String description;

	@NotNull(message = "Priority is required")
	private Priority priority;

	@NotNull(message = "Category is required")
	private Category category;

	
	private boolean anonymous;
	
	@NotNull(message = "Created By Id is required")
	private Long createdById;

	@NotNull(message = "Against User Id is required")
	private Long againstUserId;

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

	public Long getCreatedById() {
		return createdById;
	}

	public void setCreatedById(Long createdById) {
		this.createdById = createdById;
	}

	public Long getAgainstUserId() {
		return againstUserId;
	}

	public void setAgainstUserId(Long againstUserId) {
		this.againstUserId = againstUserId;
	}
}
