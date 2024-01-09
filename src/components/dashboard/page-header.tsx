"use client"

import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Icons } from "../icons"

interface PageHeaderProps {
    pageTitle: string
    switcherTitle?: string
}

const PageHeader = ({
    pageTitle,
    switcherTitle
}: PageHeaderProps) => {
    return (
        <div className='flex justify-between items-center '>
            <p className='text-[20px] leading-[28px] font-[500]'>{pageTitle}</p>
            {switcherTitle && (
                <Button
                    aria-label="Select a store"
                    className={cn("w-[137px] h-[36px] justify-between items-center  border-[#D9D9D9] text-[#4D4D4D] gap-[16px]")}
                    size="sm"
                    variant="outline"
                >
                    {switcherTitle}
                    <Icons.ChevronDown className="ml-auto h-4 w-4 shrink-0 opacity-50 text-[#4D4D4D]" />
                </Button>
            )}
        </div>
    )
}

export { PageHeader }