package com.complaintportal.master.subject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.complaintportal.master.subject.entity.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Long> {

    List<Subject> findBySemesterId(Long semesterId);

}
