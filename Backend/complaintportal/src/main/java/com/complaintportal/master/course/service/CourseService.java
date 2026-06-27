package com.complaintportal.master.course.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.complaintportal.master.course.entity.Course;
import com.complaintportal.master.course.repository.CourseRepository;

@Service
public class CourseService {

    private final CourseRepository repository;

    public CourseService(CourseRepository repository) {
        this.repository = repository;
    }

    public List<Course> getAllCourses() {
        return repository.findAll();
    }

}