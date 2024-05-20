"use client";
import { Avatar } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import { useRef } from 'react';

export default function CommentForm({ name, avatarUrl, submitFunction }: { name: string, avatarUrl?: string, submitFunction?: (content: FormData, replyTo?: string) => Promise<void> }) {

    const formRef = useRef<HTMLFormElement>(null);
    return (
        <div className='w-full gap-x-6 grid grid-cols-[auto_1fr]'>
            <div className="label col-start-2">
                <span className="label-text font-bold">{name}</span>
            </div>
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-16 h-16" />
            <form ref={formRef} action={(formData) => {
                    submitFunction?.(formData).then(() => formRef.current?.reset())
                }} className='flex-grow gap-2 flex flex-col'>
                <label className="form-control">
                    <textarea
                        placeholder="Nhập nội dung bình luận..."
                        className="textarea"
                        name='content'
                        minLength={8}
                        required
                    />
                </label>
                {(
                    submitFunction
                    ? <button type='submit' className='btn float-right btn-md self-end btn-primary'>
                        Gửi
                    </button>
                    : <button onClick={() => signIn()} className='btn float-right btn-md self-end btn-secondary'>
                    Bạn cần đăng nhập để bình luận
                </button>
                )}
            </form>
        </div>
    )
}
