// HistoricoCliente.tsx
'use client';
import { useEffect, useState } from "react";
import Hotbar from "@/app/component/Hotbar/Hotbat";
import CardHistoricoItem from "@/app/component/Card_Historico/Card_Historico";
import withAuth from "@/app/utils/withAuth";


interface PedidoAjuda {
  id_pedido: number;
  descricao: string;
  data_criacao: string;
  data_aceitacao: string;
  urgente: string;
  nome_usuario: string;
  tipo_pedido: string;
  status: string;
  endereco: string;
}

const tipoPedidoMap: { [key: number]: string } = {
  1: "Resgate de Vítimas",
  2: "Resgate de Animais",
  3: "Ajuda Humanitária",
  4: "Apoio em Enchentes",
  5: "Apoio em Deslizamentos",
  6: "Transporte de Vítimas",
  7: "Busca e Salvamento",
  8: "Atendimento Médico",
  9: "Doação de Alimentos",
  10: "Doação de Roupas",
  11: "Solicitação de Abrigo",
  12: "Acesso à Água Potável",
  13: "Fornecimento de Energia Emergencial"
};

const HistoricoCliente = () => {
  const [pedidos, setPedidos] = useState<PedidoAjuda[]>([]);

  useEffect(() => {
    const emailSalvo = localStorage.getItem("email_empresa");

    if (emailSalvo) {
      fetch(`https://onetdsq-python.onrender.com/historico/empresa/${emailSalvo}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            const pedidosConvertidos: PedidoAjuda[] = data.map((item: any) => ({
              id_pedido: item.id_pedido,
              descricao: item.descricao,
              data_criacao: item["data criacao"],
              data_aceitacao: item["data aceitacao"],
              urgente: item.urgente,
              nome_usuario: item["nome usuario"],
              tipo_pedido: tipoPedidoMap[item["tipo pedido"]] || "Tipo desconhecido",
              status: item.status || "Concluído",
              endereco: item["endereco usuario"]
                ? `${item["endereco usuario"][0]}, ${item["endereco usuario"][1]} - ${item["endereco usuario"][2]}, ${item["endereco usuario"][3]} - ${item["endereco usuario"][4]}, CEP: ${item["endereco usuario"][5]}`
                : "Endereço não informado"
            }));

            setPedidos(pedidosConvertidos);
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
            pedidos.map((pedido) => (
              <CardHistoricoItem
                key={pedido.id_pedido}
                id={pedido.id_pedido}
                nome={pedido.nome_usuario}
                data_abertura={pedido.data_criacao}
                data_aceitacao={pedido.data_aceitacao}
                tipo_ajuda={pedido.tipo_pedido}
                status={pedido.status}
                descricao={pedido.descricao}
                urgente={pedido.urgente}
                endereco={pedido.endereco}
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

export default withAuth(HistoricoCliente);
