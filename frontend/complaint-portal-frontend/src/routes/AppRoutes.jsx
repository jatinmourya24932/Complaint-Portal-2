import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import TrackComplaint from "../pages/TrackComplaint";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
    path="/login"
    element={<Login />}
/>
<Route
    path="/track"
    element={<TrackComplaint />}
/>

      </Routes>
    </BrowserRouter>
  );
}