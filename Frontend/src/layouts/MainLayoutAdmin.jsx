import Slidebar from "../components/Slidebar/Slidebar.jsx";
import TopBar from "../components/TopBar/TopBar.jsx";

function MainLayoutAdmin({ children }) {
    return (
        <div className="app-container">

            <Slidebar />

            <main className="main-content">

                <TopBar />
                {children}
                
            </main>
        </div>
    );
}

export default MainLayoutAdmin;

