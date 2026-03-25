interface ContainerProps {
    children: React.ReactNode;
    size?: "lg" | "xl";
}

const maxWidth = {
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
} as const;

export default function Container({ children, size="lg" }: Readonly<ContainerProps>) {
    return (
        <div className={`mx-auto w-full ${maxWidth[size]}`}>
            {children}
        </div>
    )
}