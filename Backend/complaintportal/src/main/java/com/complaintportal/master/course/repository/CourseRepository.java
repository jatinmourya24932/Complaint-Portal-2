package com.complaintportal.master.course.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.complaintportal.master.course.entity.Course;

public interface CourseRepository extends JpaRepository<Course,Long>{

}