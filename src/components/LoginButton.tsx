import { signIn } from "@/lib/auth";

export default function LoginButton() {
    return (
        <form
            action={async () => {
                "use server";
                await signIn("google");
            }}
        >
            <button className="[text-box:trim-both_cap_alphabetic] bg-[var(--color-accent)] font-bold p-4 rounded-full text-white hover:bg-[var(--color-blue)]">
                ログイン
            </button>
        </form>
    )
}