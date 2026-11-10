import "./AssignmentTable.css";

function AssignmentTable() {
    return (
        <>
            <div className="assignment-table-container">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã Sự Cố</th>
                            <th>Người Báo Cáo</th>
                            <th>Tên Sự Cố</th>
                            <th>Trạng Thái</th>
                            <th>Đề Xuất Bảo Trì</th>
                            <th>Nhân Viên Phân Công</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>#001</td>
                            <td>#SC - 001</td>
                            <td>Nguyễn Văn A</td>
                            <td>Máy chiếu</td>
                            <td>
                                <span className="assignment-status-received">
                                    <i className="fa-regular fa-circle-check"></i>
                                    Đã Tiếp Nhận
                                </span>
                            </td>
                            <td>
                                <button className="assignment-maintenance">
                                    <i className="fa-regular fa-eye"></i>
                                    Xem Đề Xuất
                                </button>
                            </td>
                            <td>
                                <div className="assignment-select">
                                    <select defaultValue="Phạm Văn T">
                                        <option value="">-</option>
                                        <option>Phạm Văn T</option>
                                        <option>Võ Văn X</option>
                                        <option>Trương Văn P</option>
                                    </select>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </td>
                            <td>
                                <div className="assignment-actions">
                                    <button className="assignment-view">
                                        <i className="fa-regular fa-eye"></i>
                                        Xem
                                    </button>
                                    <button className="assignment-delete">
                                        <i className="fa-regular fa-trash-can"></i>
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>#002</td>
                            <td>#SC - 002</td>
                            <td>Trần Văn B</td>
                            <td>Máy tính</td>
                            <td>
                                <span className="assignment-status-pending">
                                    <i className="fa-regular fa-clock"></i>
                                    Chờ Phân Công
                                </span>
                            </td>
                            <td>
                                <button className="assignment-maintenance">
                                    <i className="fa-regular fa-eye"></i>
                                    Xem Đề Xuất
                                </button>
                            </td>
                            <td>
                                <div className="assignment-select">
                                    <select defaultValue="">
                                        <option value="">-</option>
                                        <option>Phạm Văn T</option>
                                        <option>Võ Văn X</option>
                                        <option>Trương Văn P</option>
                                    </select>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </td>
                            <td>
                                <div className="assignment-actions">
                                    <button className="assignment-view">
                                        <i className="fa-regular fa-eye"></i>
                                        Xem
                                    </button>
                                    <button className="assignment-delete">
                                        <i className="fa-regular fa-trash-can"></i>
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>#003</td>
                            <td>#SC - 003</td>
                            <td>Nguyễn Văn C</td>
                            <td>Wifi</td>
                            <td>
                                <span className="assignment-status-processing">
                                    <i className="fa-solid fa-gear"></i>
                                    Đang Thực Hiện
                                </span>
                            </td>
                            <td>
                               -
                            </td>
                            <td>
                                <div className="assignment-select">
                                    <select defaultValue="Võ Văn X">
                                        <option value="">-</option>
                                        <option>Phạm Văn T</option>
                                        <option>Võ Văn X</option>
                                        <option>Trương Văn P</option>
                                    </select>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </td>
                            <td>
                                <div className="assignment-actions">
                                    <button className="assignment-view">
                                        <i className="fa-regular fa-eye"></i>
                                        Xem
                                    </button>
                                    <button className="assignment-delete">
                                        <i className="fa-regular fa-trash-can"></i>
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>#004</td>
                            <td>#SC - 004</td>
                            <td>Trần Văn D</td>
                            <td>Dây cắm</td>
                            <td>
                                <span className="assignment-status-completed">
                                    <i className="fa-solid fa-square-check"></i>
                                    Đã Hoàn Thành
                                </span>
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                <div className="assignment-select">
                                    <select defaultValue="Trương Văn P">
                                        <option value="">-</option>
                                        <option>Phạm Văn T</option>
                                        <option>Võ Văn X</option>
                                        <option>Trương Văn P</option>
                                    </select>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </td>
                            <td>
                                <div className="assignment-actions">
                                    <button className="assignment-view">
                                        <i className="fa-regular fa-eye"></i>
                                        Xem
                                    </button>
                                    <button className="assignment-delete">
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

export default AssignmentTable;