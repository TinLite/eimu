"use server";

export async function getStatistic() {
    var request = await fetch(`${process.env.BACKEND_ADDRESS}/user/stat`);
    // Không cần kiểm tra liệu request có thành công hay không. API này luôn trả về 200 OK.
    return await request.json() as {
        totalUsers: number,
        newUsersToday: number,
        totalMovies: number,
        totalComments: number
    };
}