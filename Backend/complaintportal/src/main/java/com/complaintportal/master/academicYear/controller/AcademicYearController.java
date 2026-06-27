package com.complaintportal.master.academicYear.controller;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import com.complaintportal.master.academicYear.dto.AcademicYearResponse;
import com.complaintportal.master.academicYear.service.AcademicYearService;

@RestController
@RequestMapping("/api/academic-years")
public class AcademicYearController {

    private final AcademicYearService service;

    public AcademicYearController(
            AcademicYearService service) {

        this.service = service;

    }

    @GetMapping
    public List<AcademicYearResponse> getAllAcademicYears() {

        return service.getAllAcademicYears();

    }

}