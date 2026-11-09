import "./ToolTable.css";

function ToolTable({ onView, onEdit }) {
    return (
        <>
            <div className="equipment-table-container">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Hình Ảnh</th>
                            <th>Tên Thiết Bị</th>
                            <th>Loại Thiết Bị</th>
                            <th>Trạng Thái</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>#001</td>
                            <td>Ảnh</td>
                            <td>Máy Tính Dell OptiPlex</td>
                            <td>Máy tính</td>
                            <td>
                                <span className="equipment-status-active">
                                    <i className="fa-solid fa-square-check"></i>
                                    Hoạt Động
                                </span>
                            </td>
                            <td>
                                <div className="equipment-actions">
                                    <button className="equipment-view" onClick={onView}>
                                        <i className="fa-regular fa-eye"></i>
                                        Xem
                                    </button>

                                    <button className="equipment-edit" onClick={onEdit}>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                        Sửa
                                    </button>

                                    <button className="equipment-delete">
                                        <i className="fa-solid fa-trash-can"></i>
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>#002</td>
                            <td>Ảnh</td>
                            <td>Máy Chiếu Epson</td>
                            <td>Máy chiếu</td>
                            <td>
                                <span className="equipment-status-maintenance">
                                    <i className="fa-solid fa-wrench"></i>
                                    Bảo Trì
                                </span>
                            </td>
                            <td>
                                <div className="equipment-actions">
                                    <button className="equipment-view" onClick={onView}>
                                        <i className="fa-regular fa-eye"></i>
                                        Xem
                                    </button>

                                    <button className="equipment-edit" onClick={onEdit}>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                        Sửa
                                    </button>

                                    <button className="equipment-delete">
                                        <i className="fa-solid fa-trash-can"></i>
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>#003</td>
                            <td>Ảnh</td>
                            <td>Switch Cisco CBS250-24T</td>
                            <td>Thiết bị mạng</td>
                            <td>
                                <span className="equipment-status-active">
                                    <i className="fa-solid fa-square-check"></i>
                                    Hoạt Động
                                </span>
                            </td>
                            <td>
                                <div className="equipment-actions">
                                    <button className="equipment-view" onClick={onView}>
                                        <i className="fa-regular fa-eye"></i>
                                        Xem
                                    </button>

                                    <button className="equipment-edit" onClick={onEdit}>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                        Sửa
                                    </button>

                                    <button className="equipment-delete">
                                        <i className="fa-solid fa-trash-can"></i>
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>#004</td>
                            <td>Ảnh</td>
                            <td>Máy In HP LaserJet Pro</td>
                            <td>Máy in</td>
                            <td>
                                <span className="equipment-status-active">
                                    <i className="fa-solid fa-square-check"></i>
                                    Hoạt Động
                                </span>
                            </td>
                            <td>
                                <div className="equipment-actions">
                                    <button className="equipment-view" onClick={onView}>
                                        <i className="fa-regular fa-eye"></i>
                                        Xem
                                    </button>

                                    <button className="equipment-edit" onClick={onEdit}>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                        Sửa
                                    </button>

                                    <button className="equipment-delete">
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

export default ToolTable;