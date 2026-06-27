package com.complaintportal.email.service;

import java.util.List;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.complaintportal.complaint.entity.Complaint;
import com.complaintportal.notification.RecipientResolverService;

@Service
public class EmailServiceImpl
        implements EmailService {

    private final JavaMailSender mailSender;
    private final RecipientResolverService recipientResolverService;

    public EmailServiceImpl(
            JavaMailSender mailSender, RecipientResolverService recipientResolverService) {

        this.mailSender = mailSender;
        this.recipientResolverService =recipientResolverService;
    }

    @Override
    public void sendEmail(
            String to,
            String subject,
            String body) {

        SimpleMailMessage message =
                new SimpleMailMessage();

        message.setTo(to);

        message.setSubject(subject);

        message.setText(body);

        mailSender.send(message);
    }
    
    @Override
    public void sendComplaintNotification(
            Complaint complaint) {

        String subject =
                "New Complaint Registered (#"
                        + complaint.getId()
                        + ")";

        String body =
                """
                Complaint ID : %d

                Category : %s

                Priority : %s

                Status : %s

                Please login to the Complaint Portal
                to view complete details.

                Regards,
                Complaint Portal System
                """
                        .formatted(
                                complaint.getId(),
                                complaint.getCategory(),
                                complaint.getPriority(),
                                complaint.getStatus());

        List<String> recipients =recipientResolverService.getRecipients(complaint);
        
        for(String email:recipients) {
        	
        	sendEmail(email, subject, body);
        }
        
        
    }
    
    @Override
    public void sendStatusUpdateNotification(
            Complaint complaint) {

        String subject =
                "Complaint Status Updated (#"
                        + complaint.getId()
                        + ")";

        String body =
                """
                Dear Student,

                Your complaint status has been updated.

                Complaint ID : %d
                Title        : %s
                Current Status : %s

                Please login to the Complaint Portal for more details.

                Regards,
                Complaint Management Portal
                """
                .formatted(
                        complaint.getId(),
                        complaint.getTitle(),
                        complaint.getStatus());

         sendEmail(
                complaint.getStudentProfile()
                         .getUser()
                         .getEmail(),
                subject,
                body);
         }
}