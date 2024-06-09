import { getAllTag } from "@/app/repositories/MovieTagRepository"
import { getStatistic } from "@/app/repositories/StatisticRepository"

export default async function dashboard() {
    const stats = await getStatistic()
    const tags = await getAllTag()
    return (
    <div className="flex justify-evenly flex-wrap lg:flex-col gap-4 w-fit mx-auto">
        <div className="stats shadow stats-vertical lg:stats-horizontal">
            <div className="stat">
                <div className="stat-title">Tổng số phim</div>
                <div className="stat-value">{stats.totalMovies ?? "N/A"}</div>
            </div>
            <div className="stat">
                <div className="stat-title">Thể loại</div>
                <div className="stat-value">{tags.length}</div>
            </div>
        </div>
        <div className="stats shadow stats-vertical lg:stats-horizontal">
            <div className="stat">
                <div className="stat-title">Tài khoản</div>
                <div className="stat-value">{stats.totalUsers} tài khoản</div>
            </div>
            <div className="stat">
                <div className="stat-title">Mới tạo hôm nay</div>
                <div className="stat-value">{stats.newUsersToday}</div>
            </div>
        </div>
    </div>)
}