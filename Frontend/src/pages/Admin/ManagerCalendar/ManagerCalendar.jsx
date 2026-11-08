import CalendarTitle from "./CalendarTitle/CalendarTitle.jsx";
import CalendarTable from "./CalendarTable/CalendarTable.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";
import CalendarDetail from "./CalendarDetail/CalendarDetail.jsx";
import useModal from "../../../hooks/useModal.js";

function ManagerCalendar() {

    const { show, setShow } = useModal();

    return (
        <>
            <CalendarTitle />

            <section className="content">

                <CalendarTable onView={() => setShow(true)}/>

                <Pagination />

            </section>

            {show ? <CalendarDetail onClose={() => setShow(false)} /> : ""}
        </>
    )
}

export default ManagerCalendar;