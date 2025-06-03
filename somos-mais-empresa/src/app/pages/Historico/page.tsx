// pages/HistoricoCliente.tsx
'use client';
import { useEffect, useState } from "react";
import Hotbar from "@/app/component/Hotbar/Hotbat";
import CardHistoricoItem from "@/app/component/Card_Historico/Card_Historico";

interface PedidoAjuda {
  Nome: string;
  id_usuario: number;
  id_pedido: number;
  descricao: string;
  data_criacao: string;
  data_aceitacao: string;
  urgente: string;
  status: string;
  "tipo pedido": string;
}

const HistoricoCliente = () => {
  const [pedidos, setPedidos] = useState<PedidoAjuda[]>([]);

  useEffect(() => {
  const emailSalvo = localStorage.getItem("email_empresa");
  console.log("Email salvo:", emailSalvo); // ADICIONE ISSO

  if (emailSalvo) {
    fetch(`http://localhost:5000/historico/empresa/${emailSalvo}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Dados recebidos:", data); // VERIFIQUE SE CHEGA AQUI
        if (Array.isArray(data)) {
          setPedidos(data);
        } else {
          setPedidos([]);
        }
      })
      .catch((err) => {
        console.error("Erro ao buscar histórico da empresa:", err);
      });
  }
}, []);


  return (
    <>
      <div className="w-full h-[740px] pt-[30px]">
        <div className="flex flex-col justify-start items-center w-full gap-10 h-[705px] overflow-y-auto px-4 scrollbar-none">
          <h1 className="text-2xl font-semibold text-left w-full">Pedidos Atendidos</h1>

          {pedidos.length > 0 ? (
            pedidos.map((pedido, index) => (
              <CardHistoricoItem
                key={index}
                id={pedido.id_pedido}
                nome={pedido.Nome}
                data_abertura={pedido.data_criacao}
                data_aceitacao={pedido.data_aceitacao}
                tipo_ajuda={pedido["tipo pedido"]}
                descricao={pedido.descricao}
                urgente={pedido.urgente}
                
              />
            ))
          ) : (
            <p className="text-lg text-gray-600 mt-4">Não há pedidos registrados.</p>
          )}
        </div>
      </div>
      <Hotbar />
    </>
  );
};

export default HistoricoCliente;
