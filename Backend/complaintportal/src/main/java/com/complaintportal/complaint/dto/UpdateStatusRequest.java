package com.complaintportal.complaint.dto;

import com.complaintportal.complaint.enums.ComplaintStatus;

public class UpdateStatusRequest {
	
	private ComplaintStatus status;

	public ComplaintStatus getStatus() {
		return status;
	}

	public void setStatus(ComplaintStatus status) {
		this.status = status;
	}

}
