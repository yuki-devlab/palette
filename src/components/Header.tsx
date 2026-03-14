"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Logo from "@/components/Logo";
import Container from "@/components/Container";
import LogInButton from "@/components/LogInButton";

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
                        <LogInButton />
                    </div>
                </div>
            </Container>
        </header>
    )
}