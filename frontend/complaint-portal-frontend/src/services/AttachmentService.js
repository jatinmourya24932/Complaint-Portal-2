import api from "./api";

export const uploadAttachment = async (complaintId, file) => {

    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(

        `/attachments/${complaintId}`,

        formData,

        {

            headers: {

                "Content-Type": "multipart/form-data"

            }

        }

    );

    return response.data;

};

export const getAttachmentsByComplaint = async (complaintId) => {

    const response = await api.get(

        `/attachments/${complaintId}`

    );

    return response.data;

};