'use client';
import { signIn } from "next-auth/react";

export function LoginCommentButton() {
    return (
        <button onClick={() => {
            signIn();
        }} className="px-4 py-5 rounded-md bg-blue-50 text-[#006FEE] flex items-center w-full justify-center">

            <span className="ml-1">Đăng nhập để bình luận</span>
        </button>);
}