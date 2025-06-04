'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Hotbar from '@/app/component/Hotbar/Hotbar';
import { useEffect } from 'react';


const Perfil = () => {
    const router = useRouter();
    useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      router.push("/pages/LoginComum"); // Redireciona se não estiver logado
    }
  }, [router]);
    const handleLogout = () => {
        localStorage.removeItem("email");
        router.push("/pages/LoginComum"); 
    }

    return (
        <>
            <div className="w-full h-[740px] pt-[30px] flex justify-start items-center p-8">
                <div 
                    onClick={handleLogout}
                    className="w-full h-[100px] rounded-2xl flex shadow-2xl bg-gray-50 justify-start items-center gap-4 p-4 cursor-pointer hover:bg-red-100 transition"
                >
                    <Image src={"/icons/icon_sair.png"} alt="Icon sair" width={30} height={30} className="rounded-full" />
                    <p className="font-semibold text-red-500">Sair da conta</p>
                </div>
            </div>
            <Hotbar/>
        </>
    )
}

export default Perfil;
