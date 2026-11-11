import Title from "../../../components/Title/Title.jsx";

function AssignmentTitle({ onAdd }) {
    return (
        <>
            <Title 
                icon="fa-solid fa-screwdriver-wrench"
                title="PHÂN CÔNG SỰ CỐ"
                placeholder="Tìm kiếm theo tên, mã sự cố,..."
                filters={[
                    {
                        label: "Trạng thái",
                        options: ["Chờ Phân Công", "Đã Tiếp Nhận", "Đang Thực Hiện", "Đã Hoàn Thành"]
                    },

                    {
                        label: "Phân loại",
                        options: ["Sư Cố (SC)", "Bảo Trì (BT)"]
                    }
                ]}

                buttonText=" Thêm Sự Cố"
                onAdd={onAdd}
            />
        </>
    )
}

export default AssignmentTitle;