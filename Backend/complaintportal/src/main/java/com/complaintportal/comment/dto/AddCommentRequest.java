package com.complaintportal.comment.dto;

public class AddCommentRequest {
	private String message;

	private long complaintId;

	private long userId;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public long getComplaintId() {
		return complaintId;
	}

	public void setComplaintId(long complaintId) {
		this.complaintId = complaintId;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}
}
