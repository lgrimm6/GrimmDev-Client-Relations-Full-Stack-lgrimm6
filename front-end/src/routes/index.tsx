import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import DashboardPage from "../pages/Dashboard";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />}></Route>
      <Route path="dashboard" element={<DashboardPage />}></Route>
    </Routes>
  );
};

export default RoutesMain;
