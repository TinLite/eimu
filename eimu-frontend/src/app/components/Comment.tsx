'use client';
import CommentForm from '@/app/components/CommentForm';
import UserComments from '@/app/components/UserComments';
import { Movie } from '@/app/model/MovieModels';
import { Suspense, useEffect, useState } from 'react';
import { submitComment } from '../action/CommentFormAction';
import { RecursiveCommentDetail } from '../model/CommentModels';
import { UserDetail } from '../model/UserModels';
import { getRecursiveCommentByMovieId } from '../repositories/CommentRepository';

export default function Comment({movie, userDetail, userId}: {movie: Movie, userDetail?: UserDetail, userId?: string}) {

    const [comments, setComments] = useState<RecursiveCommentDetail[]>([]);
    const [seed, setSeed] = useState(0);

    useEffect(() => {
        getRecursiveCommentByMovieId(movie.id).then(setComments)
    }, [seed])

    const submitHandler = async (movieId: string, userId: string, formData: FormData, replyTo?: string) =>
        submitComment(movieId, userId, formData, replyTo).then(() => setSeed(seed + 1))
    
    return (
        <div className='px-6 py-4 mx-14 my-5'>
            <div className='flex gap-2'>
                <div className='text-xl font-bold'>Bình luận</div>
            </div>
            <CommentForm name={userDetail?.name ?? "Xin chào"} submitFunction={userDetail ? submitHandler.bind(null, movie.id, userId!) : undefined}/>
            <Suspense fallback={<div>Đang tải...</div>}>
                <UserComments comments={comments} commentSubmitHandler={userDetail ? submitHandler.bind(null, movie.id, userId!) : undefined} />
            </Suspense>
        </div>
    )
}
