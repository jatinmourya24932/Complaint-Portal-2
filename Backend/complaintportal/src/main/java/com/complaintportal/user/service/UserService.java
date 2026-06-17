package com.complaintportal.user.service;

import java.util.List;

import com.complaintportal.user.dto.LoginRequest;
import com.complaintportal.user.dto.LoginResponse;
import com.complaintportal.user.dto.RegisterRequest;
import com.complaintportal.user.dto.RegisterResponse;
import com.complaintportal.user.dto.UpdateActiveStatusRequest;
import com.complaintportal.user.dto.UpdateRoleRequest;
import com.complaintportal.user.dto.UserResponse;

public interface UserService {
	RegisterResponse registerUser(RegisterRequest request);
	
	LoginResponse login(LoginRequest request);
	UserResponse getCurrentUser();
	
	List<UserResponse> getAllUsers();

	UserResponse getUserById(Long id);

	UserResponse updateUserRole(
	        Long id,
	        UpdateRoleRequest request);

	UserResponse updateUserStatus(
	        Long id,
	        UpdateActiveStatusRequest request);
}
