import api from "./api";

export const loginUser = async (loginData)=>{

    const response = await api.post(

        "/auth/login",

        loginData

    );

    return response.data;

}
export const registerUser = (data) => {

    return api.post("/auth/register", data);

};