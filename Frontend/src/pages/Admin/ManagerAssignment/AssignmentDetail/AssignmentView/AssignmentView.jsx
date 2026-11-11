import "./AssignmentView.css";
import image from "../../../../../assets/epson.png";

function AssignmentView() {
    return (
        <>
            <div className="assignment-detail-product">
                <div className="assignment-detail-image">
                    <img src={image} alt="Ảnh" />
                </div>

                <div className="assignment-detail-info">
                    <span className="assignment-detail-status">
                        <i className="fa-regular fa-clock"></i>
                        Chờ Phân Công
                    </span>

                    <h2>Máy Chiếu Epson</h2>

                    <p className="code">
                        #SC - 001
                    </p>

                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                        <b>Phòng Máy - H004 - Khu H - Tầng Trệt</b>
                    </p>
                    
                    <p>
                        <i className="fa-solid fa-circle-exclamation"></i>
                        <span>
                            <b>Tên Sự Cố:</b> Máy chiếu
                        </span>
                    </p>
                    
                </div>
            </div>

            <div className="assignment-detail-registration">
                <div className="assignment-detail-registration-inner">

                    <h3>Thông Tin Sự Cố</h3>

                    <div className="assignment-detail-columns">

                        <div className="assignment-detail-column">
                            <p>
                                <i className="fa-solid fa-user-check"></i>
                                <span>
                                    <b>Người Báo Cáo:</b> Nguyễn Văn A
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

                        <div className="assignment-detail-column">
                            <p>
                                <i className="fa-regular fa-calendar"></i>
                                <span>
                                    <b>Thời Gian Báo Cáo:</b> 5/11/2026 8:00
                                </span>
                            </p>

                            <p>
                                <i class="fa-solid fa-message"></i>
                                <span>
                                    <b>Mô Tả Sự Cố:</b> Máy chiếu không hoạt động khi bật nguồn.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AssignmentView;