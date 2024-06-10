import UserTable from "@/app/components/staff/TableUser";
import { getUserList } from "@/app/repositories/UserRepository";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../auth.config";

export default async function user() {
    const users = await getUserList();
    const session = await getServerSession(authOptions);
    return (
        <div className="max-w-3xl my-4 mx-auto">
            <UserTable userList={users.data} userId={session!.user!.email!} />
        </div>
    )
}