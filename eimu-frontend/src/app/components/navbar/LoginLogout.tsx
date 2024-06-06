'use client';

import { UserDetail } from "@/app/model/UserModels";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from "@nextui-org/react";
import { signIn, signOut } from "next-auth/react";

export function LoginButton() {
    return (
        <button onClick={() => {
            signIn();
        }} className="px-4 py-2 rounded-md bg-blue-50 text-[#006FEE] flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
            </svg>
            <span className="ml-1">Đăng nhập</span>
        </button>);
}

export function UserNavComponent({
    user
}: {
    user: UserDetail
}) {
    return (
        <Dropdown backdrop="opaque">
            <DropdownTrigger>
                <User
                    name={user.name}
                    className="cursor-pointer"
                />
            </DropdownTrigger>
            <DropdownMenu>
                <DropdownItem
                    startContent={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                    </svg>
                    }
                    color="primary"
                    href="/user/detail">
                    Thông tin cá nhân
                </DropdownItem>
                <DropdownItem>
                    Tuỳ chỉnh
                </DropdownItem>
                <DropdownItem
                    onClick={(e) => { signOut() }}
                    className="text-danger"
                    color="danger"
                    startContent={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                    </svg>}>
                    Đăng xuất
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>

    );
}
