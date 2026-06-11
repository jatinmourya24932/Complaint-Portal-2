package com.complaintportal.complaint.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.complaintportal.complaint.entity.Complaint;
import com.complaintportal.user.entity.User;



public interface ComplaintRepository extends JpaRepository<Complaint, Long> {
	
	List<Complaint> findByCreatedBy(User user);

	List<Complaint> findByAgainstUser(User user);

}
