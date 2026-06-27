package com.complaintportal.master.department.entity;

import com.complaintportal.master.course.entity.Course;
import com.complaintportal.user.entity.User;

import jakarta.persistence.*;

@Entity
@Table(name = "departments")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;
    
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hod_user_id", unique = true)
    private User hodUser;

    public User getHodUser() {
		return hodUser;
	}

	public void setHodUser(User hod) {
		this.hodUser = hod;
	}

	public Department() {}

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

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

}