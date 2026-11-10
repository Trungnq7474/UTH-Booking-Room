import "./ToolForm.css";

function ToolForm({ onClose, isEdit }) {
    return (
        <>
            <div className="add-equipment-overlay">
                <div className="add-equipment-modal">

                    <div className="add-equipment-header">
                        <h2>
                            {isEdit ? (
                                <>
                                    <i className="fa-regular fa-pen-to-square"></i> SỬA THIẾT BỊ
                                </>
                            ) : (
                                <>
                                    <i className="fa-solid fa-hard-drive"></i> THÊM THIẾT BỊ
                                </>
                            )}
                        </h2>

                        <button type="button" className="add-equipment-close" onClick={onClose}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <div className="add-equipment-form">
                        <div className="add-equipment-fields">

                            <div className="add-equipment-group">
                                <label>Tên Thiết Bị</label>

                                <input
                                    type="text"
                                    placeholder="Nhập tên thiết bị..."
                                />
                            </div>

                            <div className="add-equipment-group">
                                <label>Trạng Thái</label>

                                <select>
                                    <option value="">-- Chọn trạng thái --</option>
                                    <option>Hoạt Động</option>
                                    <option>Bảo Trì</option>
                                </select>
                            </div>

                            <div className="add-equipment-group">
                                <label>Loại Thiết Bị</label>

                                <select>
                                    <option value="">-- Chọn loại thiết bị --</option>
                                    <option>Máy tính</option>
                                    <option>Máy chiếu</option>
                                    <option>Máy in</option>
                                    <option>Thiết bị mạng</option>
                                </select>
                            </div>

                            <div className="add-equipment-group">
                                <label>Tên Phòng</label>

                                <select>
                                    <option value="">-- Chọn phòng --</option>
                                    <option>Phòng Máy - H003</option>
                                    <option>Phòng Máy - H004</option>
                                    <option>Phòng Máy - H509</option>
                                    <option>Phòng Thư Viện</option>
                                </select>
                            </div>

                            <div className="add-equipment-group">
                                <label>Tầng</label>

                                <select>
                                    <option value="">-- Chọn tầng --</option>
                                    <option>Tầng Trệt</option>
                                    <option>Tầng 1</option>
                                    <option>Tầng 5</option>
                                </select>
                            </div>

                            <div className="add-equipment-group">
                                <label>Khu Vực</label>

                               <select>
                                    <option value="">-- Chọn khu vực --</option>
                                    <option>Khu H</option>
                                    <option>Khu I</option>
                                    <option>Khu K</option>
                                </select>
                            </div>

                        </div>

                        <div className="add-equipment-group add-equipment-image">
                            <label>Hình Ảnh Thiết Bị</label>

                            <div className="add-equipment-upload">
                                <i className="fa-regular fa-image"></i>

                                <p>Chọn hình ảnh thiết bị</p>

                                <input type="file" />
                            </div>
                        </div>

                        <div className="add-equipment-group add-equipment-description">
                            <label>Mô Tả</label>

                            <textarea
                                rows="3"
                                placeholder="Nhập mô tả về thiết bị..."
                            ></textarea>
                        </div>

                        <div className="add-equipment-buttons">

                            <button className="add-equipment-submit">
                                {isEdit ? (
                                    <>
                                        <i className="fa-regular fa-pen-to-square"></i> Cập Nhật
                                    </>
                                ) : (
                                    <>
                                        <i className="fa-solid fa-hard-drive"></i> Thêm Thiết Bị
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

export default ToolForm;