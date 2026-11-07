import "./CalendarTable.css";

function CalendarTable() {
    return (
        <>
            <div className="schedule-table-container">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Họ Và Tên</th>
                            <th>Vai Trò</th>
                            <th>Loại Đăng Ký</th>
                            <th>Trạng Thái</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>#001</td>
                            <td>Nguyễn Văn A</td>
                            <td className="schedule-student">Sinh Viên</td>
                            <td>Thiết Bị</td>
                            <td>
                                <span className="schedule-status-pending">
                                    <i className="fa-regular fa-clock"></i>
                                    Chờ Duyệt
                                </span>
                            </td>
                            <td>
                                <div className="schedule-actions">
                                    <button className="schedule-view-button">
                                        <i className="fa-regular fa-eye"></i>
                                        Xem
                                    </button>
                                    <button className="schedule-delete-button">
                                        <i className="fa-regular fa-trash-can"></i>
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>#002</td>
                            <td>Nguyễn Văn B</td>
                            <td className="schedule-teacher">Giảng Viên</td>
                            <td>Phòng Máy</td>
                            <td>
                                <span className="schedule-status-done">
                                    <i class="fa-solid fa-square-check"></i>
                                    Đã Sử Dụng
                                </span>
                            </td>
                            <td>
                                <div className="schedule-actions">
                                    <button className="schedule-view-button">
                                        <i className="fa-regular fa-eye"></i>
                                        Xem
                                    </button>
                                    <button className="schedule-delete-button">
                                        <i className="fa-regular fa-trash-can"></i>
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>#003</td>
                            <td>Nguyễn Thị C</td>
                            <td className="schedule-student">Sinh Viên</td>
                            <td>Thiết Bị</td>
                            <td>
                                <span className="schedule-status-using">
                                    <i className="fa-solid fa-gear"></i>
                                    Đang Sử Dụng
                                </span>
                            </td>
                            <td>
                                <div className="schedule-actions">
                                    <button className="schedule-view-button">
                                        <i className="fa-regular fa-eye"></i>
                                        Xem
                                    </button>
                                    <button className="schedule-delete-button">
                                        <i className="fa-regular fa-trash-can"></i>
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>#004</td>
                            <td>Phạm Văn D</td>
                            <td className="schedule-teacher">Giảng Viên</td>
                            <td>Phòng Máy</td>
                            <td>
                                <span className="schedule-status-pending">
                                    <i className="fa-regular fa-clock"></i>
                                    Chờ Duyệt
                                </span>
                            </td>
                            <td>
                                <div className="schedule-actions">
                                    <button className="schedule-view-button">
                                        <i className="fa-regular fa-eye"></i>
                                        Xem
                                    </button>
                                    <button className="schedule-delete-button">
                                        <i className="fa-regular fa-trash-can"></i>
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CalendarTable;