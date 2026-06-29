import api from "./api";

// Student
export const getComplaintsByStudent = async (userId) => {

    const response = await api.get(

        `/complaints/student/${userId}`

    );

    return response.data;

};

// Create Complaint
export const createComplaint = async (data) => {

    const response = await api.post(

        "/complaints",

        data

    );

    return response.data;

};

// Track Complaint
export const trackComplaint = async (trackingId) => {

    const response = await api.get(

        `/complaints/track/${trackingId}`

    );

    return response.data;

};

// Admin
export const getAllComplaints = async () => {

    const response = await api.get(

        "/complaints"

    );

    return response.data;

};

// Update Status
export const updateComplaintStatus = async (id, status) => {

    const response = await api.patch(

        `/complaints/${id}/status`,

        {

            status

        }

    );

    return response.data;

};

// Faculty
export const getComplaintsByFaculty = async (userId) => {

    const response = await api.get(

        `/complaints/faculty/${userId}`

    );

    return response.data;

};

// HOD
export const getComplaintsByHod = async (userId) => {

    const response = await api.get(

        `/complaints/hod/${userId}`

    );

    return response.data;

};