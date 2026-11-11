import "./AssignmentSee.css";
import image from "../../../../../assets/epson.png";

function AssignmentSee() {
    return (
        <>
            <div className="maintenance-detail-product">
                <div className="maintenance-detail-image">
                    <img src={image} alt="Ảnh thiết bị" />
                </div>

                <div className="maintenance-detail-info">
                    <span className="maintenance-detail-status">
                        <i className="fa-regular fa-clock"></i>
                        Chờ Duyệt
                    </span>

                    <h2>Máy Chiếu Epson</h2>

                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                        <b>Phòng Máy - H004 - Khu H - Tầng Trệt</b>
                    </p>

                    <p>
                        <i className="fa-solid fa-hard-drive"></i>
                        <span>
                            <b>Loại Thiết Bị:</b> Máy chiếu
                        </span>
                    </p>

                     <p>
                        <i className="fa-solid fa-screwdriver-wrench"></i>
                        <span>
                            <b>Loại Bảo Trì:</b> Bảo trì định kỳ
                        </span>
                    </p>
                </div>
            </div>

            <div className="maintenance-detail-registration">
                <div className="maintenance-detail-registration-inner">

                    <h3>Thông Tin Đề Xuất Bảo Trì</h3>

                    <div className="maintenance-detail-columns">

                        <div className="maintenance-detail-column">
                            <p>
                                <i className="fa-solid fa-user-check"></i>
                                <span>
                                    <b>Người Đề Xuất:</b> Nguyễn Văn A
                                </span>
                            </p>

                             <p>
                                <i className="fa-regular fa-id-card"></i>
                                <span>
                                    <b>Vai Trò:</b> <strong>Sinh Viên</strong>
                                </span>
                            </p>

                            <p>
                                <i className="fa-regular fa-credit-card"></i>
                                <span>
                                    <b>Mã Số:</b> 077205001847
                                </span>
                            </p>
                        </div>

                        <div className="maintenance-detail-column">
                            <p>
                                <i className="fa-regular fa-calendar"></i>
                                <span>
                                    <b>Thời Gian Đề Xuất:</b> 5/11/2026 8:00
                                </span>
                            </p>

                            <p>
                                <i class="fa-solid fa-message"></i>
                                <span>
                                    <b>Nội Dung:</b> Máy chiếu đã sử dụng trong
                                    thời gian dài, cần kiểm tra và bảo dưỡng.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AssignmentSee;