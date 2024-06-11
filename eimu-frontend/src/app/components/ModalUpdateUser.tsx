'use client'
import { UserDetail } from "@/app/model/UserModels";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
export default function ModalUpdateUser({
    user,
    updateHandler
}: {
    user: UserDetail,
    updateHandler: (formData: FormData) => Promise<void>
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const router = useRouter();
    return (
        <>
            <Button onPress={onOpen}>Chỉnh sửa</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form action={(formData) => updateHandler(formData).then(() => router.refresh())} method='POST'>
                            <ModalHeader className="flex flex-col gap-1">Chỉnh sửa thông tin cá nhân</ModalHeader>
                            <ModalBody>
                                {/* <div className='mb-5'>
                                        <label className='mr-5' htmlFor="avatar">Tải ảnh đại diện: </label>
                                        <input type="file" name='avatar' id='avatar' className=" w-full max-w-xs" />
                                    </div> */}
                                <div className=" w-full mb-5">
                                    <Input type="text" name="name" label="Họ tên" defaultValue={user.name} />
                                </div>
                                {/* <div className=" w-full mb-5">
                                        <Input type="date" label="Ngày sinh" placeholder="" />
                                    </div> */}
                                {/* <RadioGroup
                                        label="Chọn giới tính"
                                        orientation="horizontal"
                                        className='mb-5'
                                    >
                                        <Radio value="nam">Nam</Radio>
                                        <Radio value="nu">Nữ</Radio>
                                    </RadioGroup> */}
                                <div className=" w-full mb-5">
                                    <Input type="email" name="email" label="Email" defaultValue={user.email} />
                                </div>
                                <div className=" w-full mb-5">
                                    <Input type="tel" name="phone" label="Số điện thoại" defaultValue={user.phone} />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Đóng
                                </Button>
                                <Button color="primary" type="submit" onPress={onClose}>
                                    Chỉnh sửa
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
