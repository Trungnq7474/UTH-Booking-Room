import Table from "../../../components/Table/Table.jsx";

function ToolTable({ onView, onEdit }) {

    const columns = [
        { title: "STT", key: "stt" },

        { title: "Hình Ảnh", key: "image" },

        { title: "Tên Thiết Bị", key: "name" },

        { title: "Loại Thiết Bị", key: "type" },

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
            name: "Máy Tính Dell OptiPlex",
            type: "Máy tính",
            status: "Hoạt Động",
            statusClass: "common-status-active",
            statusIcon: "fa-solid fa-square-check"
        },

        {
            stt: "#002",
            image: "Ảnh",
            name: "Máy Chiếu Epson",
            type: "Máy chiếu",
            status: "Bảo Trì",
            statusClass: "common-status-maintenance",
            statusIcon: "fa-solid fa-wrench"
        },

        {
            stt: "#003",
            image: "Ảnh",
            name: "Switch Cisco CBS250-24T",
            type: "Thiết bị mạng",
            status: "Hoạt Động",
            statusClass: "common-status-active",
            statusIcon: "fa-solid fa-square-check"
        },

        {
            stt: "#004",
            image: "Ảnh",
            name: "Máy In HP LaserJet Pro",
            type: "Máy in",
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
        <>
            <Table 
                columns={columns}
                data={data}
                actions={actions}
            />
        </>
    )
}

export default ToolTable;