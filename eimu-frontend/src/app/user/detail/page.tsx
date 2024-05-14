import { InformationUser } from '@/app/components/InformationUser';
import ModalUpdateUser from '@/app/components/ModalUpdateUser';
import MenuAccY from '@/app/components/Sidebar';
import { getUserDetail } from '@/app/repositories/UserRepository';
import { Avatar } from '@nextui-org/react';
import { getServerSession } from "next-auth";
import { authOptions } from '../../../../auth.config';

export default async function UserDetail() {
    const session = await getServerSession(authOptions);
    var userDetail = await getUserDetail(session?.user?.email!);
    return (
        <div className=' text-white'>
            <div className='w-full px-32'>
                <div className='grid justify-center py-10 border-b-2 border-white font-bold text-3xl mb-4'>Thông tin cá nhân</div>
                <div className=' bg-gray-800 rounded-lg'>
                    <div className='mx-10 py-6'>
                        <div className='flex border-b-2 pb-6 items-center justify-between'>
                            <div className='flex items-center'>
                                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large mr-7" />
                                <div className='font-bold text-2xl'>{userDetail?.name}</div>
                            </div>
                            <ModalUpdateUser user={userDetail!} />
                        </div>
                        <InformationUser user={userDetail!} />
                    </div>
                </div>
            </div>
        </div >
    )
}
