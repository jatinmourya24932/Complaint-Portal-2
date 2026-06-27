package com.complaintportal.facultysubject.entity;

import com.complaintportal.common.enums.Section;
import com.complaintportal.facultyProfile.entity.FacultyProfile;
import com.complaintportal.master.academicYear.entity.AcademicYear;
import com.complaintportal.master.subject.entity.Subject;

import jakarta.persistence.*;

@Entity
@Table(name = "faculty_subject")
public class FacultySubject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "faculty_profile_id")
    private FacultyProfile facultyProfile;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subject_id")
    private Subject subject;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "academic_year_id")
    private AcademicYear academicYear;

    @Enumerated(EnumType.STRING)
    private Section section;

    @Column(nullable = false)
    private Boolean active = true;

    public FacultySubject() {
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public FacultyProfile getFacultyProfile() {
		return facultyProfile;
	}

	public void setFacultyProfile(FacultyProfile facultyProfile) {
		this.facultyProfile = facultyProfile;
	}

	public Subject getSubject() {
		return subject;
	}

	public void setSubject(Subject subject) {
		this.subject = subject;
	}

	public AcademicYear getAcademicYear() {
		return academicYear;
	}

	public void setAcademicYear(AcademicYear academicYear) {
		this.academicYear = academicYear;
	}

	public Section getSection() {
		return section;
	}

	public void setSection(Section section) {
		this.section = section;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

  

}