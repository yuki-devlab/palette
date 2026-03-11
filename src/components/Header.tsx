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
                        <Link href="/how-to-use" className="flex items-center text-gray-500">
                            <QuestionMarkCircleIcon className="mr-1 size-5" />
                            使い方
                        </Link>
                        <button className="bg-[var(--color-accent)] font-bold px-4 py-3 rounded-full text-white">
                            ログイン
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    )
}