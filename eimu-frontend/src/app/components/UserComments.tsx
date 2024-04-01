import React from 'react'
import { Avatar } from '@nextui-org/react'
import Link from 'next/link'

export default function UserComments() {
    return (
        <div className='flex items-center'>
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-16 h-16 mr-6" />
            <label className="form-control">
                <div className="label">
                    <span className="label-text font-bold">TÊN LÀ GÌ Ạ</span>
                </div>
                <div className='bg-sky-900 border-8 max-w-[1200px] rounded-2xl px-5 py-2'>
                    <div className='mb-2'>Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo</div>
                </div>
                <div className="label">
                    <div className="label-text font-bold flex justify-center">
                        <span className='mr-5 ml-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>
                        </span>
                        <span><Link href={''}>phản hồi</Link></span>
                    </div>
                    <div className="label-text font-bold flex">
                        <span><Link href={''}>Xem thêm bình luận</Link></span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
            </label >
        </div >
    )
}
