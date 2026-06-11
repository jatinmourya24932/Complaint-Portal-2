package com.complaintportal.complaint.service;

import java.util.List;

import com.complaintportal.complaint.dto.ComplaintResponse;
import com.complaintportal.complaint.dto.CreateComplaintRequest;
import com.complaintportal.complaint.dto.UpdateStatusRequest;

public interface ComplaintService {
	
	
	
	ComplaintResponse createComplaint(CreateComplaintRequest request);
	List<ComplaintResponse> getAllComplaints();

	ComplaintResponse getComplaintById(Long id);
	
	ComplaintResponse updateComplaintStatus(Long id,UpdateStatusRequest request);
	
	List<ComplaintResponse> getComplaintsByStudent(Long userId);

	List<ComplaintResponse> getComplaintsAgainstUser(Long userId);

}
