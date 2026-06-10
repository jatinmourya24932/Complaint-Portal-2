package com.complaintportal.complaint.service;

import com.complaintportal.complaint.dto.ComplaintResponse;
import com.complaintportal.complaint.dto.CreateComplaintRequest;

public interface ComplaintService {
	
	
	
	ComplaintResponse createComplaint(CreateComplaintRequest request);

}
