export default function logout(navigate){

    sessionStorage.clear();

    navigate("/login");

}