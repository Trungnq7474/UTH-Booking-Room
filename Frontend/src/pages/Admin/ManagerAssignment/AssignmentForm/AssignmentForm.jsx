import "./AssignmentForm.css";

function AssignmentForm({ onClose }) {
    return (
        <>
            <div className="incident-overlay">
                <div className="incident-modal">

                    <div className="incident-header">
                        <h2>
                            <i className="fa-solid fa-triangle-exclamation"></i> THÊM SỰ CỐ
                        </h2>

                        <button className="incident-close" onClick={onClose}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <div className="incident-body">

                        <div className="incident-row">
                            <div className="incident-group">
                                <label>Người Báo Cáo</label>
                                <input type="text" value="Admin" readOnly/>
                            </div>

                            <div className="incident-group">
                                <label>Tên Sự Cố</label>
                                <input type="text" placeholder="Nhập tên sự cố" />
                            </div>

                            <div className="incident-group">
                                <label>Khu Vực</label>
                                <select>
                                    <option value="">-- Chọn Khu Vực --</option>
                                    <option>Khu H</option>
                                    <option>Khu I</option>
                                    <option>Khu K</option>
                                </select>
                            </div>
                        </div>

                        <div className="incident-row">
                            <div className="incident-group">
                                <label>Phòng</label>
                                <select>
                                    <option value="">-- Chọn phòng --</option>
                                    <option>Phòng Máy - H003</option>
                                    <option>Phòng Máy - H004</option>
                                    <option>Phòng Máy - H509</option>
                                    <option>Phòng Thư Viện</option>
                                </select>
                            </div>

                            <div className="incident-group">
                                <label>Tầng</label>
                                <select>
                                    <option value="">-- Chọn Tầng --</option>
                                    <option>Tầng Trệt</option>
                                    <option>Tầng 1</option>
                                    <option>Tầng 5</option>
                                </select>
                            </div>

                            <div className="incident-group">
                                <label>Thiết Bị</label>
                                <select>
                                    <option value="">-- Chọn thiết bị --</option>
                                    <option>Máy tính</option>
                                    <option>Máy chiếu</option>
                                    <option>Thiết bị mạng</option>
                                </select>
                            </div>

                        
                        </div>

                        <div className="incident-group">
                            <label>Mô Tả Sự Cố</label>
                            <textarea
                                rows="4"
                                placeholder="Nhập nội dung mô tả sự cố..."
                            ></textarea>
                        </div>

                        <div className="incident-group incident-image">
                            <label>Hình Ảnh Sự Cố</label>

                            <div className="incident-upload">
                                <i className="fa-regular fa-image"></i>

                                <p>Chọn hình ảnh sự cố</p>

                                <input type="file" accept="image/*" />
                            </div>
                        </div>

                    </div>

                    <div className="incident-footer">
                        <button className="incident-save">
                            <i className="fa-solid fa-triangle-exclamation"></i> Thêm Sự Cố
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AssignmentForm;

