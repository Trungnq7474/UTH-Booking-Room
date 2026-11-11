import "./Title.css";

function Title({ icon, title, placeholder, filters = [], buttonText, onAdd }) {
    return (
        <>
            <div className="page-title">
                <i className={icon}></i>
                <h1>{title}</h1>
            </div>

            <div className="toolbar">

                <div className="search-box">
                    <input
                        type="text"
                        placeholder={placeholder}
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                {filters.map((filter, index) => (
                    <div className="filter-box" key={index}>
                        <select defaultValue="">
                            <option value="">{filter.label}</option>

                            {filter.options.map((option, i) => (
                                <option key={i} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                ))}

                {buttonText ? (
                    <button className="add-button" onClick={onAdd}>
                        <i className="fa-solid fa-plus"></i>
                        {buttonText}
                    </button>
                ) : ""}

            </div>
        </>
    )
}

export default Title;