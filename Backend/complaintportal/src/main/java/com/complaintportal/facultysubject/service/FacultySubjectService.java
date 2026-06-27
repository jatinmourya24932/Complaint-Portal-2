package com.complaintportal.facultysubject.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.complaintportal.facultyProfile.entity.FacultyProfile;
import com.complaintportal.facultyProfile.repository.FacultyProfileRepository;
import com.complaintportal.facultysubject.dto.FacultySubjectRequest;
import com.complaintportal.facultysubject.dto.FacultySubjectResponse;
import com.complaintportal.facultysubject.entity.FacultySubject;
import com.complaintportal.facultysubject.repository.FacultySubjectRepository;
import com.complaintportal.master.academicYear.entity.AcademicYear;
import com.complaintportal.master.academicYear.repository.AcademicYearRepository;
import com.complaintportal.master.subject.entity.Subject;
import com.complaintportal.master.subject.repository.SubjectRepository;

@Service
public class FacultySubjectService {

    private final FacultySubjectRepository repository;
    private final FacultyProfileRepository facultyRepository;
    private final SubjectRepository subjectRepository;
    private final AcademicYearRepository academicYearRepository;

    public FacultySubjectService(
            FacultySubjectRepository repository,
            FacultyProfileRepository facultyRepository,
            SubjectRepository subjectRepository,
            AcademicYearRepository academicYearRepository) {

        this.repository = repository;
        this.facultyRepository = facultyRepository;
        this.subjectRepository = subjectRepository;
        this.academicYearRepository = academicYearRepository;
    }

    public FacultySubjectResponse assignFaculty(FacultySubjectRequest request) {

        FacultyProfile faculty = facultyRepository
                .findById(request.getFacultyProfileId())
                .orElseThrow(() -> new RuntimeException("Faculty not found"));

        Subject subject = subjectRepository
                .findById(request.getSubjectId())
                .orElseThrow(() -> new RuntimeException("Subject not found"));

        AcademicYear year = academicYearRepository
                .findById(request.getAcademicYearId())
                .orElseThrow(() -> new RuntimeException("Academic Year not found"));

        FacultySubject facultySubject = new FacultySubject();

        facultySubject.setFacultyProfile(faculty);
        facultySubject.setSubject(subject);
        facultySubject.setAcademicYear(year);
        facultySubject.setSection(request.getSection());
        facultySubject.setActive(true);

        if (repository.existsByFacultyProfileIdAndSubjectIdAndAcademicYearIdAndSection(
                request.getFacultyProfileId(),
                request.getSubjectId(),
                request.getAcademicYearId(),
                request.getSection())) {

            throw new RuntimeException("Faculty is already assigned to this subject.");
        }
        
        repository.save(facultySubject);

        return mapToResponse(facultySubject);
    }

    public List<FacultySubjectResponse> getBySubject(Long subjectId) {

        return repository.findBySubjectId(subjectId)
                .stream()
                .map(this::mapToResponse)
                .toList();

    }

    public List<FacultySubjectResponse> getByFaculty(Long facultyProfileId) {

        return repository.findByFacultyProfileId(facultyProfileId)
                .stream()
                .map(this::mapToResponse)
                .toList();

    }

    private FacultySubjectResponse mapToResponse(FacultySubject facultySubject) {

        return new FacultySubjectResponse(

                facultySubject.getId(),

                facultySubject.getFacultyProfile()
                        .getUser()
                        .getName(),

                facultySubject.getSubject()
                        .getSubjectName(),

                facultySubject.getAcademicYear()
                        .getYearName(),

                facultySubject.getSection().name()

        );

    }

}