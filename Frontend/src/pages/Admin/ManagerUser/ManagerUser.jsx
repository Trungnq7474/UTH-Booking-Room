import UserTitle from "./UserTitle/UserTitle.jsx";
import UserTable from "./UserTable/UserTable.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";
import UserForm from "./UserForm/UserForm.jsx";
import useModal from "../../../hooks/useModal.js";


function ManagerUser() {

    const { show, setShow } = useModal();

    return (
        <>
            <UserTitle onAdd={() => setShow(true)} />

            <section className="content">

                <UserTable />

                <Pagination />

            </section>

            {show ? <UserForm onClose={() => setShow(false)} /> : ""} 

        </>
    )
}

export default ManagerUser;