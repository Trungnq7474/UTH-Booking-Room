import "./Table.css";

function Table({ columns, data, actions = [] }) {
    return (
        <>
            <div className="common-table-container">
                <table>
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index}>{column.title}</th>
                            ))}

                            {actions.length > 0 ? (
                                <th>Thao Tác</th>
                            ) : ""}
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                {columns.map((column, i) => (
                                    <td key={i}>
                                        {column.render
                                            ? column.render(item[column.key], item)
                                            : item[column.key]}
                                    </td>
                                ))}

                                {actions.length > 0 ? (
                                    <td>
                                        <div className="common-table-actions">
                                            {actions.map((action, i) => (
                                                <button
                                                    key={i}
                                                    className={action.className}
                                                    onClick={() => action.onClick?.(item)}
                                                >
                                                    <i className={action.icon}></i>
                                                    {action.label}
                                                </button>
                                            ))}
                                        </div>
                                    </td>
                                ) : ""}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;