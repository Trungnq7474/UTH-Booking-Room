import Title from "../../../components/Title/Title.jsx";

function UserTitle({ onAdd }) {
    return (
        <>
            <Title 
                icon="fa-solid fa-users"
                title="QUẢN LÝ NGƯỜI DÙNG"
                placeholder="Tìm kiếm theo tên, mã số,..."
                filters={[
                    {
                        label: "Vai trò",
                        options: [
                            "Sinh Viên",
                            "Giảng Viên",
                            "Nhân Viên Kỹ Thuật"
                        ]
                    }
                ]}

                buttonText="Thêm Người Dùng"
                onAdd={onAdd}
            />
        </>
    )
}

export default UserTitle;