import "./TopBar.css";

function TopBar() {
    return (
        <>
            <header className="topbar">
                <div className="top-actions">
                    <button className="icon-circle">
                        <i className="fa-regular fa-bell"></i>
                    </button>

                    <button className="icon-circle">
                        <i className="fa-regular fa-user"></i>
                    </button>
                </div>
            </header>
        </>
    )
}

export default TopBar;