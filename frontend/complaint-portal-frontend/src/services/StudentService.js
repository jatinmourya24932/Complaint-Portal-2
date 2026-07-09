import api from "./api";

export const verifyRollNumber = (rollNumber) => {

    return api.get(`/student-profile/verify/${rollNumber}`);

};

export const getAllStudents = async () => {
    const response = await api.get("/student-profile");
    return response.data;
};

export const createStudent = async (data) => {
    const response = await api.post("/student-profile", data);
    return response.data;
};

export const updateStudent = async (id, data) => {
    const response = await api.put(`/student-profile/${id}`, data);
    return response.data;
};