import { Routes, Route } from "react-router-dom";
import MainLayoutAdmin from "../layouts/MainLayoutAdmin.jsx";
import ManagerUser from "../pages/Admin/ManagerUser/ManagerUser.jsx";

function AppRouters() {
    return (
        <Routes>
            <Route path="/manageruser" element={
                <MainLayoutAdmin>
                    <ManagerUser />
                </MainLayoutAdmin>
            } />
        </Routes>
    )
}

export default AppRouters;