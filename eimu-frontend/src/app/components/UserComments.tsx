"use client";
import { Suspense, useState } from 'react';
import { RecursiveCommentDetail } from '../model/CommentModels';
import CommentForm from './CommentForm';
import { createCommentLike, removeCommentLike } from '../repositories/CommentRepository';


function UserComment({ data, commentSubmitHandler }: { data: RecursiveCommentDetail, commentSubmitHandler?: (content: FormData, replyTo?: string) => Promise<void> }) {
    const [isReplying, setIsReplying] = useState(false)
    const [liked, setLiked] = useState(false); 
    const [likeCount, setLikeCount] = useState(data.likeCount); 

    const handleLike = async () => {
        const likeData = { userId: data.userId, commentId: data.id }; 
        if (!liked) {
            const success = await createCommentLike(likeData);
            if (success) setLiked(true);
            setLikeCount(likeCount + 1);
        } else {
            const success = await removeCommentLike(likeData);
            if (success) setLiked(false);
            setLikeCount(likeCount - 1);
        }
    };
    return (
        <div className='w-full gap-x-6 grid grid-cols-[auto_1fr] rounded-lg pt-2 px-4'>
            <div className="avatar">
                <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div>
                <span className="font-bold">{data.userName}</span>
                <p>{data.content}</p>
            </div>
            <div className='flex col-start-2 items-center'>
                <span className='text-xs'>{data.timestamp}</span>
                <button className={`btn btn-xs ${liked ? 'btn-primary' : 'btn-ghost'}`} onClick={handleLike}>
                    {liked ? 'Bỏ Thích' : 'Thích'}
                    <span>{likeCount}</span>
                </button>
                <button className='btn btn-xs btn-ghost' onClick={() => setIsReplying(!isReplying)}>Trả lời {data.replies.length > 0 && `(${data.replies.length})`}</button>
            </div>
            {
                isReplying &&
                <Suspense>
                    <div className='col-start-2'>
                        <CommentForm name={`Trả lời ${data.userName}`} submitFunction={commentSubmitHandler ? async (content: FormData) => {
                            await commentSubmitHandler?.(content, data.id)
                            setIsReplying(false)
                        } : undefined} />
                    </div>
                </Suspense>
            }
            {data.replies.length > 0 &&
                <div className='col-start-2 gap-2 grid my-2'>
                    {data.replies.map((reply, index) => (
                        <UserComment key={index} data={reply} commentSubmitHandler={commentSubmitHandler} />
                    ))}
                </div>
            }
        </div>
    )
}

export default function UserComments({ comments, commentSubmitHandler }: { comments: RecursiveCommentDetail[], commentSubmitHandler?: (content: FormData, replyTo?: string) => Promise<void> }) {
    return (
        <div className='col-start-2 grid gap-2 mt-4 hover:[&_>]:bg-slate-950 [&_>*]:transition-background'>
            {comments.reverse().map((comment) => (
                <UserComment key={comment.id} data={comment} commentSubmitHandler={commentSubmitHandler} />
            ))}
        </div>
    )
}
