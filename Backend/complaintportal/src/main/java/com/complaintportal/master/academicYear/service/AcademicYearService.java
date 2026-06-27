package com.complaintportal.master.academicYear.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.complaintportal.master.academicYear.dto.AcademicYearResponse;
import com.complaintportal.master.academicYear.repository.AcademicYearRepository;

@Service
public class AcademicYearService {

    private final AcademicYearRepository repository;

    public AcademicYearService(
            AcademicYearRepository repository) {

        this.repository = repository;

    }

    public List<AcademicYearResponse> getAllAcademicYears() {

        return repository.findAll()

                .stream()

                .map(year -> new AcademicYearResponse(

                        year.getId(),

                        year.getYearName(),

                        year.getActive()

                ))

                .toList();

    }

}