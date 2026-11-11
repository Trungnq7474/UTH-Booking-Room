import Table from "../../../components/Table/Table.jsx";

function RoomTable({ onView, onEdit }) {

    const columns = [
        { title: "STT", key: "stt" },

        { title: "Hình Ảnh", key: "image" },

        { title: "Tên Phòng", key: "name" },

        { title: "Khu Vực", key: "area" },

        { title: "Sức Chứa", key: "capacity" },

        {
            title: "Trạng Thái",
            key: "status",
            render: (value, item) => (
                <span className={item.statusClass}>
                    <i className={item.statusIcon}></i>
                    {value}
                </span>
            )
        }
    ];

    const data = [
        {
            stt: "#001",
            image: "Ảnh",
            name: "Phòng Máy - H003",
            area: "Khu H - Tầng Trệt",
            capacity: "40 máy",
            status: "Hoạt Động",
            statusClass: "common-status-active",
            statusIcon: "fa-solid fa-square-check"
        },

        {
            stt: "#002",
            image: "Ảnh",
            name: "Phòng Máy - H004",
            area: "Khu H - Tầng Trệt",
            capacity: "40 máy",
            status: "Bảo Trì",
            statusClass: "common-status-maintenance",
            statusIcon: "fa-solid fa-wrench"
        },

        {
            stt: "#003",
            image: "Ảnh",
            name: "Phòng Máy - H509",
            area: "Khu H - Tầng 5",
            capacity: "40 máy",
            status: "Hoạt Động",
            statusClass: "common-status-active",
            statusIcon: "fa-solid fa-square-check"
        },

        {
            stt: "#004",
            image: "Ảnh",
            name: "Phòng - H104",
            area: "Khu H - Tầng 1",
            capacity: "3 thiết bị",
            status: "Hoạt Động",
            statusClass: "common-status-active",
            statusIcon: "fa-solid fa-square-check"
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
            label: "Sửa",
            icon: "fa-regular fa-pen-to-square",
            className: "common-edit-button",
            onClick: onEdit
        },

        {
            label: "Xóa",
            icon: "fa-solid fa-trash-can",
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

export default RoomTable;
