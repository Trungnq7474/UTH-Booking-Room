import RoomTitle from "./RoomTitle.jsx";
import RoomTable from "./RoomTable.jsx";
import RoomForm from "./RoomForm/RoomForm.jsx";
import RoomDetail from "./RoomDetail/RoomDetail.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";
import useAdd from "../../../hooks/useAdd.js";
import useEdit from "../../../hooks/useEdit.js"
import useDetail from "../../../hooks/useDetail.js";


function ManagerRoom() {

    const { show, setShow } = useAdd();
    const { showEdit, setShowEdit } = useEdit();
    const { showDetail, setShowDetail } = useDetail();

    return (
        <>
            <RoomTitle onAdd={() => setShow(true)}/>

            <section className="content">

                <RoomTable 
                    onView={() => setShowDetail(true)}
                    onEdit={() => setShowEdit(true)}
                />

                <Pagination />

            </section>

            {show ? 
                <RoomForm 
                    onClose={() => setShow(false)}
                    isEdit={false}
                /> 
            : ""}

            {showEdit ? 
                <RoomForm 
                    onClose={() => setShowEdit(false)}
                    isEdit={true}
                />
            : ""}
            
            {showDetail ? <RoomDetail onClose={() => setShowDetail(false)}/> : ""}

        </>
    )
}

export default ManagerRoom;