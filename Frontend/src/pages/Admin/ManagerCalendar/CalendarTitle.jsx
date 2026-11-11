import Title from "../../../components/Title/Title.jsx";

function CalendarTitle() {
    return (
        <>
            <Title 
                icon="fa-regular fa-calendar-days"
                title="QUẢN LÝ ĐĂNG KÝ LỊCH"
                placeholder="Tìm kiếm theo tên, thiết bị,..."
                filters={[
                    {
                        label: "Loại đăng ký",
                        options: ["Thiết Bị", "Phòng Máy"]
                    },

                    {
                        label: "Trạng Thái",
                        options: ["Chờ Duyệt", "Đang Sử Dụng", "Đã Sử Dụng"]
                    }
                ]}
            />
        </>
    )
}

export default CalendarTitle;