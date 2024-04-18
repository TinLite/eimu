'use client'
import MenuAccY from '@/app/components/Sidebar'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Avatar, Input } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";


export default function UserDetail() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
                            <>
                                <Button onPress={onOpen}>Chỉnh sửa</Button>
                                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                                    <ModalContent>
                                        {(onClose) => (
                                            <>
                                                <ModalHeader className="flex flex-col gap-1">Chỉnh sửa thông tin cá nhân</ModalHeader>
                                                <ModalBody>
                                                    <form action="" method='POST'>
                                                        <div className='mb-5'>
                                                            <label className='mr-5' htmlFor="avatar">Tải ảnh đại diện: </label>
                                                            <input type="file" name='avatar' id='avatar' className=" w-full max-w-xs" />
                                                        </div>
                                                        <div className=" w-full mb-5">
                                                            <Input type="text" label="Họ tên" placeholder="Lê Quang Tiến" />
                                                        </div>
                                                        <div className=" w-full mb-5">
                                                            <Input type="date" label="Ngày sinh" placeholder="" />
                                                        </div>
                                                        <RadioGroup
                                                            label="Chọn giới tính"
                                                            orientation="horizontal"
                                                            className='mb-5'
                                                        >
                                                            <Radio value="nam">Nam</Radio>
                                                            <Radio value="nu">Nữ</Radio>
                                                        </RadioGroup>
                                                        <div className=" w-full mb-5">
                                                            <Input type="Email" label="Email" placeholder="LeQuangTien@gmail.com" />
                                                        </div>
                                                        <div className=" w-full mb-5">
                                                            <Input type="tel" label="Số điện thoại" placeholder="0935964574" />
                                                        </div>
                                                    </form>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button color="danger" variant="light" onPress={onClose}>
                                                        Close
                                                    </Button>
                                                    <Button color="primary" onPress={onClose}>
                                                        Chỉnh sửa
                                                    </Button>
                                                </ModalFooter>
                                            </>
                                        )}
                                    </ModalContent>
                                </Modal>
                            </>
                        </div>
                        <div className='flex border-b-2 py-5'>
                            <div className='mr-5 '>Họ tên:</div>
                            <div className=''>Lê Quang Tiến</div>
                        </div>
                        <div className='flex border-b-2 py-5'>
                            <div className='mr-5 '>Ngày sinh:</div>
                            <div className=''>10/05/2003</div>
                        </div>
                        <div className='flex border-b-2 py-5'>
                            <div className='mr-5 '>Giới tính:</div>
                            <div className=''>Nam</div>
                        </div>
                        <div className='flex border-b-2 py-5'>
                            <div className='mr-5 '>Email:</div>
                            <div className=''>LeQuangTien@gmail.com</div>
                        </div>
                        <div className='flex py-5'>
                            <div className='mr-5 '>Số điện thoại:</div>
                            <div className=''>0935964574</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
