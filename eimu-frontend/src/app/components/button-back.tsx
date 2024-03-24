import React from "react";
import { Button } from "@nextui-org/react";

export default function ButtonBack() {
    return (
        <div className="flex flex-wrap gap-4 items-center border-2 rounded-full hover:bg-white hover:text-black absolute left-5">
            <Button color="primary" variant="ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </Button>
        </div>
    )
}
