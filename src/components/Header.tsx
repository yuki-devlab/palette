"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Logo from "@/components/Logo";
import Container from "@/components/Container";

export default function Header() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <header className="bg-white py-4">
            <Container>
                <div className="flex items-center justify-between">
                    <Link href="/">
                        {isHome ? <h1><Logo /></h1> : <Logo />}
                    </Link>
                    <div className="flex gap-6 items-center text-sm">
                        <Link href="/how-to-use" className="flex gap-1 items-center text-gray-500 hover:text-gray-700">
                            <QuestionMarkCircleIcon className="size-5" />
                            <span className="[text-box:trim-both_cap_alphabetic]">
                                使い方
                            </span>
                        </Link>
                        <button className="[text-box:trim-both_cap_alphabetic] bg-[var(--color-accent)] font-bold p-4 rounded-full text-white hover:bg-[var(--color-blue)]">
                            ログイン
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    )
}