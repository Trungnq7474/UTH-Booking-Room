import "./RoomTitle.css";

function RoomTitle() {
    return (
        <>
            <div className="room-title">
                <i className="fa-solid fa-desktop"></i>
                <h2>QUẢN LÝ PHÒNG</h2>
            </div>

            <div className="room-toolbar">

                <div className="room-search">
                    <input
                        type="text"
                        placeholder="Tìm kiếm theo tên phòng, stt,..."
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className="room-filter">
                    <select>
                        <option value="">Khu vực</option>
                        <option>Khu H</option>
                        <option>Khu I</option>
                        <option>Khu K</option>
                    </select>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>

                <div className="room-filter">
                    <select>
                        <option value="">Trạng thái</option>
                        <option>Hoạt Động</option>
                        <option>Bảo Trì</option>
                    </select>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>

            </div>
        </>
    )
}

export default RoomTitle;
