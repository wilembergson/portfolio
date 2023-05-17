import Header from "@/components/Header";
import Link from "next/link";

export default function ClinicasDev() {

    return (
        <main className="flex font-principal min-h-screen h-full flex-col items-center">
            <Header/>
            <h1 className="text-5xl">Clinicas Dev</h1>
            <Link href='/'>
                <button>Voltar</button>
            </Link>
        </main>
    )
}