import UserTitle from "../UserTitle/UserTitle.jsx";
import UserTable from "../UserTable/UserTable.jsx";
import UserPagination from "../UserPagination/UserPagination.jsx";

function ManagerUser() {
    return (
        <>
            <UserTitle />

            <section className="content">

                <UserTable />

                <UserPagination />

            </section>
        </>
    )
}

export default ManagerUser;