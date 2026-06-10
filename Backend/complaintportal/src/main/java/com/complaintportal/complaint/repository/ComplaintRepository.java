package com.complaintportal.complaint.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.complaintportal.complaint.entity.Complaint;



public interface ComplaintRepository extends JpaRepository<Complaint, Long> {
	


}
