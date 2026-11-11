import "./Title.css";

function Title({ icon, title, placeholder, buttonText, onAdd, children }) {
    return (
        <>
            <div className="page-title">
                <i className={icon}></i>
                <h1>{title}</h1>
            </div>

            <div className="toolbar">
                <div className="search-box">
                    <input type="text" placeholder={placeholder} />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                {children}

                {buttonText ? (
                    <button className="title-add-button" onClick={onAdd}>
                        <i className="fa-solid fa-plus"></i>
                        {buttonText}
                    </button>
                ) : ""}
            </div>
        </>
    );
}

export default Title;
