import "./AssignmentDetail.css";
import AssignmentView from "./AssignmentView/AssignmentView.jsx";

function AssignmentDetail({ onClose }) {
    return (
        <>
            <div className="assignment-detail-overlay">
                <div className="assignment-detail-modal">

                    <button className="assignment-detail-close" onClick={onClose}>
                        <i className="fa-solid fa-circle-xmark"></i>
                    </button>

                    <div className="assignment-detail-content">

                        <AssignmentView />

                    </div>
                </div>
            </div>
        </>
    )
}

export default AssignmentDetail;