import ListHistory from '@/app/components/ListHistory'
import MenuAccY from '@/app/components/MenuAccY'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

export default async function Favorite() {
  const new_movie_list = await (await fetch("http://51.79.144.118:12594/movie")).json()
  return (
    <div className='flex text-white'>
      <MenuAccY />
      <div className='w-full px-32'>
        <div className='grid justify-center py-10 border-b-2 border-white font-bold text-3xl mb-4'>Danh sách theo dõi</div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className='text-white'>
              <tr>
                <th>STT</th>
                <th>Poster</th>
                <th>Tên phim</th>
                <th>Năm phát hành</th>
                <th>Đạo diễn</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody className=''>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>
                  <div
                    className="rounded-sm h-32 w-20"
                    style={{ "background": `center / cover no-repeat url('https://phim.nguonc.com/public/images/PostCat/1652236165.jpg` }}>
                  </div>
                </td>
                <td>Cô Gái Ngàn Đô</td>
                <td>2003</td>
                <td>Ai đó</td>
                <td>
                  <Button isIconOnly color="warning" variant="faded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </Button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>1</th>
                <td>
                  <div
                    className="rounded-sm h-32 w-20"
                    style={{ "background": `center / cover no-repeat url('https://phim.nguonc.com/public/images/PostCat/1652236165.jpg` }}>
                  </div>
                </td>
                <td>Cô Gái Ngàn Đô</td>
                <td>2003</td>
                <td>Ai đó</td>
                <td>
                  <Button isIconOnly color="warning" variant="faded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </Button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>1</th>
                <td>
                  <div
                    className="rounded-sm h-32 w-20"
                    style={{ "background": `center / cover no-repeat url('https://phim.nguonc.com/public/images/PostCat/1652236165.jpg` }}>
                  </div>
                </td>
                <td>Cô Gái Ngàn Đô</td>
                <td>2003</td>
                <td>Ai đó</td>
                <td>
                  <Button isIconOnly color="warning" variant="faded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </Button>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>
                  <div
                    className="rounded-sm h-32 w-20"
                    style={{ "background": `center / cover no-repeat url('https://phim.nguonc.com/public/images/PostCat/1652236165.jpg` }}>
                  </div>
                </td>
                <td>Cô Gái Ngàn Đô</td>
                <td>2003</td>
                <td>Ai đó</td>
                <td>
                  <Button isIconOnly color="warning" variant="faded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </Button>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>
                  <div
                    className="rounded-sm h-32 w-20"
                    style={{ "background": `center / cover no-repeat url('https://phim.nguonc.com/public/images/PostCat/1652236165.jpg` }}>
                  </div>
                </td>
                <td>Cô Gái Ngàn Đô</td>
                <td>2003</td>
                <td>Ai đó</td>
                <td>
                  <Button isIconOnly color="warning" variant="faded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
