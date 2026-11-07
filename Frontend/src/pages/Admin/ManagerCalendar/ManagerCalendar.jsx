import CalendarTitle from "./CalendarTitle/CalendarTitle.jsx";
import CalendarTable from "./CalendarTable/CalendarTable.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";

function ManagerCalendar() {
    return (
        <>
            <CalendarTitle />

            <section className="content">

                <CalendarTable />

                <Pagination />

            </section>
        </>
    )
}

export default ManagerCalendar;