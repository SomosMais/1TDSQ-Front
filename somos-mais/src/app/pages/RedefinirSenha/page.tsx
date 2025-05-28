'use client';
import { useRouter } from "next/navigation";
import Botao from "@/app/component/Botao/Botao";
import Input from "@/app/component/Input/Input";
import Link from "next/link";
import Image from "next/image";

const RedefinirSenha = () => {
        const router = useRouter();

    return (
        <>
            
            <div className="w-full h-[300px]  rounded-t-lg">
                <Image src={"/image/onda_login.png"} alt="" width={300} height={220} className="rounded-tl-lg"/>
                <Image src={"/image/logo.png"} alt="logo" width={250} height={220} className="-translate-y-[230px] translate-x-[100px]"/>
            </div>
            <form action="">
                <div className="w-full h-[400px] flex flex-col items-center justify-center">
                    <Input placeholder="Digite seu email"/>
                    <Input placeholder="Digite sua senha" type="password"/>
                    <Input placeholder="Confirme a senha" type="password"/>
                    <br />
                    <Botao corTexto="white" label="Redefinir" onClick={() => router.push("/pages/Login")}/>
                    
                </div>
            </form>
        </>
    )
}

export default RedefinirSenha;