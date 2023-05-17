import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white w-full p-10 mb-14">
            <Link href='/'>
                <h1 className="text-center text-purple-900 font-principal ml-0 sm:ml-52 text-1xl sm:text-2xl max-w-max flex-row">
                    Wilembergson Alfredo
                </h1>
            </Link>
        </header>
    )
}