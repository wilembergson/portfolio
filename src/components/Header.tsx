import Link from "next/link";

export default function Header() {
    return (
        <header className="flex bg-white w-full pt-10 pb-10 justify-center">
            <div className="w-11/12 sm:w-2/3">
                <Link href='/'>
                    <h1 className="text-center text-purple-900 font-principal text-1xl sm:text-2xl max-w-max flex-row">
                        Voltar
                    </h1>
                </Link>
            </div>
        </header>
    )
}