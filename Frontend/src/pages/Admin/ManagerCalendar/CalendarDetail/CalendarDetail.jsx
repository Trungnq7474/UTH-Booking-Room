import "./CalendarDetail.css";
import CalendarImageInfo from "./CalendarImageInfo/CalendarImageInfo.jsx";
import CalendarForm from "./CalendarForm/CalendarForm.jsx";

function CalendarDetail({ onClose }) {
    return (
        <>
             <div className="schedule-detail-overlay">
                <div className="schedule-detail-modal">

                    <button className="schedule-detail-close" onClick={onClose}>
                        <i className="fa-solid fa-circle-xmark"></i>
                    </button>

                    <div className="schedule-detail-content">

                        <CalendarImageInfo />

                        <CalendarForm />

                        <div className="schedule-detail-buttons">
                            <button className="schedule-detail-approve">
                                <i class="fa-solid fa-check"></i>
                                Duyệt
                            </button>

                            <button className="schedule-detail-reject">
                                <i class="fa-solid fa-xmark"></i>
                                Từ Chối
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CalendarDetail;