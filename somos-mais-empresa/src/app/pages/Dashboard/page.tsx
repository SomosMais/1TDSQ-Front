import Hotbar from "@/app/component/Hotbar/Hotbat";
import Image from "next/image";

const Dashboard = () => {
  return (
    <>
      <div className="w-full h-[740px]  pt-[30px]">

        <div className="flex justify-center items-center gap-10">
          
          <div className="w-[180px] h-[70px] bg-amber-50 rounded-2xl flex flex-col justify-center items-center">
            <div className="h-[30px] flex items-center gap-2">
                <Image src={"/image/"} alt="Icon usuário" width={25} height={25}></Image>
                <h3>Pessoas Ajudas</h3>
            </div>
            <span className="text-2xl font-bold">10</span>
          </div>

          <div className="w-[180px] h-[70px] bg-amber-50 rounded-2xl flex flex-col justify-center items-center">
            <div className="h-[30px] flex items-center gap-2">
                <Image src={"/image/"} alt="Icon usuário" width={25} height={25}></Image>
                <h3>Empresas Ativas</h3>
            </div>
            <span className="text-2xl font-bold">97</span>
          </div>
          
        </div>
        <div className="flex flex-col justify-start items-center w-full gap-10 mt-10 h-[600px] overflow-y-auto px-4 scrollbar-none">

            <h1 className="text-2xl font-semibold text-left w-full ">Solicitações de Ajuda</h1>

            <div className="w-[400px]  bg-gray-50 rounded-2xl flex justify-center items-center shadow-lg hover:bg-gray-100">
                <div className="w-[400px] rounded-2xl flex">
                    <div className="w-[25px] bg-green-400 rounded-l-2xl"></div>
                    <div className="flex flex-col p-3 w-full">
                        <h4 className="font-semibold text-left">Pedro de Senna</h4>
                        <p className="text-[12px]">aberto: 21/03/2025</p>
                        <span className="w-[180px] font-semibold text-[13px] text-center rounded-full bg-green-200 p-1 mb-2 mt-2">Ajuda com Roupa</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, sequi! Rerum, autem omnis? Eius eligendi voluptas itaque, dolore odio aliquid consequuntur quam aspernatur quae nulla iusto possimus dolorem exercitationem nobis!</p>
                        <p><strong>Endereço: </strong>Rua Bergamota, 178 - Caudinha - SP</p>
                    </div>
                </div>

                
            </div>

            <div className="w-[400px]  bg-gray-50 rounded-2xl flex justify-center items-center shadow-lg hover:bg-gray-100">
                <div className="w-[400px] rounded-2xl flex">
                    <div className="w-[25px] bg-red-400 rounded-l-2xl"></div>
                    <div className="flex flex-col p-3 w-full">
                        <h4 className="font-semibold text-left">Cleyton de Oliveira</h4>
                        <p className="text-[12px]">aberto: 21/03/2025</p>
                        <span className="w-[180px] font-semibold text-[13px] text-center rounded-full bg-red-200 p-1 mb-2 mt-2">Ajuda com Moradia</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, sequi! Rerum, autem omnis? Eius eligendi voluptas itaque, dolore odio aliquid consequuntur quam aspernatur quae nulla iusto possimus dolorem exercitationem nobis!</p>
                        <p><strong>Endereço: </strong>Rua Tangerina Rodrigues de Carvalho, 18 - São José do Campos - SP</p>
                    </div>
                </div>

                
            </div>

            <div className="w-[400px]  bg-gray-50 rounded-2xl flex justify-center items-center shadow-lg hover:bg-gray-100">
                <div className="w-[400px] rounded-2xl flex">
                    <div className="w-[25px] bg-green-400 rounded-l-2xl"></div>
                    <div className="flex flex-col p-3 w-full">
                        <h4 className="font-semibold text-left">Matheus Henrique</h4>
                        <p className="text-[12px]">aberto: 21/03/2025</p>
                        <span className="w-[180px] font-semibold text-[13px] text-center rounded-full bg-green-200 p-1 mb-2 mt-2">Ajuda com Alimentação</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, sequi! Rerum, autem omnis? Eius eligendi voluptas itaque.</p>
                        <p><strong>Endereço: </strong>Avenida Europa, 1800 - Vila Olimpia - SP</p>
                    </div>
                </div>

                
            </div>

        </div>

      </div>
    
        <Hotbar />
      
      
    </>
  );
};

export default Dashboard;
