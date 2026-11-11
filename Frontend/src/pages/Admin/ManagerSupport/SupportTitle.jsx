import Title from "../../../components/Title/Title.jsx";

function SupportTitle() {
    return (
        <>
            <Title 
                icon="fa-solid fa-headset"
                title="QUẢN LÝ TRỢ GIÚP"
                placeholder="Tìm kiếm theo họ tên, email,..."
                filters={[
                    {
                        label: "Trạng Thái",
                        options: ["Chưa Trả Lời", "Đã Trả Lời"]
                    }
                ]}
            />
        </>
    )
}

export default SupportTitle;