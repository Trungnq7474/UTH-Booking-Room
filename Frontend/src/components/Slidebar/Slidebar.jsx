import { Link } from "react-router-dom";
import './Slidebar.css';

function Slidebar() {
    return (
        <>
            <aside className="sidebar">

                <div className="icon">
                    <i className="fa-solid fa-bars"></i>
                </div>

                <div className="sidebar-header">
                    <h2>ADMIN</h2>
                </div>

                <nav className="sidebar-menu">
                    <Link to="" className="menu-item">
                        <i className="fa-solid fa-table-columns"></i>
                        <span>DashBoard</span>
                    </Link>

                    <Link to="/manageruser" className="menu-item active">
                        <i className="fa-solid fa-users"></i>
                        <span>Người Dùng</span>
                    </Link>

                    <Link to="/managerassignment" className="menu-item">
                        <i className="fa-solid fa-screwdriver-wrench"></i>
                        <span>Phân Công Sự Cố</span>
                    </Link>

                    <Link to="/managerroom" className="menu-item">
                        <i className="fa-solid fa-desktop"></i>
                        <span>Phòng</span>
                    </Link>

                    <Link to="/managertool" className="menu-item">
                        <i className="fa-solid fa-hard-drive"></i>
                        <span>Thiết Bị</span>
                    </Link>

                    <Link to="/managercalendar" className="menu-item">
                        <i className="fa-regular fa-calendar-days"></i>
                        <span>Đăng Ký Lịch</span>
                    </Link>

                    <Link to="/managersupport" className="menu-item">
                        <i className="fa-solid fa-headset"></i>
                        <span>Trợ Giúp</span>
                    </Link>
                </nav>

                <button className="logout">
                    <i className="fa-solid fa-right-from-bracket"></i>
                    Đăng Xuất
                </button>

            </aside>
        </>
    )
}

export default Slidebar;