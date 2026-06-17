package com.complaintportal.user.dto;

public class UpdateActiveStatusRequest {

    private boolean active;

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}