"use client";

import { UserDetail, UserFlag } from "@/app/model/UserModels";
import { updateFlags } from "@/app/repositories/UserRepository";
import { useRouter } from "next/navigation";

export default function UserTable({ userList, userId }: { userList: UserDetail[], userId: string }) {
    const router = useRouter();
    return (
        <div className="h-min">
            <table className="table table-pin-rows table-pin-cols">
                <thead>
                    <tr>
                        {/* <th></th> */}
                        <th></th>
                        <th>Người dùng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map(e => (
                        <tr className="hover [&_.desc]:hover:text-cyan-600" key={e.id}>
                            {/* <td><input type="checkbox" className="checkbox" /></td> */}
                            <td>
                                <div className="avatar">
                                    <div className="rounded-xl w-4">
                                        {/* <img src={e.thumbUrl} /> */}
                                    </div>
                                </div>
                            </td>
                            <td>{e.name}
                                {e.id == userId && <span className="ml-2 badge badge-warning">Tài khoản của bạn</span>}
                                {e.flags.includes(UserFlag.BANNED_LOGIN) && <span className="ml-2 badge badge-error text-xs">Unactivated</span>}
                                <br />
                                <span className="desc text-cyan-900 text-xs">{e.email}</span>
                            </td>
                            <td className="flex">
                                <a href={`/staff/user/${e.id}`} className="btn btn-xs btn-outline text-primary">
                                    Xem chi tiết
                                </a>
                                {e.id != userId &&
                                    (!e.flags.includes(UserFlag.BANNED_LOGIN)
                                        ? <button type="button" className="btn btn-xs btn-outline ml-2 btn-error" onClick={() => updateFlags(e.id, [...e.flags, UserFlag.BANNED_LOGIN]).then(() => router.refresh())}>Unactivate</button>
                                        : <button type="button" className="btn btn-xs btn-outline ml-2 btn-warning" onClick={() => updateFlags(e.id, e.flags.filter((v) => v != UserFlag.BANNED_LOGIN)).then(() => router.refresh())}>Activate</button>
                                    )
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}