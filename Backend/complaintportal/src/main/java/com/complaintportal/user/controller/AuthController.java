package com.complaintportal.user.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.complaintportal.user.dto.RegisterRequest;
import com.complaintportal.user.dto.RegisterResponse;
import com.complaintportal.user.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	private final UserService userService;

	public AuthController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	@PostMapping("register")
	RegisterResponse registerUser(@RequestBody RegisterRequest request) {
		
		return userService.registerUser(request);
		
	}
	
	
	
}
