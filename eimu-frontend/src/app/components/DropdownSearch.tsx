import { Image, Link } from '@nextui-org/react'
export default function DropdownSearch() {
    return (
        <ul className='absolute top-16 bg-[#263238] max-w-full w-[18rem] p-2 rounded-sm hidden'>
            <li className=''>
                <Link href={"#"}>
                    <Image
                        width={50}
                        alt="NextUI hero Image"
                        src="https://phim.nguonc.com/public/images/Film/140627.jpg"
                        className='rounded-none'
                    />
                    <div className='ml-2'>Sengoku Youko</div>
                </Link>
            </li>
            <li>
                <Link href={"#"}>
                    <Image
                        width={50}
                        alt="NextUI hero Image"
                        src="https://phim.nguonc.com/public/images/Film/140627.jpg"
                        className='rounded-none'
                    />
                    <div className='ml-2'>Sengoku Youko</div>
                </Link>
            </li>
            <li>
                <Link href={"#"}>
                    <Image
                        width={50}
                        alt="NextUI hero Image"
                        src="https://phim.nguonc.com/public/images/Film/140627.jpg"
                        className='rounded-none'
                    />
                    <div className='ml-2'>Sengoku Youko</div>
                </Link>
            </li>
            <li>
                <Link href={"#"}>
                    <Image
                        width={50}
                        alt="NextUI hero Image"
                        src="https://phim.nguonc.com/public/images/Film/140627.jpg"
                        className='rounded-none'
                    />
                    <div className='ml-2'>Sengoku Youko</div>
                </Link>
            </li>
        </ul>
    )
}
