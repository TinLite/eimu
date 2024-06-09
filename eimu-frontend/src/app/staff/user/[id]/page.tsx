import { getUserDetail } from "@/app/repositories/UserRepository";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { authOptions } from "../../../../../auth.config";
import StaffUserDetail from "./StaffUserDetail";

export default async function Page({params} : {params: {id: string}}) {
    const user = await getUserDetail(params.id)

    if (!user) {
        return notFound()
    }
    const session = await getServerSession(authOptions);
    return (
        <StaffUserDetail user={user} currentUser={session?.user?.email ?? undefined} />
    )
}