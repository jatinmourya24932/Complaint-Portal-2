import api from "./api";

export const getCommentsByComplaint = async (id) => {

    const response = await api.get(

        `/comments/complaint/${id}`

    );

    return response.data;

};
export const updateComplaintStatus = async(id,status)=>{

    const response = await api.patch(

        `/complaints/${id}/status`,

        {

            status

        }

    );

    return response.data;

}

export const addComment = async (data) => {

    const response = await api.post(

        "/comments",

        data

    );

    return response.data;

};