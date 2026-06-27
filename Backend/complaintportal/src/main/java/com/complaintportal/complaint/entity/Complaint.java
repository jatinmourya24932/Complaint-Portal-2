package com.complaintportal.complaint.entity;

import java.time.LocalDateTime;

import com.complaintportal.complaint.enums.Category;
import com.complaintportal.complaint.enums.ComplaintStatus;
import com.complaintportal.complaint.enums.Priority;
import com.complaintportal.common.enums.AssignedToType;
import com.complaintportal.facultysubject.entity.FacultySubject;
import com.complaintportal.master.department.entity.Department;
import com.complaintportal.studentprofile.entity.StudentProfile;

import jakarta.persistence.*;

@Entity
@Table(name = "complaints")
public class Complaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String trackingId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    private ComplaintStatus status;

    @Enumerated(EnumType.STRING)
    private Priority priority;

    @Enumerated(EnumType.STRING)
    private Category category;

    private boolean anonymous;

    private String attachment;

    @Column(name = "spam_score")
    private Double spamScore;

    @Column(name = "ai_summary")
    private String aiSummary;

    @Column(name = "sentiment_score")
    private Double sentimentScore;

    @Column(name = "duplicate_score")
    private Double duplicateScore;

    @Enumerated(EnumType.STRING)
    private AssignedToType assignedToType;

    private Long assignedToId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_profile_id")
    private StudentProfile studentProfile;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "faculty_subject_id")
    private FacultySubject facultySubject;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id")
    private Department department;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private LocalDateTime resolvedAt;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTrackingId() {
		return trackingId;
	}

	public void setTrackingId(String trackingId) {
		this.trackingId = trackingId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public ComplaintStatus getStatus() {
		return status;
	}

	public void setStatus(ComplaintStatus status) {
		this.status = status;
	}

	public Priority getPriority() {
		return priority;
	}

	public void setPriority(Priority priority) {
		this.priority = priority;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public boolean isAnonymous() {
		return anonymous;
	}

	public void setAnonymous(boolean anonymous) {
		this.anonymous = anonymous;
	}

	public String getAttachment() {
		return attachment;
	}

	public void setAttachment(String attachment) {
		this.attachment = attachment;
	}

	public Double getSpamScore() {
		return spamScore;
	}

	public void setSpamScore(Double spamScore) {
		this.spamScore = spamScore;
	}

	public String getAiSummary() {
		return aiSummary;
	}

	public void setAiSummary(String aiSummary) {
		this.aiSummary = aiSummary;
	}

	public Double getSentimentScore() {
		return sentimentScore;
	}

	public void setSentimentScore(Double sentimentScore) {
		this.sentimentScore = sentimentScore;
	}

	public Double getDuplicateScore() {
		return duplicateScore;
	}

	public void setDuplicateScore(Double duplicateScore) {
		this.duplicateScore = duplicateScore;
	}

	public AssignedToType getAssignedToType() {
		return assignedToType;
	}

	public void setAssignedToType(AssignedToType assignedToType) {
		this.assignedToType = assignedToType;
	}

	public Long getAssignedToId() {
		return assignedToId;
	}

	public void setAssignedToId(Long assignedToId) {
		this.assignedToId = assignedToId;
	}

	public StudentProfile getStudentProfile() {
		return studentProfile;
	}

	public void setStudentProfile(StudentProfile studentProfile) {
		this.studentProfile = studentProfile;
	}

	public FacultySubject getFacultySubject() {
		return facultySubject;
	}

	public void setFacultySubject(FacultySubject facultySubject) {
		this.facultySubject = facultySubject;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}

	public LocalDateTime getResolvedAt() {
		return resolvedAt;
	}

	public void setResolvedAt(LocalDateTime resolvedAt) {
		this.resolvedAt = resolvedAt;
	}

}