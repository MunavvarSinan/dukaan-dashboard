"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "../icons";


export type NavItem = {
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: string;
    label?: string;
    description?: string;
};
export type NavItemWithChildren = NavItem & {
    items: NavItemWithChildren[];
};
type SidebarNavItem = NavItemWithChildren;

export interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
    items: SidebarNavItem[];
}

export function SidebarNav({ items, className, ...props }: SidebarNavProps) {
    const pathname = usePathname();

    if (!items?.length) return null;

    return (

        <div className={cn("flex w-full  h-full flex-col gap-[24px] bg-primary", className)} {...props}>
            <div className="flex gap-[24px] items-center justify-between">
                <div className="flex gap-[12px] items-center">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        className="rounded-xl"
                        width={58}
                        height={18}
                    />
                    <div className="gap-[4px] items-center">
                        <p className="text-white font-semibold text-[14px]">Nishyan</p>
                        <p className="text-white opacity-80 border-b text-[13px] cursor-pointer">visit store</p>
                    </div>
                </div>
                <div className="items-end gap-0 cursor-pointer">
                    <Icons.ChevronDown className="text-white" />
                </div>
            </div>

            <div className={cn("flex w-full flex-col gap-[16px]", className)} {...props}>
                {items.map((item, index) => {
                    const Icon = Icons[item.icon as keyof typeof Icons] ?? Icons["ChevronLeft"];

                    return item.href ? (
                        <Link
                            aria-label={item.title}
                            key={index}
                            href={item.href}
                            target={item.external ? "_blank" : ""}
                            rel={item.external ? "noreferrer" : ""}
                        >
                            <span
                                className={cn(
                                    "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-[#FFFFFF1A] ",
                                    pathname === item.href
                                        ? "bg-[#FFFFFF1A] font-medium text-white"
                                        : "text-white",
                                    item.disabled && "pointer-events-none opacity-60",
                                )}
                            >
                                <Icon className="mr-2 h-[20px] w-[20px]" aria-hidden="true" />
                                <span className="text-[14px]">{item.title}</span>
                            </span>
                        </Link>
                    ) : (
                        <span
                            key={index}
                            className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
                        >
                            {item.title}
                        </span>
                    );
                })}
            </div>
            <div className="flex-1" /> {/* empty div to push the div to bottom */}
            <div className="flex items-center  py-[16px] px-[10px] rounded bg-[#FFFFFF1A] h-[54px] w-full dark:bg-gray-800">
                <div className="flex justify-center items-center">
                    <div className="flex gap-[12px] items-center">
                        <Icons.Wallet className="w-[36px] h-[36px] text-white" />
                        <div className="text-white gap-[2px]">
                            <p className=" opacity-80 text-[13px] font-[400]">Available credits</p>
                            <p className="text-[16px] font-[500] ">222.10</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
