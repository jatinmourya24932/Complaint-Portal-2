package com.complaintportal.user.controller;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.complaintportal.user.dto.UpdateActiveStatusRequest;
import com.complaintportal.user.dto.UpdateRoleRequest;
import com.complaintportal.user.dto.UserResponse;
import com.complaintportal.user.service.UserService;

import jakarta.validation.Valid;

	@RestController
	@RequestMapping("/api/users")
	@PreAuthorize("hasRole('ADMIN')")
	public class UserController {

	    private final UserService userService;

	    public UserController(
	            UserService userService) {

	        this.userService = userService;
	    }

	    @GetMapping
	    public List<UserResponse> getAllUsers() {

	        return userService.getAllUsers();
	    }

	    @GetMapping("/{id}")
	    public UserResponse getUserById(
	            @PathVariable Long id) {

	        return userService.getUserById(id);
	    }

	    @PatchMapping("/{id}/role")
	    public UserResponse updateUserRole(
	            @PathVariable Long id,
	            @Valid @RequestBody
	            UpdateRoleRequest request) {

	        return userService.updateUserRole(
	                id,
	                request);
	    }

	    @PatchMapping("/{id}/active")
	    public UserResponse updateUserStatus(
	            @PathVariable Long id,
	            @RequestBody
	            UpdateActiveStatusRequest request) {

	        return userService.updateUserStatus(
	                id,
	                request);
	    }

	}


