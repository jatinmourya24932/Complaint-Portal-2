package com.complaintportal.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.complaintportal.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	Optional<User> findByEmail(String email);


}
