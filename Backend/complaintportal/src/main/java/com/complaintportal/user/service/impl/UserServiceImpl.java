package com.complaintportal.user.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.complaintportal.exception.DuplicateResourceException;
import com.complaintportal.exception.InvalidCredentialsException;
import com.complaintportal.exception.ResourceNotFoundException;
import com.complaintportal.security.JwtService;
import com.complaintportal.user.dto.LoginRequest;
import com.complaintportal.user.dto.LoginResponse;
import com.complaintportal.user.dto.RegisterRequest;
import com.complaintportal.user.dto.RegisterResponse;
import com.complaintportal.user.dto.UpdateActiveStatusRequest;
import com.complaintportal.user.dto.UpdateRoleRequest;
import com.complaintportal.user.dto.UserResponse;
import com.complaintportal.user.entity.User;
import com.complaintportal.user.enums.Role;
import com.complaintportal.user.repository.UserRepository;
import com.complaintportal.user.service.UserService;

import jakarta.validation.Valid;


@Service
public class UserServiceImpl implements UserService {
	
	
	private final UserRepository userRepository;
	
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;

	public UserServiceImpl(UserRepository userRepository,PasswordEncoder passwordEncoder,JwtService jwtService) {
		super();
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
		this.jwtService =jwtService;
	}

	@Override
	public RegisterResponse registerUser(@Valid @RequestBody RegisterRequest request) {
		
			if(userRepository.findByEmail(request.getEmail()).isPresent()) {
				
				 throw new DuplicateResourceException("Email is already Registered");
			}
		
			User user = new User();
			
			user.setName(request.getName());
			user.setEmail(request.getEmail());
			user.setPassword(
			        passwordEncoder.encode(
			                request.getPassword()));
			user.setRole(Role.STUDENT);
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

	@Override
	public LoginResponse login(LoginRequest request) {

	    User user = userRepository
	            .findByEmail(request.getEmail())
	            .orElseThrow(
	                    () -> new InvalidCredentialsException(
	                            "Invalid Email"));

	    if (!passwordEncoder.matches(
	            request.getPassword(),
	            user.getPassword())) {

	        throw new InvalidCredentialsException(
	                "Invalid Password");

	    }

	    LoginResponse response =
	            new LoginResponse();

	    response.setId(user.getId());

	    response.setName(user.getName());

	    response.setEmail(user.getEmail());

	    response.setRole(user.getRole());
	    
	    response.setToken(
	            jwtService.generateToken(
	                    user.getEmail()));

	    return response;
	}
	
	@Override
	public UserResponse getCurrentUser() {

	    String email =
	            SecurityContextHolder
	                    .getContext()
	                    .getAuthentication()
	                    .getName();

	    User user =
	            userRepository
	                    .findByEmail(email)
	                    .orElseThrow(
	                            () -> new ResourceNotFoundException(
	                                    "User not found"));

	    UserResponse response = new UserResponse();

	    response.setId(user.getId());
	    response.setName(user.getName());
	    response.setEmail(user.getEmail());
	    response.setRole(user.getRole());

	    return response;
	}
	
	@Override
	public List<UserResponse> getAllUsers() {

	    List<User> users =
	            userRepository.findAll();

	    return users.stream()
	            .map(this::mapToUserResponse)
	            .toList();
	}
	
	@Override
	public UserResponse getUserById(
	        Long id) {

	    User user =
	            userRepository.findById(id)
	                    .orElseThrow(
	                            () -> new ResourceNotFoundException(
	                                    "User not found"));

	    return mapToUserResponse(user);
	}
	
	@Override
	public UserResponse updateUserRole(
	        Long id,
	        UpdateRoleRequest request) {

	    User user =
	            userRepository.findById(id)
	                    .orElseThrow(
	                            () -> new ResourceNotFoundException(
	                                    "User not found"));

	    user.setRole(request.getRole());

	    user.setUpdatedAt(
	            LocalDateTime.now());

	    User updatedUser =
	            userRepository.save(user);

	    return mapToUserResponse(
	            updatedUser);
	}
	
	@Override
	public UserResponse updateUserStatus(
	        Long id,
	        UpdateActiveStatusRequest request) {

	    User user =
	            userRepository.findById(id)
	                    .orElseThrow(
	                            () -> new ResourceNotFoundException(
	                                    "User not found"));

	    user.setActive(
	            request.isActive());

	    user.setUpdatedAt(
	            LocalDateTime.now());

	    User updatedUser =
	            userRepository.save(user);

	    return mapToUserResponse(
	            updatedUser);
	}
	
	private UserResponse mapToUserResponse(
	        User user) {

	    UserResponse response =
	            new UserResponse();

	    response.setId(user.getId());
	    response.setName(user.getName());
	    response.setEmail(user.getEmail());
	    response.setRole(user.getRole());
	    response.setActive(user.isActive());

	    return response;
	}

}
