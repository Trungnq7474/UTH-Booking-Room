import "./ToolTitle.css";

function ToolTitle({ onAdd }) {
    return (
        <>
            <div className="equipment-title">
                <i className="fa-solid fa-hard-drive"></i>
                <h1>QUẢN LÝ THIẾT BỊ</h1>
            </div>

            <div className="equipment-toolbar">

                <div className="equipment-search">
                    <input
                        type="text"
                        placeholder="Tìm kiếm theo tên thiết bị, loại,..."
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className="equipment-filter">
                    <select>
                        <option value="">Loại thiết bị</option>
                        <option>Máy tính</option>
                        <option>Máy chiếu</option>
                        <option>Máy in</option>
                        <option>Switch</option>
                    </select>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>

                <div className="equipment-filter">
                    <select>
                        <option value="">Trạng thái</option>
                        <option>Hoạt Động</option>
                        <option>Bảo Trì</option>
                    </select>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>

                <button className="equipment-add" onClick={onAdd}>
                    <i className="fa-solid fa-plus"></i>
                    Thêm Thiết Bị
                </button>
            </div>
        </>
    )
}

export default ToolTitle;