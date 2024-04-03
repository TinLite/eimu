import React from 'react'
import { Avatar, Button, Textarea } from '@nextui-org/react'
import Link from 'next/link'

export default function UserComments() {
    return (
        <div>
            <div className='flex items-center'>
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-16 h-16 mr-6" />
                <label className="form-control">
                    <div className="label">
                        <span className="label-text font-bold">TÊN LÀ GÌ Ạ</span>
                    </div>
                    <div className='bg-white max-w-[1000px] rounded-2xl px-5 py-2 text-black'>
                        <div className='mb-2'>Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo</div>
                    </div>
                </label >
            </div>
            <div className="label-text font-bold flex justify-center mx-24 mt-3">
                <span className='mr-5 ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                    </svg>
                </span>
                <details className="collapse w-full">
                    <summary className="collapse-title p-1">phản hồi</summary>
                    <div className="collapse-content w-full">
                        <div className='flex items-center w-max'>
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-16 h-16 mr-6" />
                            <form action="">
                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text font-bold">Tên của bạn</span>
                                    </div>
                                    <Textarea
                                        placeholder="Nhập nội dung bình luận..."
                                        className="w-[750px]  border-b-8 border-sky-900 rounded-2xl"
                                        maxLength={200}
                                    />
                                </label>
                                <Button color="primary" className='float-right'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                    </svg>
                                </Button>
                            </form>
                        </div>
                    </div>
                </details>
            </div>
            <div className="label-text flex">
                <details className="collapse mx-24">
                    <summary className="collapse-title text-xl font-medium flex">
                        <span>Xem thêm bình luận</span>
                    </summary>
                    <div className="collapse-content w-full">
                        <div className='flex items-center'>
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-16 h-16 mr-6" />
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">TÊN LÀ GÌ Ạ</span>
                                </div>
                                <div className='bg-white text-black max-w-[1000px] rounded-2xl px-5 py-2'>
                                    <div className='mb-2'>Mẹ Mày Ngu Mẹ Mày Ngu Mẹ Mày Ngu Mẹ Mày Ngu Mẹ Mày Ngu Mẹ Mày Ngu Mẹ Mày Ngu Mẹ Mày Ngu Mẹ Mày Ngu Mẹ Mày Ngu Mẹ Mày Ngu Mẹ Mày Ngu Mẹ Mày Ngu</div>
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
                                </div>
                            </label >
                        </div>
                    </div>
                </details>
            </div>
        </div>
    )
}
