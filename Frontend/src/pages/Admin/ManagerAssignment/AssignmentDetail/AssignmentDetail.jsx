import DetailModal from "../../../../components/DetailModal/DetailModal.jsx";
import image from "../../../../assets/epson.png";

function AssignmentDetail({ onClose }) {
    return (
        <>
            <DetailModal
                onClose={onClose}
                image={image}
                status="Chờ Phân Công"
                name="Máy Chiếu Epson"
                title="Thông Tin Sự Cố"
                statusClass="assignment-status"

                information={
                    <>
                        <p className="code">#SC - 001</p>

                        <p>
                            <i className="fa-solid fa-location-dot"></i>
                            <b>Phòng Máy - H004 - Khu H - Tầng Trệt</b>
                        </p>

                        <p>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <span><b>Tên Sự Cố:</b> Máy chiếu</span>
                        </p>
                    </>
                }

                registration={
                    <div className="detail-columns">

                        <div className="detail-column">
                            <p>
                                <i className="fa-solid fa-user-check"></i>
                                <span><b>Người Báo Cáo:</b> Nguyễn Văn A</span>
                            </p>

                            <p>
                                <i className="fa-regular fa-id-card"></i>
                                <span><b>Vai Trò:</b> <strong>Sinh Viên</strong></span>
                            </p>

                            <p>
                                <i className="fa-regular fa-credit-card"></i>
                                <span><b>Mã Số:</b> 077205001847</span>
                            </p>
                        </div>

                        <div className="detail-column">
                            <p>
                                <i className="fa-regular fa-calendar"></i>
                                <span><b>Thời Gian Báo Cáo:</b> 5/11/2026 8:00</span>
                            </p>

                            <p>
                                <i className="fa-solid fa-message"></i>
                                <span>
                                    <b>Mô Tả Sự Cố:</b> Máy chiếu không hoạt động khi bật nguồn.
                                </span>
                            </p>
                        </div>

                    </div>
                }
            />
        </>
    );
}

export default AssignmentDetail;
