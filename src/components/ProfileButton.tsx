"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ProfileMenu from "@/components/ProfileMenu";

export default function ProfileButton({ imgSrc }: Readonly<{ imgSrc?: string | null }>) {
    const profileImgSrc = imgSrc ?? "/default-avatar.png";

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const closeMenu = () => {
        setMenuIsOpen(false);
    }

    const toggleMenu = () => {
        setMenuIsOpen((prev) => !prev);
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target as Node)
            ) {
                closeMenu();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])

    return (
        <div ref={wrapperRef} className="relative">
            <button type="button" className="block" onClick={toggleMenu}>
                <Image
                    src={profileImgSrc}
                    alt="プロフィール画像"
                    width={40}
                    height={40}
                    className="border border-gray-200 rounded-full"
                />
            </button>
            <ProfileMenu isOpen={menuIsOpen} />
        </div>
    )
}