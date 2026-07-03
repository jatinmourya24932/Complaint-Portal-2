import api from "./api";

export const getAllFaculty = async () => {

    const response = await api.get(

        "/faculty-profile"

    );

    return response.data;

};

export const createFaculty = async (data) => {

    const response = await api.post(

        "/faculty-profile",

        data

    );

    return response.data;

};