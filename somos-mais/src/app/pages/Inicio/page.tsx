import Image from "next/image";
const Inicio = () => {
    return(
        <>
            <div className="w-full h-[500px]  flex">
                <div className="w-[200px] h-[500px]  flex items-center justify-center">
                    <Image src={"/image/logo_inicio.png"} alt="" width={500} height={200}/>
                </div>
                <div className="w-[250px] h-[500px] flex justify-end">
                    <Image src={"/image/onda_inicio.png"} alt="" width={150} height={100} className="rounded-tr-lg"/>
                </div>
            </div>
        </>
    );
}

export default Inicio;