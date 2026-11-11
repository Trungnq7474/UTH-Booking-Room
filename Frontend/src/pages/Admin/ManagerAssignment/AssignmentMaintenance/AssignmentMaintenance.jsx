import "./AssignmentMaintenance.css";
import AssignmentSee from "./AssignmentSee/AssignmentSee.jsx";

function AssignmentMaintenance({ onClose }) {
    return (
        <>
            <div className="maintenance-detail-overlay">
                <div className="maintenance-detail-modal">

                    <button className="maintenance-detail-close" onClick={onClose}>
                        <i className="fa-solid fa-circle-xmark"></i>
                    </button>

                    <div className="maintenance-detail-content">

                        <AssignmentSee />

                        <div className="maintenance-detail-buttons">
                            <button className="maintenance-detail-approve">
                                <i className="fa-solid fa-check"></i>
                                Duyệt
                            </button>

                            <button className="maintenance-detail-reject">
                                <i className="fa-solid fa-xmark"></i>
                                Từ Chối
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AssignmentMaintenance;