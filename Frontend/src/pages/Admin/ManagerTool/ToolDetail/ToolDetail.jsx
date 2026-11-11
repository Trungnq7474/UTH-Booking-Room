import image from "../../../../assets/epson.png";
import Detail from "../../../../components/Detail/Detail.jsx";

function ToolDetail({ onClose }) {
    return (
        <>
            <Detail
                image={image}
                title="Máy Chiếu Epson"
                status="Bảo Trì"
                statusIcon="fa-solid fa-wrench"
                statusColor="#1900ff"
                onClose={onClose}
            >
                <div className="common-detail-item">
                    <i className="fa-solid fa-file-lines"></i>
                    <p>
                        <b>Mô Tả:</b> Máy chiếu được trang bị nhằm hỗ trợ
                        trình chiếu bài giảng và phục vụ hoạt động giảng dạy hiệu quả.
                    </p>
                </div>

                <div className="common-detail-item">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>
                        <b>Phòng Máy - H003 - Khu H - Tầng Trệt</b>
                    </p>
                </div>

                <div className="common-detail-item">
                    <i className="fa-solid fa-layer-group"></i>
                    <p>
                        <b>Loại Thiết Bị:</b> Máy chiếu
                    </p>
                </div>
            </Detail>
        </>
    )
}

export default ToolDetail;