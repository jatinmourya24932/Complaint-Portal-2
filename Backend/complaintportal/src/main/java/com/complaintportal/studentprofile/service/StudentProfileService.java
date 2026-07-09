package com.complaintportal.studentprofile.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.complaintportal.master.academicYear.entity.AcademicYear;
import com.complaintportal.master.academicYear.repository.AcademicYearRepository;
import com.complaintportal.master.course.entity.Course;
import com.complaintportal.master.course.repository.CourseRepository;
import com.complaintportal.master.department.entity.Department;
import com.complaintportal.master.department.repository.DepartmentRepository;
import com.complaintportal.master.semester.entity.Semester;
import com.complaintportal.master.semester.repository.SemesterRepository;
import com.complaintportal.studentprofile.dto.CreateStudentProfileRequest;
import com.complaintportal.studentprofile.dto.StudentProfileResponse;
import com.complaintportal.studentprofile.entity.StudentProfile;
import com.complaintportal.studentprofile.repository.StudentProfileRepository;

import jakarta.transaction.Transactional;

@Service
public class StudentProfileService {

   
    private final StudentProfileRepository repository;
    private final CourseRepository courseRepository;
    private final DepartmentRepository departmentRepository;
    private final SemesterRepository semesterRepository;
    private final AcademicYearRepository academicYearRepository;

    public StudentProfileService(
            StudentProfileRepository repository,
            CourseRepository courseRepository,
            DepartmentRepository departmentRepository,
            SemesterRepository semesterRepository,
            AcademicYearRepository academicYearRepository) {

        this.repository = repository;
        this.courseRepository = courseRepository;
        this.departmentRepository = departmentRepository;
        this.semesterRepository = semesterRepository;
        this.academicYearRepository = academicYearRepository;
    }


    // Verify Roll Number
    public StudentProfileResponse verifyRollNumber(String rollNumber) {
    		System.out.println("verify roll");
        StudentProfile student = repository.findByRollNumber(rollNumber)
                .orElseThrow(() -> new RuntimeException("Invalid Roll Number"));

        return mapToResponse(student);
    }

    // Get Profile by User Id
    public StudentProfileResponse getStudentProfile(Long userId) {

        StudentProfile student = repository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Student Not Found"));

        return mapToResponse(student);

    }

    // Get Students by Department
    public List<StudentProfileResponse> getStudentsByDepartment(Long departmentId) {

        return repository.findByDepartmentId(departmentId)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    // Mapper Method
    private StudentProfileResponse mapToResponse(
            StudentProfile student) {

    	return new StudentProfileResponse(

    	        student.getId(),

    	        student.getStudentName(),

    	        student.getUser()!=null
    	                ? student.getUser().getEmail()
    	                : null,

    	        student.getRollNumber(),

    	        student.getCourse().getName(),

    	        student.getDepartment().getName(),

    	        student.getSemester().getSemesterNo(),

    	        student.getSection().name(),

    	        student.getRegistered(),
    	        student.getCourse().getId(),

    	        student.getDepartment().getId(),

    	        student.getSemester().getId(),

    	        student.getAcademicYear().getId()

    	);
       

    }
    
    @Transactional
    public StudentProfileResponse createStudent(
            CreateStudentProfileRequest request) {

        if (repository.existsByRollNumber(request.getRollNumber())) {

            throw new RuntimeException("Roll Number already exists");

        }

        Course course = courseRepository.findById(request.getCourseId())

                .orElseThrow(() ->
                        new RuntimeException("Course Not Found"));

        Department department = departmentRepository.findById(request.getDepartmentId())

                .orElseThrow(() ->
                        new RuntimeException("Department Not Found"));

        Semester semester = semesterRepository.findById(request.getSemesterId())

                .orElseThrow(() ->
                        new RuntimeException("Semester Not Found"));

        AcademicYear academicYear = academicYearRepository

                .findById(request.getAcademicYearId())

                .orElseThrow(() ->
                        new RuntimeException("Academic Year Not Found"));

        StudentProfile student = new StudentProfile();

        student.setStudentName(request.getStudentName());

        student.setRollNumber(request.getRollNumber());

        student.setCourse(course);

        student.setDepartment(department);

        student.setSemester(semester);

        student.setAcademicYear(academicYear);

        student.setSection(request.getSection());

        student.setRegistered(false);

        StudentProfile saved = repository.save(student);

        return mapToResponse(saved);

    }
    
    public List<StudentProfileResponse> getAllStudents() {

        return repository.findAll()

                .stream()

                .map(this::mapToResponse)

                .toList();

    }
    @Transactional
    public StudentProfileResponse updateStudent(

            Long id,

            CreateStudentProfileRequest request){

        StudentProfile student = repository.findById(id)

                .orElseThrow(() ->
                        new RuntimeException("Student Not Found"));

        Course course = courseRepository.findById(request.getCourseId())

                .orElseThrow(() ->
                        new RuntimeException("Course Not Found"));

        Department department = departmentRepository.findById(request.getDepartmentId())

                .orElseThrow(() ->
                        new RuntimeException("Department Not Found"));

        Semester semester = semesterRepository.findById(request.getSemesterId())

                .orElseThrow(() ->
                        new RuntimeException("Semester Not Found"));

        AcademicYear academicYear = academicYearRepository.findById(

                request.getAcademicYearId())

                .orElseThrow(() ->
                        new RuntimeException("Academic Year Not Found"));

        student.setStudentName(request.getStudentName());

        student.setCourse(course);

        student.setDepartment(department);

        student.setSemester(semester);

        student.setAcademicYear(academicYear);

        student.setSection(request.getSection());

        StudentProfile updated = repository.save(student);

        return mapToResponse(updated);

    }

}