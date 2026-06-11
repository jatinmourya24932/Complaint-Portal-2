package com.complaintportal.user.service;

import com.complaintportal.user.dto.LoginRequest;
import com.complaintportal.user.dto.LoginResponse;
import com.complaintportal.user.dto.RegisterRequest;
import com.complaintportal.user.dto.RegisterResponse;

public interface UserService {
	RegisterResponse registerUser(RegisterRequest request);
	
	LoginResponse login(LoginRequest request);
}
