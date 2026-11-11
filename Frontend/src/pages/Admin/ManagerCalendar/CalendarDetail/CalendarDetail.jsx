import DetailModal from "../../../../components/DetailModal/DetailModal.jsx";
import image from "../../../../assets/epson.png";

function CalendarDetail({ onClose }) {
    return (
        <>
            <DetailModal
                onClose={onClose}
                image={image}
                status="Chờ Duyệt"
                name="Máy Chiếu Epson"
                title="Thông Tin Đăng Ký"
                showButtons={true}

                information={
                    <>
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
                    </>
                }

                registration={
                    <div className="detail-columns">

                        <div className="detail-column">
                            <p>
                                <i className="fa-solid fa-user-check"></i>
                                <span><b>Họ Và Tên:</b> Nguyễn Văn A</span>
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
                                <span><b>Thời Gian Đăng Ký:</b> 5/11/2026 8:00</span>
                            </p>

                            <p>
                                <i className="fa-regular fa-bookmark"></i>
                                <span><b>Mục Đích Sử Dụng:</b> Học Tập</span>
                            </p>
                        </div>

                    </div>
                }
            />
        </>
    );
}

export default CalendarDetail;
