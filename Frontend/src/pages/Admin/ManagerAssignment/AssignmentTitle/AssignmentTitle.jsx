import Title from "../../../../components/Title/Title.jsx";

function AssignmentTitle({ onAdd }) {
    return (
        <>
            <Title
                icon="fa-solid fa-screwdriver-wrench"
                title="PHÂN CÔNG SỰ CỐ"
                placeholder="Tìm kiếm theo tên, mã sự cố,..."
                buttonText="Thêm Sự Cố"
                onAdd={onAdd}
            >
                <div className="filter-box">
                    <select defaultValue="">
                        <option value="">Trạng thái</option>
                        <option value="Chờ Phân Công">Chờ Phân Công</option>
                        <option value="Đã Tiếp Nhận">Đã Tiếp Nhận</option>
                        <option value="Đang Thực Hiện">Đang Thực Hiện</option>
                        <option value="Đã Hoàn Thành">Đã Hoàn Thành</option>
                    </select>

                    <i className="fa-solid fa-chevron-down"></i>
                </div>

                <div className="filter-box">
                    <select defaultValue="">
                        <option value="">Phân loại</option>
                        <option value="Sự Cố (SC)">Sự Cố (SC)</option>
                        <option value="Bảo Trì (BT)">Bảo Trì (BT)</option>
                    </select>

                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </Title>
        </>
    );
}

export default AssignmentTitle;
