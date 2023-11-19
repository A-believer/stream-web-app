import Link from "next/link"

interface LinkProps {
    route: string
    text: string
}
export default function Links({route, text}: LinkProps) {
    return (
        <Link href={route} className="border-0 rounded-[15px] bg-[#138294] text-white p-2.5">{text}</Link>
    )
}