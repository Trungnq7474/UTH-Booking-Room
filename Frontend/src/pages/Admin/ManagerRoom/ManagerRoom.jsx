import RoomTitle from "./RoomTitle/RoomTitle.jsx";
import RoomTable from "./RoomTable/RoomTable.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";


function ManagerRoom() {
    return (
        <>
            <RoomTitle />

            <section className="content">

                <RoomTable />

                <Pagination />

            </section>
        </>
    )
}

export default ManagerRoom;