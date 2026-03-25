import Link from "next/link";
import { History, Logout, Mail, Policy, Settings } from "@material-symbols-svg/react";
import { logOutAction } from "@/lib/logout";

export default function ProfileMenu({ isOpen }: Readonly<{ isOpen: boolean }>) {
    return (
        <ul
            className={`
                absolute bg-white flex flex-col right-0 rounded-lg shadow-lg text-sm top-[calc(100%+32px)] transition-all w-60
                ${isOpen
                    ? "opacity-100 pointer-events-auto translate-y-0"
                    : "opacity-0 pointer-events-none translate-y-5"
                }
            `}
        >
            <li>
                <Link href="/history" className="flex gap-2 items-center p-4 rounded-t-lg hover:bg-gray-100">
                    <History size={22} className="text-gray-400" />
                    <span className="[text-box:trim-both_cap_alphabetic]">
                        生成履歴
                    </span>
                </Link>
            </li>
            <li>
                <Link href="/settings" className="flex gap-2 items-center p-4 hover:bg-gray-100">
                    <Settings size={22} className="text-gray-400" />
                    <span className="[text-box:trim-both_cap_alphabetic]">
                        設定
                    </span>
                </Link>
            </li>
            <li>
                <Link href="/terms" className="border-gray-100 border-t flex gap-2 items-center p-4 hover:bg-gray-100">
                    <Policy size={22} className="text-gray-400" />
                    <span className="[text-box:trim-both_cap_alphabetic]">
                        規約
                    </span>
                </Link>
            </li>
            <li>
                <Link href="/contact" className="flex gap-2 items-center p-4 hover:bg-gray-100">
                    <Mail size={22} className="text-gray-400" />
                    <span className="[text-box:trim-both_cap_alphabetic]">
                        お問い合わせ
                    </span>
                </Link>
            </li>
            <li>
                <form action={logOutAction}>
                    <button className="border-gray-100 border-t flex gap-2 items-center p-4 rounded-b-lg w-full hover:bg-gray-100">
                        <Logout size={22} className="text-gray-400" />
                        <span className="[text-box:trim-both_cap_alphabetic]">
                            ログアウト
                        </span>
                    </button>
                </form>
            </li>
        </ul>
    )
}