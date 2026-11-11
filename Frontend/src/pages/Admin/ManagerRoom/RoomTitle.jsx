import Title from "../../../components/Title/Title.jsx";

function RoomTitle({ onAdd }) {
    return (
        <>
            <Title 
                icon="fa-solid fa-desktop"
                title="QUẢN LÝ PHÒNG"
                placeholder="Tìm kiếm theo tên phòng, stt,..."
                filters={[
                    {
                        label: "Khu vực",
                        options: ["Khu H", "Khu I", "Khu K"]
                    },

                    {
                        label: "Trạng thái",
                        options: ["Hoạt Động", "Bảo Trì"]
                    }
                ]}

                buttonText=" Thêm Phòng"
                onAdd={onAdd}
            />
        </>
    )
}

export default RoomTitle;
