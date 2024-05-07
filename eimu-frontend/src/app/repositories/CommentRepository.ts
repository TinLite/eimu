import { LikeAction, PendingComment, PendingReply } from "../model/CommentModels";

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
    var request = await fetch(`${process.env.BACKEND_ADDRESS}/comments/query?field=${field}&query=${query}`);
    if (request.ok) {
        return await request.json();
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
        })
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
        })
    });
    return request.ok;
}