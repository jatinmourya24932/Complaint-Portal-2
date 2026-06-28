import api from "./api";

export const verifyRollNumber = (rollNumber) => {

    return api.get(`/student-profile/verify/${rollNumber}`);

};