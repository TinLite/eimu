"use client";
import { signIn } from 'next-auth/react';
import { Suspense, useState } from 'react';
import { RecursiveCommentDetail } from '../model/CommentModels';
import CommentForm from './CommentForm';


function UserComment({ currentUserId, data, commentSubmitHandler, commentLikeHandler }: { currentUserId?: string, data: RecursiveCommentDetail, commentSubmitHandler?: (content: FormData, replyTo?: string) => Promise<void>, commentLikeHandler?: (commentId: string) => Promise<void> }) {
    const [isReplying, setIsReplying] = useState(false)
    const isLiked = data.likes.includes(currentUserId ?? 'lmao')
    return (
        <div className='w-full gap-x-6 grid grid-cols-[auto_1fr] rounded-lg pt-2 px-4'>
            <div className="avatar">
                <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div>
                <div className="">
                    <span className='font-bold'>{data.userName}</span>
                    <span className='ml-2 text-xs'>{new Date(parseInt(data.timestamp)).toLocaleString()}</span>
                </div>
                <p>{data.content}</p>
            </div>
            <div className='col-start-2 flex items-center gap-2'>
                {
                    commentLikeHandler
                        ?
                        <button className={`btn btn-xs ${isLiked ? `btn-primary` : `btn-ghost`}`} onClick={
                            () => commentLikeHandler(data.id)
                        }>
                            {isLiked ? 'Bỏ Thích' : 'Thích'}
                        </button>
                        :
                        <div className='tooltip' data-tip='Bạn cần đăng nhập để thao tác thích comment'>
                            <button className={`btn btn-xs btn-ghost`} onClick={
                                () => signIn()
                            }>
                                Thích
                            </button>
                        </div>
                }

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
                        <UserComment key={index} data={reply} commentSubmitHandler={commentSubmitHandler} commentLikeHandler={commentLikeHandler} currentUserId={currentUserId} />
                    ))}
                </div>
            }
        </div>
    )
}

export default function UserComments({ currentUserId, comments, commentSubmitHandler, commentLikeHandler }: { currentUserId?: string, comments: RecursiveCommentDetail[], commentSubmitHandler?: (content: FormData, replyTo?: string) => Promise<void>, commentLikeHandler?: (commentId: string) => Promise<void> }) {
    return (
        <div className='col-start-2 grid gap-2 mt-4 hover:[&_>]:bg-slate-950 [&_>*]:transition-background'>
            {comments.reverse().map((comment) => (
                <UserComment currentUserId={currentUserId} key={comment.id} data={comment} commentSubmitHandler={commentSubmitHandler} commentLikeHandler={commentLikeHandler} />
            ))}
        </div>
    )
}
