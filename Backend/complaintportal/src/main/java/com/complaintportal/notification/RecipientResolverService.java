package com.complaintportal.notification;

import java.util.List;

import com.complaintportal.complaint.entity.Complaint;

public interface RecipientResolverService {

    List<String> getRecipients(
            Complaint complaint);

}