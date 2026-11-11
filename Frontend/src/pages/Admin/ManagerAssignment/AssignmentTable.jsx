import Table from "../../../components/Table/Table.jsx";

function AssignmentTable({ onView, onSee }) {

    const columns = [
        { title: "STT", key: "stt" },

        { title: "Mã Sự Cố", key: "code" },

        { title: "Người Báo Cáo", key: "reporter" },

        { title: "Tên Sự Cố", key: "name" },

        {
            title: "Trạng Thái",
            key: "status",
            render: (value, item) => (
                <span className={item.statusClass}>
                    <i className={item.statusIcon}></i>
                    {value}
                </span>
            )
        },

        {
            title: "Đề Xuất Bảo Trì",
            key: "maintenance",
            render: (value) => (
                value ? (
                    <div className="common-table-actions">
                        <button
                            className="common-view-button"
                            onClick={onSee}
                        >
                            <i className="fa-regular fa-eye"></i>
                            Xem Đề Xuất
                        </button>
                    </div>
                ) : "-"
            )
        },

        {
            title: "Nhân Viên Phân Công",
            key: "technician",
            render: (value) => (
                <div className="common-select">
                    <select defaultValue={value}>
                        <option value="">-</option>
                        <option value="Phạm Văn T">Phạm Văn T</option>
                        <option value="Võ Văn X">Võ Văn X</option>
                        <option value="Trương Văn P">Trương Văn P</option>
                    </select>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            )
        }
    ];

    const data = [
        {
            stt: "#001",
            code: "#SC - 001",
            reporter: "Nguyễn Văn A",
            name: "Máy chiếu",
            status: "Đã Tiếp Nhận",
            statusClass: "common-status-received",
            statusIcon: "fa-regular fa-circle-check",
            maintenance: true,
            technician: "Phạm Văn T"
        },

        {
            stt: "#002",
            code: "#SC - 002",
            reporter: "Trần Văn B",
            name: "Máy tính",
            status: "Chờ Phân Công",
            statusClass: "common-status-pending",
            statusIcon: "fa-regular fa-clock",
            maintenance: true,
            technician: ""
        },

        {
            stt: "#003",
            code: "#SC - 003",
            reporter: "Nguyễn Văn C",
            name: "Wifi",
            status: "Đang Thực Hiện",
            statusClass: "common-status-maintenance",
            statusIcon: "fa-solid fa-gear",
            maintenance: false,
            technician: "Võ Văn X"
        },

        {
            stt: "#004",
            code: "#SC - 004",
            reporter: "Trần Văn D",
            name: "Dây cắm",
            status: "Đã Hoàn Thành",
            statusClass: "common-status-active",
            statusIcon: "fa-solid fa-square-check",
            maintenance: false,
            technician: "Trương Văn P"
        }
    ];

    const actions = [
        {
            label: "Xem",
            icon: "fa-regular fa-eye",
            className: "common-view-button",
            onClick: onView
        },
        
        {
            label: "Xóa",
            icon: "fa-regular fa-trash-can",
            className: "common-delete-button"
        }
    ];

    return (
        <Table
            columns={columns}
            data={data}
            actions={actions}
        />
    );
}

export default AssignmentTable;
