import "./UserTable.css";

function UserTable({ onEdit }) {
    return (
        <>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã Số</th>
                            <th>Họ Và Tên</th>
                            <th>Vai Trò</th>
                            <th>Email</th>
                            <th>Số Điện Thoại</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>#001</td>
                            <td>077205001847</td>
                            <td>Nguyễn Văn A</td>
                            <td className="student">Sinh Viên</td>
                            <td>nva1847@ut.edu.vn</td>
                            <td>0123456789</td>
                            <td>
                                <div className="action-buttons">
                                    <button className="edit-button" onClick={onEdit}>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                        Sửa
                                    </button>

                                    <button className="delete-button">
                                        <i className="fa-regular fa-trash-can"></i>
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>#002</td>
                            <td>077205001848</td>
                            <td>Trần Văn B</td>
                            <td className="teacher">Giảng Viên</td>
                            <td>tvb1848@ut.edu.vn</td>
                            <td>0123456789</td>
                            <td>
                                <div className="action-buttons">
                                    <button className="edit-button" onClick={onEdit}>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                        Sửa
                                    </button>

                                    <button className="delete-button">
                                        <i className="fa-regular fa-trash-can"></i>
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>#003</td>
                            <td>077205001849</td>
                            <td>Võ Thị C</td>
                            <td className="technician">Nhân Viên Kỹ Thuật</td>
                            <td>vtc1849@ut.edu.vn</td>
                            <td>0123456789</td>
                            <td>
                                <div className="action-buttons">
                                    <button className="edit-button" onClick={onEdit}>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                        Sửa
                                    </button>

                                    <button className="delete-button">
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

export default UserTable;