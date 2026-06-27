package com.complaintportal.complaint.util;

import java.time.Year;
import java.util.UUID;

public class TrackingIdGenerator {

    public static String generate() {

        return "CP"
                + Year.now().getValue()
                + UUID.randomUUID()
                        .toString()
                        .substring(0, 6)
                        .toUpperCase();

    }

}