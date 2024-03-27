
export default function Login() {
    return (
        <div className="fixed justify-center py-10 px-10  w-[450px] -translate-x-1/2 -translate-y-1/2 bg-[#001731] top-1/2 left-1/2 rounded-lg">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-[#F0FCFF]">
                    Đăng nhập
                </h2>
            </div>

            <div className="mt-14 ">
                <form className="space-y-6" action="#" method="POST">
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full px-3 rounded-md border-0 py-1.5 text-[#E6F1FE] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[#002E62]"
                            placeholder="Tên người dùng"
                        />
                    </div>

                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full px-3 rounded-md border-0 py-1.5 text-[#E6F1FE] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[#002E62]"
                            placeholder="Mật khẩu"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-[#338EF7] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Đăng nhập
                        </button>
                    </div>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Bạn chưa có tài khoản?{' '}
                    <a href="../register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        đăng ký
                    </a>
                </p>
            </div>
        </div>
    )
}
