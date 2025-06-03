'use client';
import { useRouter } from "next/navigation";
import Botao from "@/app/component/Botao/Botao";
import Input from "@/app/component/Input/Input";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const LoginEmpresa= () => {
        const router = useRouter();

        const [email, setEmail] = useState("");
        const [senha, setSenha] = useState("");
        const [erro, setError] = useState("");

        useEffect(() => {
            const token = localStorage.getItem("token");
            if (token) {
                router.push("/pages/Dashboard");
            }
        }, []);

        const handleLoginEmpresa = async(e: React.FormEvent) => {
            e.preventDefault();

            try {
                const response = await fetch("http://localhost:8080/empresa/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        senha,
                    }),
                });

                if (!response.ok) {
                    throw new Error("Usuário ou senha inválidos");
                }

                const data = await response.json();
                console.log("Login realizado com sucesso", data);
                localStorage.setItem("email_empresa", email); 
                router.push("/pages/Dashboard");
            }
            catch (err:any) {
                setError(err.message ||"Usuário ou senha inválidos");
            }
            
        };

    return (
        <>
            
           <div className="w-full h-[300px]  rounded-t-lg">
                    <Image src={"/image/onda_login.png"} alt="" width={300} height={220} className="rounded-tl-lg"/>
                    <Image src={"/image/logo.png"} alt="logo" width={250} height={220} className="-translate-y-[230px] translate-x-[100px]"/>
            </div>
            <h2 className="text-2xl text-center text-[#E63946]">Empresa</h2>
            <form onSubmit={handleLoginEmpresa}>
                <div className="w-full h-[400px] flex flex-col items-center justify-center">
                    <Input placeholder="Digite seu email" value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                    
                    <Input placeholder="Digite sua senha" type="password" 
                        value={senha}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
                    />
                    <br />
                    {erro && <p className="text-red-500">{erro}</p>}
                    <Botao corTexto="white" label="Entrar" type="submit"/>

                    <br />
                    <Link href={"/pages/RedefinirSenhaEmpresa"} className="text-[#E63946] ">Esqueci a senha</Link>
                </div>
            </form>
        </>
    )
}

export default LoginEmpresa;