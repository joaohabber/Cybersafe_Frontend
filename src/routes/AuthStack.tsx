import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";

function AuthStack() {
    return (
        <Routes>
            <Route index element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default AuthStack;
