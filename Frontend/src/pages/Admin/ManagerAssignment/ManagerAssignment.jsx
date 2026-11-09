import AssignmentTitle from "./AssignmentTitle/AssignmentTitle.jsx";
import AssignmentTable from "./AssignmentTable/AssignmentTable.jsx";

import Pagination from "../../../components/Pagination/Pagination.jsx";

function ManagerAssignment() {
    return (
        <>
            <AssignmentTitle />

            <section className="content">

                <AssignmentTable />

                <Pagination />

            </section>
        </>
    )
}

export default ManagerAssignment;