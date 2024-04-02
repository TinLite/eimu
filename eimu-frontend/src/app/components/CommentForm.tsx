import React from 'react'
import { Textarea } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { Avatar } from '@nextui-org/react'
export default function CommentForm() {
  return (
    <div className='flex items-center w-max'>
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-16 h-16 mr-6" />
      <form action="">
        <label className="form-control">
          <div className="label">
            <span className="label-text font-bold">Tên của bạn</span>
          </div>
          <Textarea
            placeholder="Nhập nội dung bình luận..."
            className="w-[1000px]  border-b-8 border-sky-900 rounded-2xl"
            maxLength={200}
          />
        </label>
        <Button color="primary" className='float-right'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </Button>
      </form>
    </div>
  )
}
