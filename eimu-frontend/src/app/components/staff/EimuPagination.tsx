"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function EimuPagination({ totalPage, currentPage, countEachSide = 2 }: { totalPage: number, currentPage: number, countEachSide?: number }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function redirectToPage(page: number) {
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        replace(`${pathname}?${params.toString()}`);
    }

    function PaginationButton({ page, isActive = false }: { page: number, isActive?: boolean }) {
        return (
            <button onClick={() => redirectToPage(page)} className={`join-item btn btn-sm ${isActive ? 'btn-primary' : ''}`}>{page}</button>
        )
    }

    const leftMost = Math.max(currentPage - countEachSide, 1);
    const rightMost = Math.min(currentPage + 2, totalPage);
    return (
        <div className="join">
            {leftMost !== 1 && (
                // <a href={`?page=${1}`} className="join-item btn">1</a>
                <PaginationButton page={1} />
            )}
            {leftMost > 2 && (
                <div className="join-item btn btn-sm btn-disabled">...</div>
            )}
            {Array.from({ length: rightMost - leftMost + 1 }, (_, index) => (
                <PaginationButton key={index} page={leftMost + index} isActive={leftMost + index === currentPage} />
            ))}
            {rightMost < totalPage - 1 && (
                <div className="join-item btn btn-sm btn-disabled">...</div>
            )}
            {rightMost !== totalPage && (
                <PaginationButton page={totalPage} />
            )}
        </div>
    )
}