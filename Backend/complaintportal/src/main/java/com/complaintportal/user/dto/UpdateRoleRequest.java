package com.complaintportal.user.dto;

import com.complaintportal.user.enums.Role;

import jakarta.validation.constraints.NotNull;

public class UpdateRoleRequest {

    @NotNull(message = "Role is required")
    private Role role;

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}