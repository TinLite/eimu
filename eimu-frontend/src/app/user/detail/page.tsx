import { InformationUser } from '@/app/components/InformationUser';
import ModalUpdateUser from '@/app/components/ModalUpdateUser';
import { getUserDetail, updateUser } from '@/app/repositories/UserRepository';
import { getServerSession } from "next-auth";
import { z } from 'zod';
import { authOptions } from '../../../../auth.config';

export default async function UserDetail() {
    const session = await getServerSession(authOptions);
    const userDetail = await getUserDetail(session?.user?.email!);


    const updateHandle = async (formData: FormData) => {
        "use server";
        if (!userDetail) {
            return;
        }
        const updateValidator = z.object({
            name: z.string(),
            email: z.string(),
            phone: z.string()
        })
        if (!formData.get("name") && !formData.get("email") && !formData.get("phone")) {
            return;
        }

        const result = updateValidator.safeParse({
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone')
        });

        if (!result.success) {
            return;
        } else {
            return await updateUser({
                id: userDetail.id!,
                name: result.data.name,
                email: result.data.email,
                phone: result.data.phone
            });
        }
    }
    return (

        <InformationUser user={userDetail!}>
            <ModalUpdateUser updateHandler={updateHandle} user={userDetail!} />
        </InformationUser>
    )
}
