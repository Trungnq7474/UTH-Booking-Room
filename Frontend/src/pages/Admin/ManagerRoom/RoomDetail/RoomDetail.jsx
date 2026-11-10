import "./RoomDetail.css";
import image from "../../../../assets/lap.png";

function RoomDetail({ onClose }) {
    return (
        <>
            <div className="room-detail-overlay">
                <div className="room-detail-modal">

                    <button className="room-detail-close" onClick={onClose}>
                        <i className="fa-solid fa-circle-xmark"></i>
                    </button>

                    <div className="room-detail-content">

                        <div className="room-detail-image">
                            <img
                                src={image}
                                alt="Phòng máy H003"
                            />
                        </div>

                        <div className="room-detail-info">

                            <div className="room-detail-status">
                                <i class="fa-solid fa-square-check"></i>
                                Hoạt Động
                            </div>

                            <h2>Phòng Máy - H003</h2>

                            <div className="room-detail-description">
                                <i className="fa-solid fa-file-lines"></i>

                                <p>
                                    <b>Mô Tả:</b> Phòng máy H003 được trang bị máy tính và các thiết bị hỗ
                                    trợ phục vụ việc học tập, thực hành và nghiên cứu.
                                </p>
                            </div>

                            <div className="room-detail-location">
                                <i className="fa-solid fa-location-dot"></i>

                                <p>
                                    <b>Phòng Máy - H003 - Khu H - Tầng Trệt</b>
                                </p>
                            </div>

                            <div className="room-detail-capacity">
                                <i className="fa-solid fa-desktop"></i>

                                <p>
                                    <b>Sức Chứa:</b> 40 máy
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomDetail;