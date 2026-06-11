package com.complaintportal.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.complaintportal.common.ApiResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<ApiResponse>
	handleResourceNotFoundException(
	        ResourceNotFoundException ex) {

	    ApiResponse response = new ApiResponse();

	    response.setSuccess(false);

	    response.setMessage(ex.getMessage());

	    response.setTimestamp(LocalDateTime.now());
	    
	    response.setStatusCode(404);

	    return new ResponseEntity<>(
	            response,
	            HttpStatus.NOT_FOUND);

	}
	
	@ExceptionHandler(DuplicateResourceException.class)
	public ResponseEntity<ApiResponse>
	handleDuplicateResourceException(
	        DuplicateResourceException ex) {

	    ApiResponse response = new ApiResponse();

	    response.setSuccess(false);

	    response.setMessage(ex.getMessage());

	    response.setTimestamp(LocalDateTime.now());
	    
	    response.setStatusCode(404);

	    return new ResponseEntity<>(
	            response,
	            HttpStatus.CONFLICT);

	}
	
	@ExceptionHandler(
	        InvalidCredentialsException.class)
	public ResponseEntity<ApiResponse>
	handleInvalidCredentialsException(
	        InvalidCredentialsException ex) {

	    ApiResponse response =
	            new ApiResponse();

	    response.setSuccess(false);

	    response.setMessage(
	            ex.getMessage());

	    response.setTimestamp(
	            LocalDateTime.now());

	    return new ResponseEntity<>(
	            response,
	            HttpStatus.UNAUTHORIZED);

	}

}
