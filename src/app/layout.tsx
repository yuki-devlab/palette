import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Palette",
    description: "AIが、自動で配色を提案してくれるWebアプリです。",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body>
                {children}
            </body>
        </html>
    )
}