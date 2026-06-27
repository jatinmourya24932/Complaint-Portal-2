package com.complaintportal.facultysubject.dto;

import com.complaintportal.common.enums.Section;

public class FacultySubjectRequest {

    private Long facultyProfileId;

    private Long subjectId;

    private Long academicYearId;

    private Section section;

    public Long getFacultyProfileId() {
        return facultyProfileId;
    }

    public void setFacultyProfileId(Long facultyProfileId) {
        this.facultyProfileId = facultyProfileId;
    }

    public Long getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Long subjectId) {
        this.subjectId = subjectId;
    }

    public Long getAcademicYearId() {
        return academicYearId;
    }

    public void setAcademicYearId(Long academicYearId) {
        this.academicYearId = academicYearId;
    }

    public Section getSection() {
        return section;
    }

    public void setSection(Section section) {
        this.section = section;
    }

}