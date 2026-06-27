package com.complaintportal.facultysubject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.complaintportal.common.enums.Section;
import com.complaintportal.facultysubject.entity.FacultySubject;

public interface FacultySubjectRepository
        extends JpaRepository<FacultySubject, Long> {

    List<FacultySubject> findBySubjectId(Long subjectId);

    List<FacultySubject> findByFacultyProfileId(Long facultyProfileId);
    
    boolean existsByFacultyProfileIdAndSubjectIdAndAcademicYearIdAndSection(
            Long facultyProfileId,
            Long subjectId,
            Long academicYearId,
            Section section);

}