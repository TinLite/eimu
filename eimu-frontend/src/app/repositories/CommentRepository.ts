'use server';
import { CommentDetail, LikeAction, PendingComment, PendingReply, RecursiveCommentDetail } from "../model/CommentModels";

export async function createComment(comment: PendingComment) {
    var request = await fetch(`${process.env.BACKEND_ADDRESS}/comments/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment)
    });
    return request.ok;
}

export async function queryComment(field: "movieid" | "userid" | "content", query: string) {
    var request = await fetch(`${process.env.BACKEND_ADDRESS}/comments/search?field=${field}&query=${query}`);
    if (request.ok) {
        return await request.json() as CommentDetail[];
    } else {
        return [];
    }
}

export async function deleteComment(commentId: string) {
    var request = await fetch(`${process.env.BACKEND_ADDRESS}/comments/delete/${commentId}`, {
        method: 'POST',
    });
    return request.ok;
}

export async function createReply(comment: PendingReply) {
    var request = await fetch(`${process.env.BACKEND_ADDRESS}/comments/reply/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment)
    });
    return request.ok;
}

export async function createCommentLike(likeData: LikeAction) {
    var request = await fetch(`${process.env.BACKEND_ADDRESS}/comments/addlike`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: likeData.commentId,
            userId: likeData.userId
        }),
        cache: "no-cache",
    });
    return request.ok;
}

export async function removeCommentLike(likeDataToRemove: LikeAction) {
    var request = await fetch(`${process.env.BACKEND_ADDRESS}/comments/removelike`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: likeDataToRemove.commentId,
            userId: likeDataToRemove.userId
        }),
        cache: "no-cache",
    });
    return request.ok;
}

export async function getRecursiveCommentByMovieId(movieId: String) {
    var request = await fetch(`${process.env.BACKEND_ADDRESS}/comments/replies?movieId=${movieId}`, {cache: "no-cache"});
    if (request.ok) {
        return await request.json() as RecursiveCommentDetail[];
    } else {
        console.error("Recursive fetch", movieId, request.status, request.statusText);
        return [];
    }
}