import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import useOpen from "../../hooks/useOpen.js";
import './Slidebar.css';

function Slidebar() {

    const { isOpen, setIsOpen } = useOpen();

    return (
        <>
            <aside className={`sidebar ${isOpen ? "" : "close"}`}>

                <div className="icon" onClick={() => setIsOpen(!isOpen)}>
                    <i className="fa-solid fa-bars"></i>
                </div>

                <div className="sidebar-header">
                    <Link to="/"><h2>ADMIN</h2></Link>
                </div>

                <nav className="sidebar-menu">
                    <NavLink to="/" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <i className="fa-solid fa-chart-line"></i>
                        <span>DashBoard</span>
                    </NavLink>

                    <NavLink to="/manageruser" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <i className="fa-solid fa-users"></i>
                        <span>Người Dùng</span>
                    </NavLink>

                    <NavLink to="/managerassignment" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <i className="fa-solid fa-screwdriver-wrench"></i>
                        <span>Phân Công Sự Cố</span>
                    </NavLink>

                    <NavLink to="/managerroom" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <i className="fa-solid fa-desktop"></i>
                        <span>Phòng</span>
                    </NavLink>

                    <NavLink to="/managertool" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <i className="fa-solid fa-hard-drive"></i>
                        <span>Thiết Bị</span>
                    </NavLink>

                    <NavLink to="/managercalendar" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <i className="fa-regular fa-calendar-days"></i>
                        <span>Đăng Ký Lịch</span>
                    </NavLink>

                    <NavLink to="/managersupport" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <i className="fa-solid fa-headset"></i>
                        <span>Trợ Giúp</span>
                    </NavLink>
                </nav>

                <button className="logout">
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <span>Đăng Xuất</span>
                </button>

            </aside>
        </>
    )
}

export default Slidebar;