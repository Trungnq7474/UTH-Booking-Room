import "./AssignmentForm.css";
import Form from "../../../../components/Form/Form.jsx";

function AssignmentForm({ onClose }) {
    return (
        <>
            <Form
                title="THÊM SỰ CỐ"
                icon="fa-solid fa-triangle-exclamation"
                onClose={onClose}
                buttonText="Thêm Sự Cố"
                buttonIcon="fa-solid fa-triangle-exclamation"
            >

                <div className="incident-row">

                    <div className="common-form-group">
                        <label>Người Báo Cáo</label>
                        <input type="text" value="Admin" readOnly />
                    </div>

                    <div className="common-form-group">
                        <label>Tên Sự Cố</label>
                        <input
                            type="text"
                            placeholder="Nhập tên sự cố"
                        />
                    </div>

                    <div className="common-form-group">
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

                    <div className="common-form-group">
                        <label>Phòng</label>
                        <select>
                            <option value="">-- Chọn phòng --</option>
                            <option>Phòng Máy - H003</option>
                            <option>Phòng Máy - H004</option>
                            <option>Phòng Máy - H509</option>
                            <option>Phòng Thư Viện</option>
                        </select>
                    </div>

                    <div className="common-form-group">
                        <label>Tầng</label>
                        <select>
                            <option value="">-- Chọn Tầng --</option>
                            <option>Tầng Trệt</option>
                            <option>Tầng 1</option>
                            <option>Tầng 5</option>
                        </select>
                    </div>

                    <div className="common-form-group">
                        <label>Thiết Bị</label>
                        <select>
                            <option value="">-- Chọn thiết bị --</option>
                            <option>Máy tính</option>
                            <option>Máy chiếu</option>
                            <option>Thiết bị mạng</option>
                        </select>
                    </div>

                </div>

                <div className="common-form-group incident-description">
                    <label>Mô Tả Sự Cố</label>
                    <textarea
                        rows="4"
                        placeholder="Nhập nội dung mô tả sự cố..."
                    ></textarea>
                </div>

                <div className="common-form-group incident-image">
                    <label>Hình Ảnh Sự Cố</label>

                    <div className="common-form-upload">
                        <i className="fa-regular fa-image"></i>
                        <p>Chọn hình ảnh sự cố</p>
                        <input type="file" accept="image/*" />
                    </div>
                </div>

            </Form>
        </>
    )
}

export default AssignmentForm;

