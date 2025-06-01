import React, {FC} from 'react';

type CardsProps = {
    id?: number;
    nome: string;
    data_abertura?: string;
    tipo_ajuda: string;
    descricao: string;
    endereco: string;
    backgroundColor?: string;
    backgroundColor2?: string;
}

const Cards: React.FC<CardsProps> = (
    {id, nome = "Nome", data_abertura, tipo_ajuda="Tipo Ajuda", descricao = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, sequi! Rerum, autem omnis? Eius eligendi voluptas itaque, dolore odio aliquid consequuntur quam aspernatur quae nulla iusto possimus dolorem exercitationem nobis!", endereco="Endereço"
, backgroundColor = "#E63946"
, backgroundColor2 = "#E63946"
    }
) => {
    return(
        <>
        <div className="w-[400px]  bg-gray-50 rounded-2xl flex justify-center items-center shadow-lg hover:bg-gray-100">
                <div className="w-[400px] rounded-2xl flex">
                    <div className="w-[25px]  rounded-l-2xl" style={
                        {backgroundColor: backgroundColor}
                    }></div>
                    <div className="flex flex-col p-3 w-full">
                        <h4 className="font-semibold text-left">{nome}</h4>
                        <p className="text-[12px]">{data_abertura}</p>
                        <span className="w-[180px] font-semibold text-[13px] text-center rounded-full  p-1 mb-2 mt-2" style={{backgroundColor: backgroundColor2}}>{tipo_ajuda}</span>
                        <p>{descricao}</p>
                        <p><strong>Endereço: </strong>{endereco}</p>
                    </div>
                </div>

                
            </div>
        </>
    )
}
export default Cards;