"use client";

import { tv, type VariantProps } from "tailwind-variants";
import { Icons } from "../icons";
import { Search } from "./search";

const NavbarStyles = tv({
    base: "w-full gap-[16px] border-b border-transparent bg-background/95 backdrop-blur-sm",
    variants: {
        border: {
            true: "border-border",
        },
        sticky: {
            true: "sticky top-0 z-40",
        },
        animated: {
            true: "animate-in fade-in slide-in-from-top-full duration-slow",
        },
    },
});

const Header = ({
    border = true,
    sticky = true
}) => {
    return (
        <header className={NavbarStyles({ border, sticky })}>
            <nav className="py-[12px] px-[32px] flex justify-between h-[64px] items-center">
                <div className="flex items-center gap-[16px]">
                    <p className="text-[15px] text-[#1A181E]">Payments</p>
                    <p className="gap-[2px] flex items-center">
                        <Icons.HelpCircle className="w[14px] h-[14px] text-[#4D4D4D]" />
                        <span className="text-[12px] text-[#4D4D4D]">How it works</span>
                    </p>
                </div>
                <Search />
                <div className="flex justify-end gap-[12px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#E6E6E6] flex flex-col items-center justify-center">
                        <Icons.Bell className="w-[20px] h-[20px]  text-[#4D4D4D]" />
                    </div>
                    <div className="w-[40px] h-[40px] rounded-full bg-[#E6E6E6] flex flex-col items-center justify-center">
                        <Icons.ChevronDown className="w-[20px] h-[20px]  text-[#4D4D4D]" />
                    </div>
                </div>
            </nav>
        </header >
    );
}

export { Header };