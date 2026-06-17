package com.complaintportal.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
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
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ErrorResponse> handleValidationException(
	        MethodArgumentNotValidException ex) {

	    String message = ex.getBindingResult()
	            .getFieldError()
	            .getDefaultMessage();

	    ErrorResponse errorResponse = new ErrorResponse();

	    errorResponse.setSuccess(false);
	    errorResponse.setMessage(message);
	    errorResponse.setTimestamp(LocalDateTime.now());
	    errorResponse.setStatusCode(HttpStatus.BAD_REQUEST.value());

	    return new ResponseEntity<>(
	            errorResponse,
	            HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorResponse>
	handleException(Exception ex) {

	    ErrorResponse response = new ErrorResponse();

	    response.setSuccess(false);
	    response.setMessage(ex.getMessage());
	    response.setTimestamp(LocalDateTime.now());
	    response.setStatusCode(
	            HttpStatus.INTERNAL_SERVER_ERROR.value());

	    return new ResponseEntity<>(
	            response,
	            HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	

}
