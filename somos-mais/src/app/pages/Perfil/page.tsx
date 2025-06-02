import Hotbar from "@/app/component/Hotbar/Hotbat";
import Image from 'next/image';

const Perfil = () => {
    return (
        <>
            <div className="w-full h-[740px] pt-[30px] flex justify-start items-center p-8">
                <div className="w-full h-100px rounded-2xl flex shadow-2xl bg-gray-50 justify-start items-center gap-4 p-4">
                    <Image src={"/icons/icon_sair.png"} alt="Icon sair" width={30} height={30} className="rounded-full" />
                    <p>Sair da conta</p>
                </div>
            </div>
            <Hotbar/>
        </>
    )
}

export default Perfil;