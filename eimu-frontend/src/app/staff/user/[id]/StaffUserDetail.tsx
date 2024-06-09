"use client";
import { InformationUser } from "@/app/components/InformationUser";
import { UserDetail, UserFlag } from "@/app/model/UserModels";
import { updateFlags, updateUser } from "@/app/repositories/UserRepository";
import { useRouter } from "next/navigation";

function ContextButtons({ user }: { user: UserDetail }) {
    const router = useRouter()
    return (<div className="grid gap-2 place-items-end">
        {
            !user.flags.includes(UserFlag.BANNED_LOGIN)
            ?
            <button type="button" className="btn btn-warning" onClick={() => updateFlags(user.id, [...user.flags, UserFlag.BANNED_LOGIN]).then(() => router.refresh())}>Ban người dùng</button>
            :
            <button type="button" className="btn btn-error" onClick={() => updateFlags(user.id, user.flags.filter((v) => v != UserFlag.BANNED_LOGIN)).then(() => router.refresh())}>Bỏ ban người dùng</button>
        }
        {
            user.role == "default"
            ?
            <button type="button" className="btn btn-warning" onClick={() => updateUser({id: user.id, role: "admin"}).then(() => router.refresh())}>Cấp vai trò admin</button>
            :
            <button type="button" className="btn btn-error" onClick={() => updateUser({id: user.id, role: "default"}).then(() => router.refresh())}>Huỷ quyền admin</button>
        }
    </div>)
}

export default function StaffUserDetail({ user, currentUser }: { user: UserDetail, currentUser?: string }) {
    if (!user.flags)
        user.flags = []
    return (
        <InformationUser user={user} >
            {(user.id == currentUser) ?
                <div>Bạn không thể tự xử chính mình</div>
                : <ContextButtons user={user} />
            }
        </InformationUser>
    )
}