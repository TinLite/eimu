import { InformationUser } from '@/app/components/InformationUser';
import ModalUpdateUser from '@/app/components/ModalUpdateUser';
import { getUserDetail } from '@/app/repositories/UserRepository';
import { getServerSession } from "next-auth";
import { authOptions } from '../../../../auth.config';

export default async function UserDetail() {
    const session = await getServerSession(authOptions);
    const userDetail = await getUserDetail(session?.user?.email!);
    return (
        <InformationUser user={userDetail!}>
            <ModalUpdateUser user={userDetail!} />
        </InformationUser>
    )
}
