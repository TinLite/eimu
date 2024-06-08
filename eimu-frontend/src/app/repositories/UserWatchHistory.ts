'use server';

import { MovieHistoryEntry } from "../model/MovieHistoryModels";

/**
 * Lấy lịch sử xem phim của người dùng
 * @param userId ID người dùng
 * @returns MovieHistoryEntry[] nếu người dùng tồn tại, ngược lại trả về undefined
 */
export async function getHistoryList(userId: string) {
    var request = await fetch(`${process.env.BACKEND_ADDRESS}/user/history/${userId}`, {
        cache: "no-cache"
    })
    if (request.ok) {
        return await request.json() as MovieHistoryEntry[];
    } else {
        return undefined;
    }
}

/**
 * Lấy tiến trình xem phim của người dùng (Người dùng đó đang xem đến tập nào của phim)
 * @param userId ID người dùng
 * @param movieId ID phim
 * @returns MovieHistoryEntry nếu người dùng có tồn tại và có lịch sử xem phim này, ngược lại trả về undefined
 */
export async function getMovieHistory(userId: string, movieId: string) {
    var request = await fetch(`${process.env.BACKEND_ADDRESS}/user/historyfilm/${userId}/${movieId}`, {
        next: {
            revalidate: 1
        }
    })
    if (request.ok) {
        return await request.json() as MovieHistoryEntry;
    } else {
        return undefined;
    }
}

/**
 * Thêm/Cập nhật lịch sử xem phim của người dùng
 * @param userId ID người dùng
 * @param movieId ID phim
 * @param episodeId ID tập hpim
 * @returns Trả về true nếu thêm thành công, ngược lại trả về false
 */
export async function addHistory(userId: string, movieId: string, episodeId: string) {
    var request = await fetch(`${process.env.BACKEND_ADDRESS}/user/watch`, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: userId,
            movieId: movieId,
            watchedEpisode: episodeId
        }),
        method: "POST",
        cache: "no-cache",
    })
    return request.ok;
}

/**
 * Xóa lịch sử xem phim của người dùng
 * @param userId ID người dùng
 * @param movieId ID phim
 * @returns Trả về true nếu xóa thành công, ngược lại trả về false
 */
export async function deleteHistory(userId: string, movieId: string) {
    var request = await fetch(`${process.env.BACKEND_ADDRESS}/user/deletehistory?userId=${userId}&movieId=${movieId}`, {
        method: "POST",
        cache: "no-cache",
    })
    return request.ok;
}

