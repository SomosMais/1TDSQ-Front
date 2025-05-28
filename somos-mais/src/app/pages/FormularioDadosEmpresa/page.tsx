'use client';
import { useRouter } from "next/navigation";
import Botao from "@/app/component/Botao/Botao";
import Input from "@/app/component/Input/Input";
import Image from "next/image";
import { useState } from "react";
const FormularioDadosEmpresa = () => {
    
    const router = useRouter();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cnpj, setCNPJ] = useState("");
    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState(false);

    const handleCadastroEmpresa = async (e: React.FormEvent) => {
        e.preventDefault();

        setErro("");
        setSucesso(false);

        try{
            const response = await fetch("http://localhost:8080/empresa/cadastrar",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome,
                    email,
                    senha,
                    cnpj
                }),
            });
            if (!response.ok) {
                throw new Error("Erro ao cadastrar usuário");
            }

            setSucesso(true);
            router.push("/pages/LoginComum");
        }
        catch (err: any) {
            setErro(err.message || "Erro ao cadastrar usuário. Tente novamente.");
        }
    }

    return (
        <>
        <div className="w-full h-[320px]  rounded-t-lg">
            <Image src={"/image/onda_login.png"} alt="" width={300} height={220} className="rounded-tl-lg"/>
            <Image src={"/image/logo.png"} alt="logo" width={250} height={220} className="-translate-y-[230px] translate-x-[100px]"/>
        </div>

        <form onSubmit={handleCadastroEmpresa} className="min-h-[480px] w-full overflow-y-auto px-4 py-6 bg-white   rounded-b-lg scrollbar-none flex flex-col items-center">
  
            <div className="w-full h-[340px] flex flex-col items-center justify-center">
                    <h2 className="text-[#212529] mb-10 text-2xl">Dados Empresa</h2>
                    <Input placeholder="Digite o nome da empresa" value={nome} onChange={(e) => setNome(e.target.value)}/>
                
                    <Input placeholder="Digite o email da empresa" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                
                    <Input placeholder="Digite sua senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    
                    <Input placeholder="Digite o cnpj" type="number" value={cnpj} onChange={(e) => setCNPJ(e.target.value)}/>    
            </div>
                {erro && <p className="text-red-500 mb-2">{erro}</p>}
                {sucesso && <p className="text-green-500 mb-2">Cadastro realizado com sucesso!</p>}
            <Botao type="submit" cor="#E63946" corTexto="white" label="Cadastrar" />
        </form>
        </>
    )

}

export default FormularioDadosEmpresa;