import "./CalendarForm.css";

function CalendarForm() {
    return (
        <>
            <div className="schedule-detail-registration">
                <div className="schedule-detail-registration-inner">

                    <h3>Thông Tin Đăng Ký</h3>

                    <div className="schedule-detail-columns">

                        <div className="schedule-detail-column">
                            <p>
                                <i className="fa-solid fa-user-check"></i>
                                <span>
                                    <b>Họ Và Tên:</b> Nguyễn Văn A
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

                        <div className="schedule-detail-column">
                            <p>
                                <i className="fa-regular fa-calendar"></i>
                                <span>
                                    <b>Thời Gian Đăng Ký:</b> 5/11/2026 8:00
                                </span>
                            </p>

                            <p>
                                <i className="fa-regular fa-bookmark"></i>
                                <span>
                                    <b>Mục Đích Sử Dụng:</b> Học Tập
                                </span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CalendarForm;