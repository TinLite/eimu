export default async function dashboard() {
    return (
    <div className="flex justify-evenly flex-wrap lg:flex-col gap-4">
        <div className="stats shadow stats-vertical lg:stats-horizontal">
            <div className="stat">
                <div className="stat-title">Tổng số phim</div>
                <div className="stat-value">9999</div>
            </div>
            <div className="stat">
                <div className="stat-title">Mới cập nhật</div>
                <div className="stat-value">9999</div>
            </div>
            <div className="stat">
                <div className="stat-title">Xem hôm nay</div>
                <div className="stat-value">9999</div>
            </div>
            <div className="stat">
                <div className="stat-title">Thể loại</div>
                <div className="stat-value">99</div>
            </div>
        </div>
        <div className="stats shadow stats-vertical lg:stats-horizontal">
            <div className="stat">
                <div className="stat-title">Tài khoản</div>
                <div className="stat-value">9999</div>
            </div>
            <div className="stat">
                <div className="stat-title">Mới tạo hôm nay</div>
                <div className="stat-value">9999</div>
            </div>
            <div className="stat">
                <div className="stat-title">Đăng nhập hôm nay</div>
                <div className="stat-value">99</div>
            </div>
        </div>
        <div className="stats shadow stats-vertical lg:stats-horizontal">
            <div className="stat">
                <div className="stat-title">Tổng số bình luận</div>
                <div className="stat-value">9999</div>
            </div>
            <div className="stat">
                <div className="stat-title">Bình luận mới</div>
                <div className="stat-value">9999</div>
            </div>
            <div className="stat">
                <div className="stat-title">Bình luận phim</div>
                <div className="stat-value">9999</div>
            </div>
            <div className="stat">
                <div className="stat-title">Trả lời</div>
                <div className="stat-value">9999</div>
            </div>
        </div>
    </div>)
}