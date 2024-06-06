'use server';
import { createComment, createReply } from "@/app/repositories/CommentRepository";

export async function submitComment(movieId: string, userId: string, formData: FormData, replyTo?: string) {
    'use server';
    const content = formData.get('content') as string;
    const result = (
        replyTo ? 
        createReply({userId, movieId, content, replyTo}) :
        createComment({userId, movieId, content})
    );
    return result;
}