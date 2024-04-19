'use client';
import { handleRegister } from "@/app/services/UserService";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function Register() {
    const {pending} = useFormStatus();
    const [errorMessage, dispatch] = useFormState(handleRegister, undefined);

    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    // Error messages
    const [passwordError, setPasswordError] = useState('');
    const [repeatPasswordError, setRepeatPasswordError] = useState('');

    function validatePassword(password: string, repeatPassword: string) {
            if (password.length < 8) {
                setPasswordError("Mật khẩu quá ngắn")
            } else {
                setPasswordError("")
            }
            if (repeatPassword !== password) {
                setRepeatPasswordError("Mật khẩu nhập lại không khớp")
            } else {
                setRepeatPasswordError("")
            }
    }

    return (
        <div className='h-screen w-screen bg-blue-950 bg-opacity-25 backdrop-blur-sm grid place-items-center'>
            <div className="justify-center px-10 py-2 w-full max-w-sm bg-[#001731] rounded-xl shadow-2xl">
                <h2 className="text-center text-2xl leading-8 font-normal tracking-tight text-[#F0FCFF] mt-4 mb-6">
                    Đăng kí tài khoản
                </h2>
                <div className="">
                    <form className="space-y-3" action={dispatch}>
                        <Input name="name" isRequired type='text' label='Tên người dùng' size='sm' classNames={{
                            inputWrapper: [
                                "bg-[#002E62]",
                                "data-[hover=true]:bg-[#00244D]",
                                "group-data-[focus-within=true]:bg-[#00244D]",
                                "group-data-[focus=true]:bg-[#00244D]",
                            ]
                        }} />
                        <Input name="email" isRequired type='email' label='Email' size='sm' classNames={{
                            inputWrapper: [
                                "bg-[#002E62]",
                                "data-[hover=true]:bg-[#00244D]",
                                "group-data-[focus-within=true]:bg-[#00244D]",
                                "group-data-[focus=true]:bg-[#00244D]",
                            ]
                        }}
                        />
                        <Input name="phone" isRequired type='tel' label='Số điện thoại' size='sm' classNames={{
                            inputWrapper: [
                                "bg-[#002E62]",
                                "data-[hover=true]:bg-[#00244D]",
                                "group-data-[focus-within=true]:bg-[#00244D]",
                                "group-data-[focus=true]:bg-[#00244D]",
                            ]
                        }} />
                        <Input
                            name="password"
                            isRequired
                            type='password'
                            label='Mật khẩu'
                            size='sm'
                            classNames={{
                                inputWrapper: [
                                    "bg-[#002E62]",
                                    "data-[hover=true]:bg-[#00244D]",
                                    "group-data-[focus-within=true]:bg-[#00244D]",
                                    "group-data-[focus=true]:bg-[#00244D]",
                                ]
                            }}
                            isInvalid={passwordError !== ''}
                            errorMessage={passwordError}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                validatePassword(e.target.value, repeatPassword)
                            }} />
                        <Input isRequired type='password' label='Nhập lại mật khẩu' size='sm' classNames={{
                            inputWrapper: [
                                "bg-[#002E62]",
                                "data-[hover=true]:bg-[#00244D]",
                                "group-data-[focus-within=true]:bg-[#00244D]",
                                "group-data-[focus=true]:bg-[#00244D]",
                            ]
                        }}
                        isInvalid={repeatPasswordError !== ""}
                        errorMessage={repeatPasswordError}
                        onChange={(e) => {
                            setRepeatPassword(e.target.value);
                            validatePassword(password, e.target.value)
                        }}
                        />
                        {errorMessage && !pending && (
                            <div className='text-danger text-sm'>{errorMessage}</div>
                        )}
                        <button
                            disabled={repeatPasswordError !== "" || passwordError !== ""}
                            type="submit"
                            className={`w-full px-4 py-2 rounded-xl transition-colors ${repeatPasswordError || passwordError ? "cursor-not-allowed bg-blue-900 text-gray-500" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
                        >
                            Đăng ký
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-cyan-50 mb-4">
                        Bạn đã có tài khoản rồi?{' '}
                        <a href="../login" className="font-semibold leading-6 text-blue-400">
                            Đăng nhập
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
