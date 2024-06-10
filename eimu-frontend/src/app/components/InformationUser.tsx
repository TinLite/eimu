'use client'
import { UserDetail } from "@/app/model/UserModels";
import { Avatar } from "@nextui-org/react";

export function InformationUser({
    user,
    children
}: {
    user: UserDetail,
    children?: React.ReactNode
}) {
    return (<div className='text-white'>
        <div style={{
            background: 'center / cover no-repeat url("https://s4.anilist.co/file/anilistcdn/media/anime/banner/127230-o8IRwCGVr9KW.jpg")',
        }}
            className='h-64 relative -z-10'>
            <div className='h-64 w-full bg-gradient-to-t from-black absolute bottom-0'></div>
        </div>
        <div className='max-w-screen-lg mx-auto -mt-24'>
            {/* <div className='grid justify-center py-10 border-b-2 border-white font-bold text-3xl mb-4'>Thông tin cá nhân</div> */}
            <div className=''>
                <div className='mx-10 py-6'>
                    <div className='flex items-center mb-6'>
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large mr-7" />
                        <div className='font-bold text-2xl'>{user.name}
                            { user.role == 'admin' &&
                            <span className="badge badge-warning">Admin</span>
                            }
                        </div>
                    </div>
                    <div className='text-xl my-4 font-bold'>Thông tin cá nhân</div>
                    <div className="relative">
                        <div className="grid grid-cols-[auto_1fr] [&_>_*]:px-4 [&_>_*]:py-2">
                            <div>Ngày sinh:</div>
                            <div>Chưa cập nhật</div>
                            <div>Giới tính:</div>
                            <div>Chưa cập nhật</div>
                            <div>Email:</div>
                            <div>{user.email}</div>
                            <div>Số điện thoại:</div>
                            <div>{user.phone}</div>
                        </div>
                        <div className='absolute top-0 right-0'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
    )
}
