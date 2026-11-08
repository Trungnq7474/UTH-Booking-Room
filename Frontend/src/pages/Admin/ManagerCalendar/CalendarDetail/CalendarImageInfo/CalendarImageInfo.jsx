import "./CalendarImageInfo.css";
import image from "../../../../../assets/epson.png";

function CalendarImageInfo() {
    return (
        <>
            <div className="schedule-detail-product">
                <div className="schedule-detail-image">
                    <img
                        src={image}
                        alt="Ảnh"
                    />
                </div>

                <div className="schedule-detail-info">
                    <span className="schedule-detail-status">
                        <i className="fa-regular fa-clock"></i>
                        Chờ Duyệt
                    </span>

                    <h2>Máy Chiếu Epson</h2>

                    <p>
                        <i className="fa-solid fa-file-lines"></i>
                        <span>
                            <b>Mô Tả:</b> Máy chiếu được trang bị nhằm hỗ trợ
                            trình chiếu bài giảng và phục vụ hoạt động
                            giảng dạy trong phòng học.
                        </span>
                    </p>

                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                        <b>Phòng Máy - H004 - Khu H - Tầng Trệt</b>
                    </p>

                    <p>
                        <i className="fa-solid fa-hard-drive"></i>
                        <span>
                            <b>Loại Đăng Ký:</b> Thiết bị - Máy chiếu
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default CalendarImageInfo;