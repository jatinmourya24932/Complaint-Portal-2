package com.complaintportal.email.service;

import com.complaintportal.complaint.entity.Complaint;

public interface EmailService {

    void sendEmail(
            String to,
            String subject,
            String body);
    
    void sendComplaintNotification(
            Complaint complaint);
    
    void sendStatusUpdateNotification(
            Complaint complaint);

}