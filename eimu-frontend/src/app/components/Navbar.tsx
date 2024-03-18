import React from "react";
const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 px-16 bg-gray-800 text-white z-50">
            {/* Your menu items go here */}
            <ul className="flex items-center justify-between h-full px-4">
                <li className="ml-4"><a href="#"><img src="" alt="" />LOGO</a></li>
                <li className="ml-4"><a href="#">Phim mới</a></li>
                <li className="ml-4"><a href="#">Thể loại</a></li>
                <li className="ml-4"><div>SEARCH</div></li>
                <li className="ml-4"><a href="#">lịch sử</a></li>
                <li className="ml-4"><a href="#">Theo dõi</a></li>
                <li className="ml-4"><a href="#">Login</a></li>
                {/* Add more menu items as needed */}
            </ul>
        </nav>
    )
};
export default Navbar;