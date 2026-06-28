import api from "./api";

export const getStudentComplaints = async (userId)=>{

    const response = await api.get(

        `/complaints/student/${userId}`

    );

    return response.data;

}

export const createComplaint = async(data)=>{

    const response = await api.post(

        "/complaints",

        data

    );

    return response.data;

}

export const trackComplaint = async(trackingId)=>{

    const response = await api.get(

        `/complaints/track/${trackingId}`

    );

    return response.data;

}

export const getAllComplaints = async()=>{

    const response = await api.get(

        "/complaints"

    );

    return response.data;

}