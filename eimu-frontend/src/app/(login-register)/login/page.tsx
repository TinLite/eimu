'use client';
import '@/app/globals.css';
import { Input } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
export default function Login({
    searchParams
}: {
    searchParams: {
        callbackUrl?: string,
        error?: string
    }
}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    var loginErrorMessage : string | undefined
    if (searchParams.error)
        switch (searchParams.error) {
            default:
                loginErrorMessage = "Sai tài khoản hoặc mật khẩu"
        }
    return (
        <div className='h-screen w-screen bg-blue-950 bg-opacity-25 backdrop-blur-sm grid place-items-center'>
            
            <div className="justify-center w-full max-w-sm bg-[#001731] rounded-xl shadow-2xl">
            {
                    loginErrorMessage &&
                    (
                        <div className='px-2 py-4 bg-red-700 border-b border-red-500 rounded-tl-xl rounded-tr-xl text-center'>{loginErrorMessage}</div>
                    )
                }
                <div className='px-10 py-2'>
                <h2 className="text-center text-2xl leading-8 font-normal tracking-tight text-[#F0FCFF] mt-4 mb-6">
                    Đăng nhập
                </h2>
                <div className=""
                >
                    <form className="space-y-3" onSubmit={async (e) => {
                        e.preventDefault()
                        await signIn("credentials", {
                            username: username,
                            password: password,
                            callbackUrl: searchParams.callbackUrl ?? "/" 
                        });
                    }}>
                        <Input type='text' name='username' label='Tên người dùng/Email' size='sm' isRequired classNames={{
                            inputWrapper: [
                                "bg-[#002E62]",
                                "data-[hover=true]:bg-[#00244D]",
                                "group-data-[focus-within=true]:bg-[#00244D]",
                                "group-data-[focus=true]:bg-[#00244D]",
                            ]
                        }} onChange={(e) => {
                            setUsername(e.target.value)
                        }}/>
                        <Input type='password' label='Mật khẩu' name='password' size='sm' isRequired classNames={{
                            inputWrapper: [
                                "bg-[#002E62]",
                                "data-[hover=true]:bg-[#00244D]",
                                "group-data-[focus-within=true]:bg-[#00244D]",
                                "group-data-[focus=true]:bg-[#00244D]",
                            ]
                        }} onChange={(e) => {
                            setPassword(e.target.value);
                        }}/>
                        <button
                            type="submit"
                            className={`w-full px-4 py-2 bg-blue-500 rounded-xl text-white hover:bg-blue-600 transition-colors`}
                        >
                            Đăng nhập
                        </button>
                    </form>
                    <p className="mt-4 text-center text-sm text-cyan-50 mb-4 space-x-1">
                        <span>Bạn chưa có tài khoản?</span>
                        <a href="../register" className="font-semibold leading-6 text-blue-400">
                            Tạo tài khoản
                        </a>
                    </p>
                </div>
                </div>
                
            </div>
        </div>
    )
}
