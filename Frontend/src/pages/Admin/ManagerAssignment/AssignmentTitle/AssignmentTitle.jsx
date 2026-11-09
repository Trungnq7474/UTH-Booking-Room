import "./AssignmentTitle.css";

function AssignmentTitle() {
    return (
        <>
            <div className="assignment-title">
                <i className="fa-solid fa-screwdriver-wrench"></i>
                <h1>PHÂN CÔNG SỰ CỐ</h1>
            </div>

            <div className="assignment-toolbar">

                <div className="assignment-search">
                    <input
                        type="text"
                        placeholder="Tìm kiếm theo tên, mã sự cố,..."
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className="assignment-filter">
                    <select>
                        <option value="">Trạng thái</option>
                        <option>Chờ Phân Công</option>
                        <option>Đã Tiếp Nhận</option>
                        <option>Đang Thực Hiện</option>
                        <option>Đã Hoàn Thành</option>
                    </select>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>

                <div className="assignment-filter">
                    <select>
                        <option value="">Phân loại</option>
                        <option>Sự Cố (SC)</option>
                        <option>Bảo Trì (BT)</option>
                    </select>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>

                <button className="assignment-add">
                    <i className="fa-solid fa-plus"></i>
                    Thêm Sự Cố
                </button>
            </div>
        </>
    )
}

export default AssignmentTitle;