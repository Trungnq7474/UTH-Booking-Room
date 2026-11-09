import "./RoomTable.css";

function RoomTable({ onView, onEdit }) {
    return (
        <>
            <div className="room-table-container">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Hình Ảnh</th>
                            <th>Tên Phòng</th>
                            <th>Khu Vực</th>
                            <th>Sức Chứa</th>
                            <th>Trạng Thái</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>#001</td>
                            <td>Ảnh</td>
                            <td>Phòng Máy - H003</td>
                            <td>Khu H - Tầng Trệt</td>
                            <td>40 máy</td>
                            <td>
                                <span className="room-status-active">
                                    <i class="fa-solid fa-square-check"></i>
                                    Hoạt Động
                                </span>
                            </td>
                            <td>
                                <div className="room-actions">
                                    <button className="room-view" onClick={onView}>
                                        <i className="fa-regular fa-eye"></i>
                                        Xem
                                    </button>

                                    <button className="room-edit" onClick={onEdit}>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                        Sửa
                                    </button>

                                    <button className="room-delete">
                                        <i className="fa-solid fa-trash-can"></i>
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>#002</td>
                            <td>Ảnh</td>
                            <td>Phòng Máy - H004</td>
                            <td>Khu H - Tầng Trệt</td>
                            <td>40 máy</td>
                            <td>
                                <span className="room-status-maintenance">
                                    <i className="fa-solid fa-wrench"></i>
                                    Bảo Trì
                                </span>
                            </td>
                            <td>
                                <div className="room-actions">
                                    <button className="room-view" onClick={onView}>
                                        <i className="fa-regular fa-eye"></i>
                                        Xem
                                    </button>

                                    <button className="room-edit" onClick={onEdit}>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                        Sửa
                                    </button>

                                    <button className="room-delete">
                                        <i className="fa-solid fa-trash-can"></i>
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>#003</td>
                            <td>Ảnh</td>
                            <td>Phòng Máy - H509</td>
                            <td>Khu H - Tầng 5</td>
                            <td>40 máy</td>
                            <td>
                                <span className="room-status-active">
                                    <i class="fa-solid fa-square-check"></i>
                                    Hoạt Động
                                </span>
                            </td>
                            <td>
                                <div className="room-actions">
                                    <button className="room-view" onClick={onView}>
                                        <i className="fa-regular fa-eye"></i>
                                        Xem</button>

                                    <button className="room-edit" onClick={onEdit}>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                        Sửa
                                    </button>

                                    <button className="room-delete">
                                        <i className="fa-solid fa-trash-can"></i>
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>#004</td>
                            <td>Ảnh</td>
                            <td>Phòng - H104</td>
                            <td>Khu H - Tầng 1</td>
                            <td>3 thiết bị</td>
                            <td>
                                <span className="room-status-active">
                                    <i class="fa-solid fa-square-check"></i>
                                    Hoạt Động
                                </span>
                            </td>
                            <td>
                                <div className="room-actions">
                                    <button className="room-view" onClick={onView}>
                                        <i className="fa-regular fa-eye"></i>
                                        Xem
                                    </button>

                                    <button className="room-edit" onClick={onEdit}>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                        Sửa
                                    </button>

                                    <button className="room-delete">
                                        <i className="fa-solid fa-trash-can"></i>
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

export default RoomTable;