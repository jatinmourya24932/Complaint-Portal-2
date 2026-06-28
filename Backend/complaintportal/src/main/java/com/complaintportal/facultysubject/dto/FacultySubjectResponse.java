package com.complaintportal.facultysubject.dto;

import com.complaintportal.common.enums.Section;

public class FacultySubjectResponse {

    private Long id;

    private String facultyName;

    private String subjectName;

    private String academicYear;

    private Section section;

    public FacultySubjectResponse(
            Long id,
            String facultyName,
            String subjectName,
            String academicYear,
            Section section) {

        this.id = id;
        this.facultyName = facultyName;
        this.subjectName = subjectName;
        this.academicYear = academicYear;
        this.section = section;

    }

    public Long getId() {
        return id;
    }

    public String getFacultyName() {
        return facultyName;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public String getAcademicYear() {
        return academicYear;
    }

    public Section getSection() {
        return section;
    }

}