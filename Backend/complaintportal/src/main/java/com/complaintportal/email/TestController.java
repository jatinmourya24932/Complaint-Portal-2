package com.complaintportal.email;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.complaintportal.email.service.EmailService;

@RestController
@RequestMapping("/api/test")
public class TestController {

    private final EmailService emailService;

    public TestController(
            EmailService emailService) {

        this.emailService = emailService;
    }

    @GetMapping("/mail")
    public String testMail() {

        emailService.sendEmail(
                "jatinmourya24932@gmail.com",
                "Test Mail",
                "Email module working");

        return "Mail sent";
    }

}