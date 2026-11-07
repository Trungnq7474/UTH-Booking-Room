import "./SupportTitle.css";

function SupportTitle() {
    return (
        <>
            <div className="support-page-title">
                <i className="fa-solid fa-headphones"></i>
                <h1>QUẢN LÝ TRỢ GIÚP</h1>
            </div>

            <div className="support-toolbar">

                <div className="support-search-box">
                    <input
                        type="text"
                        placeholder="Tìm kiếm theo họ tên, email,..."
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>

                </div>

                <div className="support-filter-box">
                    <select>
                        <option>Trạng thái</option>
                        <option>Chưa trả lời</option>
                        <option>Đã trả lời</option>
                    </select>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </div>
            
        </>
    )
}

export default SupportTitle;