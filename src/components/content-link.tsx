import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    href: string,
    children: ReactNode
}

export default function ContentLink({ href, children }: Props) {
    return (
        <span className="font-bold">
            <Link className="hover:text-yellow-300 duration-300" href={href} target="_blank">
                {children}
            </Link>
        </span>
    )
}