import DetailModal from "../../../../components/DetailModal/DetailModal.jsx";
import keyboard from "../../../../assets/Equitment/keyboard.png";

function AssignmentDetail({ onClose }) {
    return (
        <>
            <DetailModal
                onClose={onClose}
                image={keyboard}
                status="Chờ Phân Công"
                name="Bàn Phím A4Tech KR-83"
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
                            <span><b>Tên Sự Cố:</b> Bàn Phím</span>
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
                                    <b>Mô Tả Sự Cố:</b> Bàn phím hoạt động nhưng gõ văn bản không được.
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
