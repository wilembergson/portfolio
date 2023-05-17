import Header from "@/components/Header";
import Link from "next/link";

export default function ClinicasDev() {
    return (
        <main className="flex min-h-screen h-full flex-col items-center font-principal">
            <Header />
            <h1 className="text-5xl">Libras Translate</h1>
            <Link href='/'>
                <button>Voltar</button>
            </Link>
        </main>
    )
}