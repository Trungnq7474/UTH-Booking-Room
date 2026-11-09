import "./RoomForm.css";

function RoomForm({ onClose, isEdit }) {
    return (
        <>
            <div className="add-room-overlay">
                <div className="add-room-modal">

                    <div className="add-room-header">
                        <h2>
                            {isEdit ? (
                                <>
                                    <i className="fa-regular fa-pen-to-square"></i> SỬA PHÒNG
                                </>
                            ) : (
                                <>
                                    <i class="fa-solid fa-desktop"></i> THÊM PHÒNG
                                </>
                            )}
                        </h2>

                        <button type="button" className="add-room-close" onClick={onClose}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <div className="add-room-form">
                        <div className="add-room-fields">

                            <div className="add-room-group">
                                <label>
                                    Tên Phòng
                                </label>

                                <input
                                    type="text"
                                    placeholder="Nhập tên phòng..."
                                />
                            </div>

                            <div className="add-room-group">
                                <label>
                                    Trạng Thái
                                </label>

                                <select>
                                    <option value="">-- Chọn trạng thái --</option>
                                    <option>Hoạt Động</option>
                                    <option>Bảo Trì</option>
                                </select>
                            </div>

                            <div className="add-room-group">
                                <label>
                                    Khu Vực
                                </label>

                                <select>
                                    <option value="">-- Chọn khu vực-- </option>
                                    <option>Khu H</option>
                                    <option>Khu I</option>
                                    <option>Khu K</option>
                                </select>
                            </div>

                            <div className="add-room-group">
                                <label>
                                    Tầng
                                </label>

                                <select>
                                    <option value="">-- Chọn tầng-- </option>
                                    <option>Tầng Trệt</option>
                                    <option>Tầng 1</option>
                                    <option>Tầng 2</option>
                                    <option>Tầng 3</option>
                                    <option>Tầng 4</option>
                                    <option>Tầng 5</option>
                                </select>
                            </div>

                            <div className="add-room-group">
                                <label>
                                    Sức Chứa
                                </label>

                                <input
                                    type="number"
                                    min="1"
                                    placeholder="Nhập sức chứa..."
                                    
                                />
                            </div>

                            <div className="add-room-group">
                                <label>
                                    Loại Phòng
                                </label>

                                <select>
                                    <option value="">-- Chọn loại phòng-- </option>
                                    <option>Phòng Máy</option>
                                    <option>Phòng Học</option>
                                </select>
                            </div>

                        </div>

                        <div className="add-room-group add-room-image">
                            <label>Hình Ảnh Phòng</label>

                            <div className="add-room-upload">
                                <i className="fa-regular fa-image"></i>

                                <p>Chọn hình ảnh phòng</p>

                                <input
                                    type="file"
                                />
                            </div>
                        </div>

                        <div className="add-room-group add-room-description">
                            <label>Mô Tả</label>

                            <textarea
                                rows="3"
                                placeholder="Nhập mô tả về phòng..."
                            ></textarea>
                        </div>

                        <div className="add-room-buttons">

                            <button className="add-room-submit">
                                {isEdit ? (
                                    <>
                                        <i className="fa-regular fa-pen-to-square"></i> Cập Nhật
                                    </>
                                ) : (
                                    <>
                                        <i class="fa-solid fa-desktop"></i> Thêm Phòng
                                    </>
                                )}
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomForm;