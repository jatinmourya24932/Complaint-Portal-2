import api from "./api";

export const getFacultyBySubject = async(subjectId)=>{

    const response = await api.get(

        `/faculty-subject/subject/${subjectId}`

    );

    return response.data;

}