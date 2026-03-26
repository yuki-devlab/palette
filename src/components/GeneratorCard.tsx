import Link from "next/link";

interface GeneratorCardProps {
    url: string;
    label: string;
    description: string;
    GeneratorIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function GeneratorCard({ url, label, description, GeneratorIcon }: Readonly<GeneratorCardProps>) {
    return (
        <Link href={url} className="bg-white duration-300 flex flex-col rounded-3xl shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="bg-blue-200 flex h-[200px] items-center justify-center rounded-t-3xl">
                <GeneratorIcon />
            </div>
            <div className="px-6 py-7 space-y-6">
                <h2 className="[text-box:trim-both_cap_alphabetic] font-bold text-center text-gray-600">
                    {label}
                </h2>
                <p className="[text-box:trim-both_cap_alphabetic] leading-relaxed text-gray-500 text-xs">
                    {description}
                </p>
            </div>
        </Link>
    )
}