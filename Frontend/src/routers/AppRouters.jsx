import { Routes, Route } from "react-router-dom";
import MainLayoutAdmin from "../layouts/MainLayoutAdmin.jsx";
import DashBoard from "../pages/Admin/DashBoard/DashBoard.jsx";
import ManagerUser from "../pages/Admin/ManagerUser/ManagerUser.jsx";
import ManagerSupport from "../pages/Admin/ManagerSupport/ManagerSupport.jsx";
import ManagerCalendar from "../pages/Admin/ManagerCalendar/ManagerCalendar.jsx";
import ManagerRoom from "../pages/Admin/ManagerRoom/ManagerRoom.jsx";
import ManagerTool from "../pages/Admin/ManagerTool/ManagerTool.jsx";
import ManagerAssignment from "../pages/Admin/ManagerAssignment/ManagerAssignment.jsx";

function AppRouters() {
    return (
        <Routes>

            <Route path="/" element={
                <MainLayoutAdmin>
                    <DashBoard />
                </MainLayoutAdmin>
            } />

            <Route path="/manageruser" element={
                <MainLayoutAdmin>
                    <ManagerUser />
                </MainLayoutAdmin>
            } />

            <Route path="/managersupport" element={
                <MainLayoutAdmin>
                    <ManagerSupport />
                </MainLayoutAdmin>
            } />

            <Route path="/managercalendar" element={
                <MainLayoutAdmin>
                    <ManagerCalendar />
                </MainLayoutAdmin>
            } />

            <Route path="/managerroom" element={
                <MainLayoutAdmin>
                    <ManagerRoom />
                </MainLayoutAdmin>
            } />

            <Route path="/managertool" element={
                <MainLayoutAdmin>
                    <ManagerTool />
                </MainLayoutAdmin>
            } />

            <Route path="/managerassignment" element={
                <MainLayoutAdmin>
                    <ManagerAssignment />
                </MainLayoutAdmin>
            } />

        </Routes>
    )
}

export default AppRouters;