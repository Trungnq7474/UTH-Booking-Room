import "./SupportTable.css";

function SupportTable() {
    return (
        <>
            <div className="support-table-container">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Họ Và Tên</th>
                            <th>Email</th>
                            <th>Nội Dung</th>
                            <th>Trạng Thái</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>#001</td>
                            <td>Nguyễn Văn A</td>
                            <td>nguyenvana@ut.edu.vn</td>
                            <td>Cho em hỏi là cách đăng ký phòng máy như thế nào?</td>
                            <td>
                                <span className="support-status-pending">
                                    <i className="fa-regular fa-clock"></i>
                                    Chưa Trả Lời
                                </span>
                            </td>
                            <td>
                                <button className="support-delete-button">
                                    <i className="fa-regular fa-trash-can"></i>
                                    Xóa
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>#002</td>
                            <td>Nguyễn Văn B</td>
                            <td>nguyenvanb@ut.edu.vn</td>
                            <td>Máy tính H003 bị lỗi không lên màn hình</td>
                            <td>
                                <span className="support-status-done">
                                    <i class="fa-solid fa-square-check"></i>
                                    Đã Trả Lời
                                </span>
                            </td>
                            <td>
                                <button className="support-delete-button">
                                    <i className="fa-regular fa-trash-can"></i>
                                    Xóa
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>#003</td>
                            <td>Nguyễn Thị C</td>
                            <td>nguyenthic@ut.edu.vn</td>
                            <td>Nhờ hỗ trợ về tài khoản đăng nhập hệ thống</td>
                            <td>
                                <span className="support-status-done">
                                    <i class="fa-solid fa-square-check"></i>
                                    Đã Trả Lời
                                </span>
                            </td>
                            <td>
                                <button className="support-delete-button">
                                    <i className="fa-regular fa-trash-can"></i>
                                    Xóa
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>#004</td>
                            <td>Phạm Văn D</td>
                            <td>phamvand@ut.edu.vn</td>
                            <td>Hướng dẫn đặt lịch sử dụng thiết bị như thế nào?</td>
                            <td>
                                <span className="support-status-pending">
                                    <i className="fa-regular fa-clock"></i>
                                    Chưa Trả Lời
                                </span>
                            </td>
                            <td>
                                <button className="support-delete-button">
                                    <i className="fa-regular fa-trash-can"></i>
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default SupportTable;