package com.complaintportal.facultyProfile.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class UpdateFacultyRequest {

 @NotBlank
 private String name;

 @Email
 @NotBlank
 private String email;

 @NotBlank
 private String designation;

 @NotBlank
 private String phone;

 @NotNull
 private Long departmentId;

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

 public String getDesignation() {
	return designation;
 }

 public void setDesignation(String designation) {
	this.designation = designation;
 }

 public String getPhone() {
	return phone;
 }

 public void setPhone(String phone) {
	this.phone = phone;
 }

 public Long getDepartmentId() {
	return departmentId;
 }

 public void setDepartmentId(Long departmentId) {
	this.departmentId = departmentId;
 }

 
}