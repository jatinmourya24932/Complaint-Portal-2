package com.complaintportal.complaint.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import com.complaintportal.common.enums.AssignedToType;
import com.complaintportal.complaint.dto.ComplaintResponse;
import com.complaintportal.complaint.dto.CreateComplaintRequest;
import com.complaintportal.complaint.dto.UpdateStatusRequest;
import com.complaintportal.complaint.entity.Complaint;
import com.complaintportal.complaint.enums.ComplaintStatus;
import com.complaintportal.complaint.repository.ComplaintRepository;
import com.complaintportal.complaint.service.ComplaintService;
import com.complaintportal.complaint.util.TrackingIdGenerator;
import com.complaintportal.email.service.EmailService;
import com.complaintportal.exception.ResourceNotFoundException;
import com.complaintportal.facultyProfile.entity.FacultyProfile;
import com.complaintportal.facultyProfile.repository.FacultyProfileRepository;
import com.complaintportal.facultysubject.entity.FacultySubject;
import com.complaintportal.facultysubject.repository.FacultySubjectRepository;
import com.complaintportal.master.department.entity.Department;
import com.complaintportal.master.department.repository.DepartmentRepository;
import com.complaintportal.studentprofile.entity.StudentProfile;
import com.complaintportal.studentprofile.repository.StudentProfileRepository;

@Service
public class ComplaintServiceImpl implements ComplaintService{
	
	private final ComplaintRepository complaintRepository;
	private final StudentProfileRepository studentRepository;
	private final FacultySubjectRepository facultySubjectRepository;
	private final DepartmentRepository departmentRepository;
	private final EmailService emailService;
	private final FacultyProfileRepository facultyProfileRepository;

	public ComplaintServiceImpl(
	        ComplaintRepository complaintRepository,
	        StudentProfileRepository studentRepository,
	        FacultySubjectRepository facultySubjectRepository,
	        DepartmentRepository departmentRepository,
	        EmailService emailService,
	        FacultyProfileRepository facultyProfileRepository) {

	    this.complaintRepository = complaintRepository;
	    this.studentRepository = studentRepository;
	    this.facultySubjectRepository = facultySubjectRepository;
	    this.departmentRepository = departmentRepository;
	    this.emailService = emailService;
	    this.facultyProfileRepository = facultyProfileRepository;
	}

	public ComplaintResponse createComplaint(CreateComplaintRequest request) {

	    StudentProfile student = studentRepository
	            .findById(request.getStudentProfileId())
	            .orElseThrow(() ->
	                    new RuntimeException("Student not found"));

	    Complaint complaint = new Complaint();

	    complaint.setTrackingId(
	            TrackingIdGenerator.generate());

	    complaint.setTitle(request.getTitle());

	    complaint.setDescription(request.getDescription());

	    complaint.setPriority(request.getPriority());

	    complaint.setCategory(request.getCategory());

	    complaint.setAnonymous(request.isAnonymous());

	    complaint.setStatus(ComplaintStatus.SUBMITTED);

	    complaint.setStudentProfile(student);
	    
	    complaint.setDepartment(

	            student.getDepartment()

	    );

	    complaint.setCreatedAt(LocalDateTime.now());

	    complaint.setUpdatedAt(LocalDateTime.now());

	    complaint.setSpamScore(0.0);

	    complaint.setDuplicateScore(0.0);

	    complaint.setSentimentScore(0.0);

	    complaint.setAiSummary(null);
	    if(request.getFacultySubjectId()!=null){

	        FacultySubject facultySubject =
	                facultySubjectRepository
	                .findById(request.getFacultySubjectId())
	                .orElseThrow(()->
	                        new RuntimeException("Faculty Subject not found"));

	        complaint.setFacultySubject(facultySubject);

	    }
	    
	   
	    
	    switch (request.getCategory()) {

        case FACULTY:

            if(request.getFacultySubjectId()==null){

                throw new RuntimeException(
                        "Faculty is required");

            }

            complaint.setAssignedToType(
                    AssignedToType.FACULTY);

            complaint.setAssignedToId(
                    request.getFacultySubjectId());

            break;

        case INFRASTRUCTURE:

            complaint.setAssignedToType(
                    AssignedToType.ADMIN);

            complaint.setAssignedToId(1L);

            break;

        case LIBRARY:

            complaint.setAssignedToType(
                    AssignedToType.LIBRARY);

            complaint.setAssignedToId(1L);

            break;

        case TRANSPORT:

            complaint.setAssignedToType(
                    AssignedToType.TRANSPORT);

            complaint.setAssignedToId(1L);

            break;

        default:

            complaint.setAssignedToType(
                    AssignedToType.ADMIN);

            complaint.setAssignedToId(1L);

    }
	    
	    complaintRepository.save(complaint);
	 // Student Confirmation
	    emailService.sendEmail(
	            complaint.getStudentProfile()
	                    .getUser()
	                    .getEmail(),
	            "Complaint Submitted Successfully",
	            "Your complaint has been registered successfully.\n\nTracking ID : "
	                    + complaint.getTrackingId());
	    
	    if (complaint.getFacultySubject() != null) {

	        emailService.sendEmail(

	                complaint.getFacultySubject()
	                        .getFacultyProfile()
	                        .getUser()
	                        .getEmail(),

	                "New Complaint Assigned",

	                "A new complaint has been assigned to you.\nTracking ID : "
	                        + complaint.getTrackingId());

	    }
	    
		/*
		 * if (complaint.getFacultySubject() != null && complaint.getFacultySubject()
		 * .getFacultyProfile() .getDepartment() .getHodUser() != null) {
		 * 
		 * emailService.sendEmail(
		 * 
		 * complaint.getFacultySubject() .getFacultyProfile() .getDepartment()
		 * .getHodUser() .getEmail(),
		 * 
		 * "New Complaint Registered",
		 * 
		 * "A complaint has been registered in your department.\nTracking ID : " +
		 * complaint.getTrackingId());
		 * 
		 * }
		 */
	    

	    return mapToResponse(complaint);

	}

	@Override
	public List<ComplaintResponse> getAllComplaints() {

	    List<Complaint> complaints =
	            complaintRepository.findAll();

	    List<ComplaintResponse> responses =
	            new ArrayList<>();

	    for (Complaint complaint : complaints) {

	        ComplaintResponse response =
	                mapToResponse(complaint);

	        response.setId(complaint.getId());

	        response.setTitle(
	                complaint.getTitle());

	        response.setDescription(
	                complaint.getDescription());

	        response.setStatus(
	                complaint.getStatus());

	        response.setPriority(
	                complaint.getPriority());

	        response.setCategory(
	                complaint.getCategory());

	        response.setStudentName(

	                complaint.getStudentProfile()
	                        .getUser()
	                        .getName()

	        );

	        if (complaint.getFacultySubject() != null) {

	            response.setFacultyName(

	                    complaint.getFacultySubject()
	                            .getFacultyProfile()
	                            .getUser()
	                            .getName()

	            );

	            response.setSubjectName(

	                    complaint.getFacultySubject()
	                            .getSubject()
	                            .getSubjectName()

	            );

	        }

	        if (complaint.getDepartment() != null) {

	            response.setDepartmentName(

	                    complaint.getDepartment()
	                            .getName()

	            );

	        }
	        response.setCreatedAt(
	                complaint.getCreatedAt());

	        responses.add(response);
	    }

	    return responses;
	}
	
	@Override
	public ComplaintResponse getComplaintById(
	        Long id) {

	    Complaint complaint =
	            complaintRepository
	            .findById(id)
	            .orElseThrow(
	                    () -> new ResourceNotFoundException(
	                            "Complaint not found"));

	    ComplaintResponse response =
	            mapToResponse(complaint);

	    return response;
	}


	@Override
	public ComplaintResponse updateComplaintStatus(
	        Long id,
	        UpdateStatusRequest request) {

	    Complaint complaint = complaintRepository
	            .findById(id)
	            .orElseThrow(
	                    () -> new ResourceNotFoundException(
	                            "Complaint not found"));

	    complaint.setStatus(request.getStatus());

	    complaint.setUpdatedAt(LocalDateTime.now());

	    Complaint updatedComplaint =
	            complaintRepository.save(complaint);
	    
	    emailService.sendStatusUpdateNotification(
	            updatedComplaint);
	   

	    ComplaintResponse response =
	           mapToResponse(updatedComplaint);

	    return response;


	}
	
	
	@Override
	public List<ComplaintResponse> getComplaintsByStudent(Long userId) {

	    StudentProfile student = studentRepository
	            .findByUserId(userId)
	            .orElseThrow(() ->
	                    new ResourceNotFoundException("Student not found"));

	    return complaintRepository
	            .findByStudentProfileId(student.getId())
	            .stream()
	            .map(this::mapToResponse)
	            .toList();
	}
	@Override
	public List<ComplaintResponse> getComplaintsByFacultySubject(Long facultySubjectId) {

	    facultySubjectRepository.findById(facultySubjectId)
	            .orElseThrow(() ->
	                    new ResourceNotFoundException("Faculty Subject not found"));

	    List<Complaint> complaints =
	            complaintRepository.findByFacultySubjectId(facultySubjectId);

	    List<ComplaintResponse> responses = new ArrayList<>();

	    for (Complaint complaint : complaints) {

	        responses.add(mapToResponse(complaint));

	    }

	    return responses;
	}
	
	private ComplaintResponse mapToResponse(
	        Complaint complaint){

	    ComplaintResponse response =
	            new ComplaintResponse();

	    response.setId(complaint.getId());

	    response.setTrackingId(
	            complaint.getTrackingId());

	    response.setTitle(
	            complaint.getTitle());

	    response.setDescription(
	            complaint.getDescription());

	    response.setStatus(
	            complaint.getStatus());

	    response.setPriority(
	            complaint.getPriority());

	    response.setCategory(
	            complaint.getCategory());

	    response.setAnonymous(
	            complaint.isAnonymous());

	    response.setCreatedAt(
	            complaint.getCreatedAt());

	    response.setStudentName(

	            complaint.getStudentProfile()

	                    .getUser()

	                    .getName()

	    );

	    if(complaint.getFacultySubject()!=null){

	        response.setFacultyName(

	                complaint.getFacultySubject()

	                        .getFacultyProfile()

	                        .getUser()

	                        .getName()

	        );

	        response.setSubjectName(

	                complaint.getFacultySubject()

	                        .getSubject()

	                        .getSubjectName()

	        );

	    }

	    if(complaint.getDepartment()!=null){

	        response.setDepartmentName(

	                complaint.getDepartment()

	                        .getName()

	        );

	    }

	    return response;

	}

	@Override
	public ComplaintResponse getComplaintByTrackingId(String trackingId) {

	    Complaint complaint = complaintRepository
	            .findByTrackingId(trackingId)
	            .orElseThrow(() ->
	                    new ResourceNotFoundException(
	                            "Complaint not found with Tracking Id : " + trackingId));

	    return mapToResponse(complaint);

	}
	
	@Override
	public List<ComplaintResponse> getComplaintsByFaculty(Long userId) {

	    FacultyProfile faculty = facultyProfileRepository
	            .findByUserId(userId)
	            .orElseThrow(() ->
	                    new ResourceNotFoundException("Faculty not found"));

	    return complaintRepository
	            .findByFacultySubjectFacultyProfileId(faculty.getId())
	            .stream()
	            .map(this::mapToResponse)
	            .toList();
	}
	
	@Override
	public List<ComplaintResponse> getComplaintsByHod(Long userId){

	    return complaintRepository
	            .findByDepartmentHodUserId(userId)
	            .stream()
	            .map(this::mapToResponse)
	            .toList();

	}
	
}
