package com.complaintportal.studentprofile.dto;

public class StudentProfileResponse {

    private Long id;
    private String name;
    private String email;
    private String rollNumber;
    private String course;
    private String department;
    private Integer semester;
    private String section;
    private Boolean registered;
    private Long courseId;
    private Long departmentId;
    private Long semesterId;
    private Long academicYearId;

	
	public StudentProfileResponse(Long id, String name, String email, String rollNumber, String course,
			String department, Integer semester, String section, Boolean registered, Long courseId, Long departmentId,
			Long semesterId, Long academicYearId) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.rollNumber = rollNumber;
		this.course = course;
		this.department = department;
		this.semester = semester;
		this.section = section;
		this.registered = registered;
		this.courseId = courseId;
		this.departmentId = departmentId;
		this.semesterId = semesterId;
		this.academicYearId = academicYearId;
	}
	public Boolean getRegistered() {
		return registered;
	}
	public void setRegistered(Boolean registered) {
		this.registered = registered;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	public String getRollNumber() {
		return rollNumber;
	}
	public void setRollNumber(String rollNumber) {
		this.rollNumber = rollNumber;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public Integer getSemester() {
		return semester;
	}
	public void setSemester(Integer semester) {
		this.semester = semester;
	}
	public String getSection() {
		return section;
	}
	public void setSection(String section) {
		this.section = section;
	}
	public Long getCourseId() {
		return courseId;
	}
	public void setCourseId(Long courseId) {
		this.courseId = courseId;
	}
	public Long getDepartmentId() {
		return departmentId;
	}
	public void setDepartmentId(Long departmentId) {
		this.departmentId = departmentId;
	}
	public Long getSemesterId() {
		return semesterId;
	}
	public void setSemesterId(Long semesterId) {
		this.semesterId = semesterId;
	}
	public Long getAcademicYearId() {
		return academicYearId;
	}
	public void setAcademicYearId(Long academicYearId) {
		this.academicYearId = academicYearId;
	}

}