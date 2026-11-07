import "./UserForm.css";

function UserForm() {
    return (
        <>
            <div class="modal-overlay">
                <div class="user-form">

                    <div class="form-header">
                        <h2><i class="fa-solid fa-user-plus"></i> THÊM NGƯỜI DÙNG</h2>
                        <button class="close-button">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <div class="form-body">

                        <div class="form-group">
                            <label>Họ và tên</label>
                            <input type="text" placeholder="Nhập họ và tên" />
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label>Mã người dùng</label>
                                <input type="text" placeholder="Nhập mã người dùng" />
                            </div>

                            <div class="form-group">
                                <label>Số điện thoại</label>
                                <input type="text" placeholder="Nhập số điện thoại" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Nhập địa chỉ email" />
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label>Mật khẩu</label>
                                <input type="password" placeholder="Nhập mật khẩu" />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label>Vai trò</label>
                                <select>
                                    <option value="">-- Chọn vai trò --</option>
                                    <option>Sinh viên</option>
                                    <option>Giảng viên</option>
                                    <option>Nhân viên kỹ thuật</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div class="form-footer">
                        <button class="add-button">
                            <i class="fa-solid fa-user-plus"></i> Thêm Người Dùng
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UserForm;