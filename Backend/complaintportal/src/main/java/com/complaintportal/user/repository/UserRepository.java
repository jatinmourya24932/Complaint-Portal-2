package com.complaintportal.user.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.complaintportal.user.entity.User;
import com.complaintportal.user.enums.Role;

public interface UserRepository extends JpaRepository<User, Long> {
	
	Optional<User> findByEmail(String email);
	
	List<User> findByRole(Role role);


}
