'use client';
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio } from "@nextui-org/react";
const colors = ["default", "primary", "secondary", "success", "warning", "danger"];

export default function HistoryTableList() {
    const [selectedColor, setSelectedColor] = React.useState("default");
    return (
        <div className='w-full px-32'>
            <div className='grid justify-center py-10 border-b-2 border-white font-bold text-3xl mb-4'>Lịch sử xem</div>
            <div className="flex flex-col gap-3 text-black">
                <Table
                    bgcolor={selectedColor}
                    selectionMode="multiple"
                    defaultSelectedKeys={["2", "3"]}
                    aria-label="Example static collection table"
                >
                    <TableHeader>
                        <TableColumn>STT</TableColumn>
                        <TableColumn>Poster</TableColumn>
                        <TableColumn>Tên Phim</TableColumn>
                        <TableColumn>Năm</TableColumn>
                        <TableColumn>Quốc gia</TableColumn>
                        <TableColumn>tình trạng</TableColumn>
                        <TableColumn>Số tập</TableColumn>
                        <TableColumn>
                            <button className="btn btn-ghost btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>1</TableCell>
                            <TableCell>
                                <div
                                    className="aspect-[2/3] grid place-items-center w-14"
                                    style={{ "background": `center / cover no-repeat url('https://phim.nguonc.com/public/images/Film/140627.jpg')` }}>
                                </div>
                            </TableCell>
                            <TableCell>Sengoku Youko</TableCell>
                            <TableCell>2023</TableCell>
                            <TableCell>Nhật Bản</TableCell>
                            <TableCell>Chưa hoàn thành</TableCell>
                            <TableCell>12</TableCell>
                            <TableCell>
                                <button className="btn btn-ghost btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </TableCell>
                        </TableRow>
                        <TableRow key="2">
                            <TableCell>1</TableCell>
                            <TableCell>
                                <div
                                    className="aspect-[2/3] grid place-items-center w-14"
                                    style={{ "background": `center / cover no-repeat url('https://phim.nguonc.com/public/images/Film/140627.jpg')` }}>
                                </div>
                            </TableCell>
                            <TableCell>Sengoku Youko</TableCell>
                            <TableCell>2023</TableCell>
                            <TableCell>Nhật Bản</TableCell>
                            <TableCell>Chưa hoàn thành</TableCell>
                            <TableCell>12</TableCell>
                            <TableCell>
                                <button className="btn btn-ghost btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
        // <div className='w-full px-32'>
        //     <div className='grid justify-center py-10 border-b-2 border-white font-bold text-3xl mb-4'>Lịch sử xem</div>
        //     <div className="overflow-x-auto">
        //         <table className="table">
        //             {/* head */}
        //             <thead>
        //                 <tr>
        //                     <th>
        //                         <label>
        //                             <input type="checkbox" className="checkbox" />
        //                         </label>
        //                     </th>
        //                     <th>STT</th>
        //                     <th>Poster</th>
        //                     <th>Tên phim</th>
        //                     <th>Năm phát hành</th>
        //                     <th>Tổng số tập</th>
        //                     <th>Đạo diễn</th>
        //                     <th>
        //                         <button className="btn btn-ghost btn-sm">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
        //                                 <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        //                             </svg>
        //                         </button>
        //                     </th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {/* row 1 */}
        //                 <tr>
        //                     <th>
        //                         <label>
        //                             <input type="checkbox" className="checkbox" />
        //                         </label>
        //                     </th>
        //                     <td>
        //                         <div className="flex items-center gap-3">
        //                             1
        //                         </div>
        //                     </td>
        //                     <td>
        //                         <div className="avatar">
        //                             <div className="mask mask-squircle w-12 h-12">
        //                                 <img src="https://phim.nguonc.com/public/images/Film/3068.jpg" alt="Avatar Tailwind CSS Component" />
        //                             </div>
        //                         </div>
        //                     </td>
        //                     <td>
        //                         <div>
        //                             <div className="font-bold">Bạn Gái Thuê</div>
        //                             <div className="text-sm opacity-50">Kanojo, Okarishimasu, Rent-a-Girlfriend,Id like to Borrow a Girlfriend, Kanokari </div>
        //                         </div>
        //                     </td>
        //                     <td>
        //                         2003
        //                     </td>
        //                     <td>
        //                         12
        //                     </td>
        //                     <td>
        //                         Đang cập nhật
        //                     </td>
        //                     <th>
        //                         <button className="btn btn-ghost btn-sm">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
        //                                 <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        //                             </svg>
        //                         </button>
        //                     </th>
        //                 </tr>
        //                 {/* row 2 */}
        //                 <tr>
        //                     <th>
        //                         <label>
        //                             <input type="checkbox" className="checkbox" />
        //                         </label>
        //                     </th>
        //                     <td>
        //                         <div className="flex items-center gap-3">
        //                             1
        //                         </div>
        //                     </td>
        //                     <td>
        //                         <div className="avatar">
        //                             <div className="mask mask-squircle w-12 h-12">
        //                                 <img src="https://phim.nguonc.com/public/images/Film/3068.jpg" alt="Avatar Tailwind CSS Component" />
        //                             </div>
        //                         </div>
        //                     </td>
        //                     <td>
        //                         <div>
        //                             <div className="font-bold">Bạn Gái Thuê</div>
        //                             <div className="text-sm opacity-50">Kanojo, Okarishimasu, Rent-a-Girlfriend, Id like to Borrow a Girlfriend, Kanokari </div>
        //                         </div>
        //                     </td>
        //                     <td>
        //                         2003
        //                     </td>
        //                     <td>
        //                         12
        //                     </td>
        //                     <td>
        //                         Đang cập nhật
        //                     </td>
        //                     <th>
        //                         <button className="btn btn-ghost btn-sm">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
        //                                 <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        //                             </svg>
        //                         </button>
        //                     </th>
        //                 </tr>
        //                 {/* row 3 */}
        //                 <tr>
        //                     <th>
        //                         <label>
        //                             <input type="checkbox" className="checkbox" />
        //                         </label>
        //                     </th>
        //                     <td>
        //                         <div className="flex items-center gap-3">
        //                             1
        //                         </div>
        //                     </td>
        //                     <td>
        //                         <div className="avatar">
        //                             <div className="mask mask-squircle w-12 h-12">
        //                                 <img src="https://phim.nguonc.com/public/images/Film/3068.jpg" alt="Avatar Tailwind CSS Component" />
        //                             </div>
        //                         </div>
        //                     </td>
        //                     <td>
        //                         <div>
        //                             <div className="font-bold">Bạn Gái Thuê</div>
        //                             <div className="text-sm opacity-50">Kanojo, Okarishimasu, Rent-a-Girlfriend, Id like to Borrow a Girlfriend, Kanokari </div>
        //                         </div>
        //                     </td>
        //                     <td>
        //                         2003
        //                     </td>
        //                     <td>
        //                         12
        //                     </td>
        //                     <td>
        //                         Đang cập nhật
        //                     </td>
        //                     <th>
        //                         <button className="btn btn-ghost btn-sm">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
        //                                 <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        //                             </svg>
        //                         </button>
        //                     </th>
        //                 </tr>
        //                 {/* row 4 */}
        //                 <tr>
        //                     <th>
        //                         <label>
        //                             <input type="checkbox" className="checkbox" />
        //                         </label>
        //                     </th>
        //                     <td>
        //                         <div className="flex items-center gap-3">
        //                             1
        //                         </div>
        //                     </td>
        //                     <td>
        //                         <div className="avatar">
        //                             <div className="mask mask-squircle w-12 h-12">
        //                                 <img src="https://phim.nguonc.com/public/images/Film/3068.jpg" alt="Avatar Tailwind CSS Component" />
        //                             </div>
        //                         </div>
        //                     </td>
        //                     <td>
        //                         <div>
        //                             <div className="font-bold">Bạn Gái Thuê</div>
        //                             <div className="text-sm opacity-50">Kanojo, Okarishimasu, Rent-a-Girlfriend, Id like to Borrow a Girlfriend, Kanokari </div>
        //                         </div>
        //                     </td>
        //                     <td>
        //                         2003
        //                     </td>
        //                     <td>
        //                         12
        //                     </td>
        //                     <td>
        //                         Đang cập nhật
        //                     </td>
        //                     <th>
        //                         <button className="btn btn-ghost btn-sm">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
        //                                 <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        //                             </svg>
        //                         </button>
        //                     </th>
        //                 </tr>

        //             </tbody>
        //             {/* foot */}
        //             <tfoot>
        //                 <tr>
        //                     <th></th>
        //                     <th>STT</th>
        //                     <th>Poster</th>
        //                     <th>Tên phim</th>
        //                     <th>Năm phát hành</th>
        //                     <th>Tổng số tập</th>
        //                     <th>Đạo diễn</th>
        //                     <th></th>
        //                 </tr>
        //             </tfoot>

        //         </table>
        //     </div>
        // </div>
    )
}
