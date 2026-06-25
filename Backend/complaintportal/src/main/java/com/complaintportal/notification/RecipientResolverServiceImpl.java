package com.complaintportal.notification;

import java.util.List;

import org.springframework.stereotype.Service;

import com.complaintportal.complaint.entity.Complaint;
import com.complaintportal.user.entity.User;
import com.complaintportal.user.enums.Role;
import com.complaintportal.user.repository.UserRepository;

@Service
public class RecipientResolverServiceImpl
        implements RecipientResolverService {

    private final UserRepository userRepository;

    public RecipientResolverServiceImpl(
            UserRepository userRepository) {

        this.userRepository = userRepository;
    }

    @Override
    public List<String> getRecipients(
            Complaint complaint) {

        List<User> admins =
                userRepository.findByRole(
                        Role.ADMIN);

        return admins.stream()
                .map(User::getEmail)
                .toList();
    }

}