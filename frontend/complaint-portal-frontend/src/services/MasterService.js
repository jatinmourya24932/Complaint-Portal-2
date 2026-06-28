import api from "./api";

export const getCourses = async () => {

    const response = await api.get("/courses");

    return response.data;

};

export const getDepartments = async (courseId) => {

    const response = await api.get(

        `/departments/course/${courseId}`

    );

    return response.data;

};

export const getSemesters = async (departmentId) => {

    const response = await api.get(

        `/semesters/department/${departmentId}`

    );

    return response.data;

};

export const getSubjects = async (semesterId) => {

    const response = await api.get(

        `/subjects/semester/${semesterId}`

    );

    return response.data;

};