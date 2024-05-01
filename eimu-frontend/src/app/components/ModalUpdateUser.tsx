'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Avatar, Input, RadioGroup, Radio } from "@nextui-org/react";
export default function ModalUpdateUser() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
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
                                        <Input type="text" label="Họ tên" placeholder={"userDetail.email"} />
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
    )
}
