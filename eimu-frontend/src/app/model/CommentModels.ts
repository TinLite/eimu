export type CommentDetail = {
    id: string,
    movieId: string,
    userId: string,
    content: string,
    timestamp: string,
    replyTo?: string,
    likes: string[],
}

export type Comment = {
    id: string,
    movieId: string,
    userId: string,
    content: string,
    timestamp: string,
}

export type CommentContent = {
    id: string,
    content: string,
}

export type PendingComment = {
    movieId: string,
    userId: string,
    content: string,
}

export type PendingReply = {
    movieId: string,
    userId: string,
    content: string,
    replyTo: string,
}

export type LikeAction = {
    userId: string,
    commentId: string,
}