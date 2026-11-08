import "./UserTitle.css";

function UserTitle({ onAdd }) {
    return (
        <>
            <div className="page-title">
                <i className="fa-solid fa-users"></i>
                <h1>QUẢN LÝ NGƯỜI DÙNG</h1>
            </div>

            <div className="toolbar">

                <div className="search-box">
                    <input type="text" placeholder="Tìm kiếm theo tên, mã số,..."/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className="filter-box">
                    <select>
                        <option>Vai trò</option>
                        <option>Sinh Viên</option>
                        <option>Giảng Viên</option>
                        <option>Nhân Viên Kỹ Thuật</option>
                    </select>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>

                <button className="add-button" onClick={onAdd}>
                    <i className="fa-solid fa-plus"></i>
                    Thêm Người Dùng
                </button>

            </div>
        </>
    )
}

export default UserTitle;