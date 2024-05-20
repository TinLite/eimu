"use server"

import { createComment } from '@/app/repositories/CommentRepository';
import { z } from 'zod';

const CreateComment = z.object({
    movieId: z.string().min(4),
    userId: z.string().min(4),
    content: z.string().max(200),
    // datetime: z.string().datetime() //time currently cmt
})

export async function handleComment(_state: any | undefined, formData: FormData) {
    const parsedData = CreateComment.safeParse(Object.fromEntries(formData))
    if (!parsedData.success) {
        console.log(parsedData.error.flatten().fieldErrors)
        return "Nội dung nhập vào không hợp lệ.";
    }
    var data = parsedData.data
    await createComment({
        movieId: data.movieId,
        userId: data.userId,
        content: data.content
    })
}
