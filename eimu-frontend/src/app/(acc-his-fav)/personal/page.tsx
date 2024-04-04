import MenuAccY from '@/app/components/MenuAccY'
import { Avatar, Button, useDisclosure, Input } from '@nextui-org/react'
import React from 'react'
import { Select, SelectItem } from "@nextui-org/react";


export default function page() {
    return (
        <div className='flex text-white'>
            <MenuAccY />
            <div className='w-full px-32'>
                <div className='grid justify-center py-10 border-b-2 border-white font-bold text-3xl mb-4'>Thông tin cá nhân</div>
                <div className=' bg-gray-800 rounded-lg'>
                    <div className='mx-10 py-6'>
                        <div className='flex border-b-2 pb-6 items-center justify-between'>
                            <div className='flex items-center'>
                                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large mr-7" />
                                <div className='font-bold text-2xl'>Tiến</div>
                            </div>
                            <label htmlFor="my_modal_6" className="btn">Chỉnh sửa</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                            <div className="modal" role="dialog">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg mb-5">Chỉnh sửa thông tin cá nhân</h3>
                                    <form action="">
                                        <div className='mb-5'>
                                            <label className='mr-5' htmlFor="avatar">Tải ảnh đại diện: </label>
                                            <input type="file" name='avatar' id='avatar' className="file-input w-full max-w-xs" />
                                        </div>
                                        <div className=" w-full mb-5">
                                            <Input type="text" label="Họ tên" placeholder="Lê Quang Tiến" />
                                        </div>
                                        <div className=" w-full mb-5">
                                            <Input type="date" label="Ngày sinh" placeholder="" />
                                        </div>
                                        <div className=" w-full mb-5">
                                            <label className="form-control w-full">
                                                <div className="label">
                                                    <span className="label-text text-white">Giới tính</span>
                                                </div>
                                                <select className="select select-bordered">
                                                    <option disabled selected>Chọn giới tính</option>
                                                    <option>Nam</option>
                                                    <option>Nữ</option>
                                                </select>
                                            </label>
                                        </div>
                                        <div className=" w-full mb-5">
                                            <Input type="Email" label="Email" placeholder="LeQuangTien@gmail.com" />
                                        </div>
                                        <div className=" w-full mb-5">
                                            <Input type="tel" label="Số điện thoại" placeholder="0935964574" />
                                        </div>
                                    </form>
                                    <div className="modal-action flex items-center">
                                        <label htmlFor="my_modal_6" className="btn">Hủy</label>
                                        <label className="btn">Chỉnh sửa</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex border-b-2 py-5'>
                            <div className='mr-5 text-xl'>Họ tên:</div>
                            <div className='text-xl'>Lê Quang Tiến</div>
                        </div>
                        <div className='flex border-b-2 py-5'>
                            <div className='mr-5 text-xl'>Ngày sinh:</div>
                            <div className='text-xl'>10/05/2003</div>
                        </div>
                        <div className='flex border-b-2 py-5'>
                            <div className='mr-5 text-xl'>Giới tính:</div>
                            <div className='text-xl'>Nam</div>
                        </div>
                        <div className='flex border-b-2 py-5'>
                            <div className='mr-5 text-xl'>Email:</div>
                            <div className='text-xl'>LeQuangTien@gmail.com</div>
                        </div>
                        <div className='flex py-5'>
                            <div className='mr-5 text-xl'>Số điện thoại:</div>
                            <div className='text-xl'>0935964574</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
