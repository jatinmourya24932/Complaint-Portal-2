package com.complaintportal.user.service.impl;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.complaintportal.user.dto.RegisterRequest;
import com.complaintportal.user.dto.RegisterResponse;
import com.complaintportal.user.entity.User;
import com.complaintportal.user.repository.UserRepository;
import com.complaintportal.user.service.UserService;


@Service
public class UserServiceImpl implements UserService {
	
	
	private final UserRepository userRepository;

	public UserServiceImpl(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	@Override
	public RegisterResponse registerUser(RegisterRequest request) {
		
			if(userRepository.findByEmail(request.getEmail()).isPresent()) {
				
				 throw new RuntimeException("Email is already Registered");
			}
		
			User user = new User();
			
			user.setName(request.getName());
			user.setEmail(request.getEmail());
			user.setPassword(request.getPassword());
			user.setRole(request.getRole());
			user.setActive(true);
			user.setCreatedAt(LocalDateTime.now());
			
			User savedUser = userRepository.save(user);
			
			RegisterResponse response= new RegisterResponse();
			
			response.setId(savedUser.getId());
			response.setName(savedUser.getName());
			response.setEmail(savedUser.getEmail());
			response.setRole(savedUser.getRole());
			
			
				
		return response;
	}
	

}
