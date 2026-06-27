package com.complaintportal.user.dto;

import com.complaintportal.user.enums.Role;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class RegisterRequest {
	@NotBlank(message="Name is Required")
	private String name;
	
	@Size(min = 6, message = "Password must be at least 6 characters")
	@NotBlank(message = "Password is required")
	private String password;
	
	@Email(message = "Invalid email format")
	@NotBlank(message = "Email is required")
	private String email;
	@NotBlank(message="Role is Required")
	private Role role;
	
	@NotBlank
	private String rollNumber;
	public String getRollNumber() {
		return rollNumber;
	}
	public void setRollNumber(String rollNumber) {
		this.rollNumber = rollNumber;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
}
