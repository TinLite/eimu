import React from "react";
import { Button } from "@nextui-org/react";

export default function ButtonNext() {
    return (
        <div className="flex flex-wrap gap-4 items-center border-2 rounded-full hover:bg-white hover:text-black absolute right-5">
            <Button color="primary" variant="ghost">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-8">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                </svg>
            </Button>
        </div>
    )
}
