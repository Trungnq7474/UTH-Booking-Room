import "./ToolDetail.css";
import image from "../../../../assets/epson.png";

function ToolDetail({ onClose }) {
    return (
        <>
        <div className="equipment-detail-overlay">
            <div className="equipment-detail-modal">

                <button className="equipment-detail-close" onClick={onClose}>
                    <i className="fa-solid fa-circle-xmark"></i>
                </button>

                <div className="equipment-detail-content">

                    <div className="equipment-detail-image">
                        <img
                            src={image}
                            alt="Ảnh"
                        />
                    </div>

                    <div className="equipment-detail-info">

                        <div className="equipment-detail-status">
                            <i className="fa-solid fa-wrench"></i>
                            Bảo Trì
                        </div>

                        <h2>Máy Chiếu Epson</h2>

                        <div className="equipment-detail-description">
                            <i className="fa-solid fa-file-lines"></i>

                            <p>
                                <b>Mô Tả:</b> Máy chiếu được trang bị nhằm hỗ trợ trình chiếu bài giảng 
                                và phục vụ hoạt động giảng dạy.
                            </p>
                        </div>

                        <div className="equipment-detail-location">
                            <i className="fa-solid fa-location-dot"></i>

                            <p>
                                <b>Phòng Máy - H003 - Khu H - Tầng Trệt</b>
                            </p>
                        </div>

                        <div className="equipment-detail-type">
                            <i className="fa-solid fa-layer-group"></i>

                            <p>
                                <b>Loại Thiết Bị:</b> Máy chiếu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ToolDetail;