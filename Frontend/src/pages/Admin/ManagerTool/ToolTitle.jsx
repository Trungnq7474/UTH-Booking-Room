import Title from "../../../components/Title/Title.jsx";

function ToolTitle({ onAdd }) {
    return (
        <>
            <Title 
                icon="fa-solid fa-hard-drive"
                title="QUẢN LÝ THIẾT BỊ"
                placeholder="Tìm kiếm theo tên thiết bị, loại,..."
                filters={[
                    {
                        label: "Loại thiết bị",
                        options: ["Máy Tính", "Máy Chiếu", "Máy In", "Swich"]
                    },

                    {
                        label: "Trạng thái",
                        options: ["Hoạt Động", "Bảo Trì"]
                    }
                ]}

                buttonText="Thêm Thiết Bị"
                onAdd={onAdd}
            />
        </>
    )
}

export default ToolTitle;