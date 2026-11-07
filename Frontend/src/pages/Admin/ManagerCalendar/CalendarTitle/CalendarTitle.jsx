import "./CalendarTitle.css";

function CalendarTitle() {
    return (
        <>
            <div className="schedule-page-title">
                <i className="fa-regular fa-calendar"></i>
                <h1>QUẢN LÝ ĐĂNG KÝ LỊCH</h1>
            </div>

            <div className="schedule-toolbar">

                <div className="schedule-search-box">
                    <input
                        type="text"
                        placeholder="Tìm kiếm theo tên, thiết bị,..."
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className="schedule-filter">
                    <select>
                        <option value="">Loại đăng ký</option>
                        <option>Thiết bị</option>
                        <option>Phòng máy</option>
                    </select>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>

                <div className="schedule-filter">
                    <select>
                        <option value="">Trạng thái</option>
                        <option>Chờ Duyệt</option>
                        <option>Đã Sử Dụng</option>
                        <option>Đang Sử Dụng</option>
                    </select>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>

            </div>
        </>
    )
}

export default CalendarTitle;