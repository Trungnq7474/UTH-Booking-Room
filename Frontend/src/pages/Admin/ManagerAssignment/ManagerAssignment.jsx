import AssignmentTitle from "./AssignmentTitle/AssignmentTitle.jsx";
import AssignmentTable from "./AssignmentTable/AssignmentTable.jsx";
import AssignmentForm from "./AssignmentForm/AssignmentForm.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";

import useAdd from "../../../hooks/useAdd.js";

function ManagerAssignment() {

    const { show, setShow } = useAdd();

    return (
        <>
            <AssignmentTitle onAdd={() => setShow(true)} />

            <section className="content">

                <AssignmentTable />

                <Pagination />

            </section>

            {show ? <AssignmentForm onClose={() => setShow(false)} /> : "" }
        </>
    )
}

export default ManagerAssignment;