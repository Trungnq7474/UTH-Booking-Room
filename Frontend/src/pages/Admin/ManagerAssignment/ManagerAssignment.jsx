import AssignmentTitle from "./AssignmentTitle.jsx";
import AssignmentTable from "./AssignmentTable.jsx";
import AssignmentForm from "./AssignmentForm/AssignmentForm.jsx";
import AssignmentDetail from "./AssignmentDetail/AssignmentDetail.jsx";
import AssignmentMaintenance from "./AssignmentMaintenance/AssignmentMaintenance.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";
import useAdd from "../../../hooks/useAdd.js";
import useDetail from "../../../hooks/useDetail.js";

function ManagerAssignment() {

    const { show, setShow } = useAdd();
    const { showDetail, setShowDetail } = useDetail();
    const { showDetail: showMaintenance, setShowDetail: setShowMaintenance } = useDetail();

    return (
        <>
            <AssignmentTitle onAdd={() => setShow(true)} />

            <section className="content">

                <AssignmentTable 
                    onView={() => setShowDetail(true)} 
                    onSee={() => setShowMaintenance(true)}
                />

                <Pagination />

            </section>

            {show ? <AssignmentForm onClose={() => setShow(false)} /> : "" }
            
            {showDetail ? <AssignmentDetail onClose={() => setShowDetail(false)} /> : "" }

            {showMaintenance ? <AssignmentMaintenance onClose={() => setShowMaintenance(false)} /> : "" }
        </>
    )
}

export default ManagerAssignment;