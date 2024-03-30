
export default function Register() {
    return (
        <div className='h-screen w-screen bg-blue-950 bg-opacity-25 backdrop-blur-sm grid place-items-center'>
            <div className="justify-center px-10 py-2 w-full max-w-sm bg-[#001731] rounded-xl shadow-2xl">
                <h2 className="text-center text-2xl leading-8 font-normal tracking-tight text-[#F0FCFF] mt-4 mb-6">
                    Đăng kí tài khoản
                </h2>
                <div className="">
                    <form className="space-y-3" action="#" method="POST">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            className="block w-full bg-[#002E62] px-4 rounded-xl border-0 py-2 placeholder:text-cyan-50 text-white outline-none focus:outline-blue-500 transition-all -outline-offset-2"
                            placeholder="Tên của bạn"
                        />
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full bg-[#002E62] px-4 rounded-xl border-0 py-2 placeholder:text-cyan-50 text-white outline-none focus:outline-blue-500 transition-all -outline-offset-2"
                            placeholder="Email"
                        />
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            minLength={10}
                            maxLength={11}
                            required
                            className="block w-full bg-[#002E62] px-4 rounded-xl border-0 py-2 placeholder:text-cyan-50 text-white outline-none focus:outline-blue-500 transition-all -outline-offset-2"
                            placeholder="Số điện thoại"
                        />
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full bg-[#002E62] px-4 rounded-xl border-0 py-2 placeholder:text-cyan-50 text-white outline-none focus:outline-blue-500 transition-all -outline-offset-2"
                            placeholder="Mật khẩu"
                        />
                        <input
                            id="repeat-password"
                            // name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full bg-[#002E62] px-4 rounded-xl border-0 py-2 placeholder:text-cyan-50 text-white outline-none focus:outline-blue-500 transition-all -outline-offset-2"
                            placeholder="Nhập lại mật khẩu"
                        />
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-500 rounded-xl text-white hover:bg-blue-600 transition-colors"
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
