'use client';
import React, { useEffect, useState } from "react";

type PedidoEmpresa = {
  id_pedido?: number;
  nome_usuario: string;
  empresa: string;
  tipo_pedido: string;
  descricao: string;
  data_criacao: string;
  data_aceitacao: string | null;
  urgente: string;
  status: string;
  endereco: string; // <-- novo campo
};

const CardHistorico = () => {
  const [pedidos, setPedidos] = useState<PedidoEmpresa[]>([]);

  useEffect(() => {
    const emailEmpresa = localStorage.getItem("email_empresa");
    if (emailEmpresa) {
      fetch(`http://localhost:5000/historico/empresa/${emailEmpresa}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            setPedidos(data);
          } else {
            console.warn("Nenhum pedido retornado.");
            setPedidos([]);
          }
        })
        .catch(err => console.error("Erro ao buscar histórico:", err));
    }
  }, []);

  const corUrgente = (urgente: string) => urgente === 'S' ? '#E97777' : '#9FE977';
  const corStatus = (status: string) => status === 'Em Andamento' ? '#E9E977' : '#9FE977';

  return (
    <div className="w-full h-[740px] pt-[30px]">
      <div className="flex flex-col justify-start items-center w-full gap-6 h-[705px] overflow-y-auto px-4 scrollbar-none">
 

        {pedidos.length > 0 ? (
          pedidos.map((pedido) => (
            <div key={pedido.id_pedido} className="w-[400px] bg-gray-50 rounded-2xl shadow-lg hover:bg-gray-100">
              <div className="flex">
                <div className="w-[25px] rounded-l-2xl" style={{ backgroundColor: corUrgente(pedido.urgente) }}></div>
                <div className="flex flex-col p-3 w-full">
                  <h4 className="font-semibold text-left">{pedido.nome_usuario}</h4>
                  <p className="text-sm">Empresa: {pedido.empresa}</p>
                  <p className="text-sm">Criado em: {pedido.data_criacao}</p>
                  <p className="text-sm">Aceito em: {pedido.data_aceitacao || "Aguardando"}</p>
                  <div className="flex gap-2 mt-2 mb-2">
                    <span className="text-sm font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: corUrgente(pedido.urgente) }}>
                      {pedido.tipo_pedido}
                    </span>
                    <span className="text-sm font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: corStatus(pedido.status) }}>
                      {pedido.status}
                    </span>
                  </div>
                  <p>{pedido.descricao}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-600 mt-4">Nenhum pedido atendido ainda.</p>
        )}
      </div>
    </div>
  );
};

export default CardHistorico;
