
import React, {FC} from 'react';

type CardsProps = {
    id?: number;
    nome: string;
    data_abertura?: string;
    tipo_ajuda: string;
    descricao: string;
    endereco?: string;
    urgente?: string
    onCancel?: (id: number) => void;
}

const Cards: React.FC<CardsProps> = (
    {id, nome = "Nome", data_abertura="21/09/2025",  tipo_ajuda="Tipo Ajuda", descricao = "Descricao",
        urgente = 'N',
        onCancel,
        endereco = "Endereço não informado"
    }
) => {

    const corUrgente = urgente === 'S' ? '#E97777' : '#9FE977';


   
    return(
        <>
            <div className="w-[400px]  bg-gray-50 rounded-2xl flex justify-center items-center shadow-lg hover:bg-gray-100">
                <div className="w-[400px] rounded-2xl flex">
                    <div className="w-[25px]  rounded-l-2xl" style={
                        {backgroundColor: corUrgente }
                    }></div>
                    <div className="flex flex-col p-3 w-full">
                        <div className='flex gap-2'>
                            <h4 className="font-semibold text-left">{nome}</h4>
                        </div>
                        <p className='text-[12px]'>{data_abertura}</p>
                        <span className="w-[180px] font-semibold text-[13px] text-center rounded-full  p-1 " style={{backgroundColor: corUrgente }}>{tipo_ajuda}</span>

                        <p>{descricao}</p>
                        <p><strong>Endereço: </strong>{endereco}</p>
                    </div>
                </div>

                
            </div>
        </>
    )
}
export default Cards;