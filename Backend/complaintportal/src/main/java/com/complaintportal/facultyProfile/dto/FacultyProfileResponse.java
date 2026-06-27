package com.complaintportal.facultyProfile.dto;

public class FacultyProfileResponse {

    private Long id;
    private Long userId;
    private String name;
    private String employeeCode;
    private String designation;
    private String phone;
    private Long departmentId;
    private String email;
    private String departmentName;
    
    public FacultyProfileResponse(Long id, Long userId, String name, String employeeCode, String designation,
			String phone, Long departmentId, String email, String departmentName) {
		super();
		this.id = id;
		this.userId = userId;
		this.name = name;
		this.employeeCode = employeeCode;
		this.designation = designation;
		this.phone = phone;
		this.departmentId = departmentId;
		this.email = email;
		this.departmentName = departmentName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}


  

    public Long getId() {
        return id;
    }

    public Long getUserId() {
        return userId;
    }

    public String getName() {
        return name;
    }

    public String getEmployeeCode() {
        return employeeCode;
    }

    public String getDesignation() {
        return designation;
    }

    public String getPhone() {
        return phone;
    }

    public Long getDepartmentId() {
        return departmentId;
    }
}