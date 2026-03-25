import Link from "next/link";
import { auth } from "@/lib/auth";
import { Help } from "@material-symbols-svg/react";
import prisma from "@/lib/prisma";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import LoginButton from "@/components/LoginButton";
import ProfileButton from "@/components/ProfileButton";

export default async function Header() {
    const session = await auth();

    let user = null;
    if (session) {
        user = await prisma.user.findUnique({
            where: {
                id: session.user?.id,
            },
        })
    }

    return (
        <header className="bg-white flex h-[72px] items-center">
            <Container size="xl">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Logo />
                    </Link>
                    <div className="flex gap-6 items-center text-sm">
                        <Link href="/how-to-use" className="flex gap-1 items-center text-gray-500 hover:text-gray-700">
                            <Help size={20} />
                            <span className="[text-box:trim-both_cap_alphabetic]">
                                使い方
                            </span>
                        </Link>
                        {!session ? (
                            <LoginButton />
                        ) : (
                            <ProfileButton imgSrc={session.user?.image} />
                        )}
                    </div>
                </div>
            </Container>
        </header>
    )
}