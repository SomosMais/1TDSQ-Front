import Cards from "@/app/component/Cards/Cards";
import Hotbar from "@/app/component/Hotbar/Hotbat";
import Image from "next/image";

const Historico = () => {
  return (
    <>
      <div className="w-full h-[740px] pt-[30px]">

        <div className="flex flex-col justify-start items-center w-full gap-10 h-[740px] overflow-y-auto px-4 scrollbar-none">

            <h1 className="text-2xl font-semibold text-left w-full ">Solicitações de Ajuda</h1>

            <Cards nome="Pedro de Senna Souza" data_abertura="21/03/2025" tipo_ajuda="Ajuda com Moradia" descricao="Estou precisando de um lugar para ficar, pois minha casa ficou cheia de água depois dessa útilma chuva" endereco="Rua Sagui, 69 - São Mateus - SP"/>
            <Cards nome="Pedro de Senna Souza" data_abertura="21/03/2025" tipo_ajuda="Ajuda com Moradia" descricao="Estou precisando de um lugar para ficar, pois minha casa ficou cheia de água depois dessa útilma chuva" endereco="Rua Sagui, 69 - São Mateus - SP"/>
            <Cards nome="Pedro de Senna Souza" data_abertura="21/03/2025" tipo_ajuda="Ajuda com Moradia" descricao="Estou precisando de um lugar para ficar, pois minha casa ficou cheia de água depois dessa útilma chuva" endereco="Rua Sagui, 69 - São Mateus - SP"/>



        </div>

      </div>
    
        <Hotbar />
      
      
    </>
  );
};

export default Historico;
