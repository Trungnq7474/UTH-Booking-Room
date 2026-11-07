import UserTitle from "./UserTitle/UserTitle.jsx";
import UserTable from "./UserTable/UserTable.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";
import UserForm from "./UserForm/UserForm.jsx";


function ManagerUser() {
    return (
        <>
            <UserTitle />

            <section className="content">

                <UserTable />

                <Pagination />

            </section>

            <UserForm />

        </>
    )
}

export default ManagerUser;