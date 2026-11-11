import ToolTitle from "./ToolTitle/ToolTitle.jsx";
import ToolTable from "./ToolTable/ToolTable.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";
import ToolForm from "./ToolForm/ToolForm.jsx";
import ToolDetail from "./ToolDetail/ToolDetail.jsx";
import useForm from "../../../hooks/useAdd.js"
import useEdit from "../../../hooks/useEdit.js"
import useDetail from "../../../hooks/useDetail.js"

function ManagerTool() {

    const { show, setShow } = useForm();
    const { showEdit, setShowEdit } = useEdit();
    const { showDetail, setShowDetail } = useDetail();

    return (
        <>
            <ToolTitle onAdd={() => setShow(true)} />

            <section className="content">

                <ToolTable 
                    onView={() => setShowDetail(true)} 
                    onEdit={() => setShowEdit(true)}
                />

                <Pagination />

            </section>

            {show ? 
                <ToolForm 
                    onClose={() => setShow(false)}
                    isEdit={false}
                /> 
            : "" }

            {showEdit ?
                <ToolForm 
                    onClose={() => setShowEdit(false)}
                    isEdit={true}
                />
            : ""}

            {showDetail ? <ToolDetail onClose={() => setShowDetail(false)} /> : "" }

        </>
    )
}

export default ManagerTool;