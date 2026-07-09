import api from "./api";

export const getAcademicYears = async () => {

    const response = await api.get("/academic-years");

    return response.data;

};