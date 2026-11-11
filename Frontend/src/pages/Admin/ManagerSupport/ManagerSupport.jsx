import SupportTitle from "./SupportTitle.jsx";
import SupportTable from "./SupportTable.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";


function ManagerSupport() {
    return (
        <>
            <SupportTitle />

            <section className="content">

                <SupportTable />

                <Pagination />

            </section>

        </>
    )
}

export default ManagerSupport;