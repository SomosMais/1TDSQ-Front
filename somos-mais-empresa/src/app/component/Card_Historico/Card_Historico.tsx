// CardHistoricoItem.tsx
'use client';
import React from "react";

interface CardProps {
  id: number;
  nome: string;
  data_abertura: string;
  data_aceitacao: string;
  tipo_ajuda: string;
  status?: string;
  descricao: string;
  urgente: string;
  endereco?: string;
}

const corUrgente = (urgente: string) => urgente === 'S' ? '#E97777' : '#9FE977';
const corStatus = (status: string) => status === 'Em Andamento' ? '#E9E977' : '#9FE977';

const CardHistoricoItem = ({
  nome,
  data_abertura,
  data_aceitacao,
  tipo_ajuda,
  status = 'Concluído',
  descricao,
  urgente,
  endereco = 'Endereço não informado',
}: CardProps) => {
  return (
    <div className="w-[400px] bg-gray-50 rounded-2xl shadow-lg hover:bg-gray-100">
      <div className="flex">
        <div className="w-[25px] rounded-l-2xl" style={{ backgroundColor: corUrgente(urgente) }}></div>
        <div className="flex flex-col p-3 w-full">
          <h4 className="font-semibold text-left">{nome}</h4>
          <p className="text-sm">Criado em: {data_abertura}</p>
          <p className="text-sm">Aceito em: {data_aceitacao || "Aguardando"}</p>
          <div className="flex gap-2 mt-2 mb-2">
            <span className="text-sm font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: corUrgente(urgente) }}>
              {tipo_ajuda}
            </span>
            <span className="text-sm font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: corStatus(status) }}>
              {status}
            </span>
          </div>
          <p>{descricao}</p>
          <p className="text-sm"><strong>Endereço:</strong> {endereco}</p>
        </div>
      </div>
    </div>
  );
};

export default CardHistoricoItem;
