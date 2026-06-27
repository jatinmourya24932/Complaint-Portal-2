package com.complaintportal.master.course.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.complaintportal.master.course.entity.Course;
import com.complaintportal.master.course.service.CourseService;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseService service;

    public CourseController(CourseService service) {
        this.service = service;
    }

    @GetMapping
    public List<Course> getAllCourses() {
        return service.getAllCourses();
    }

}