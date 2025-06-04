import React, { useState } from "react";

type CardsProps = {
  id?: number;
  nome: string;
  data_abertura?: string;
  tipo_ajuda: string;
  descricao: string;
  endereco?: string;
  urgente?: string;
  onAceitar?: () => void;
};

const Cards: React.FC<CardsProps> = ({
  id,
  nome,
  data_abertura = "21/09/2025",
  tipo_ajuda = "Tipo Ajuda",
  descricao = "Descricao",
  urgente = "N",
  endereco = "Endereço não informado",
  onAceitar
}) => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const corUrgente = urgente === "S" ? "#E97777" : "#9FE977";

  const handleAceitarPedido = async () => {
    const email = localStorage.getItem("email_empresa");

    if (!email || !id) {
      alert("Erro: Email ou ID inválido");
      return;
    }

    try {
      const res = await fetch(`https://onetdsq-python.onrender.com/aceitar_pedido/${email}/${id}`);
      const data = await res.json();

      if (res.ok) {
        alert(data.msg);
        setMostrarModal(false);
        if (onAceitar) onAceitar(); // remove o card
      } else {
        alert(data.msg || "Erro ao aceitar o pedido.");
      }
    } catch (err) {
      console.error("Erro ao aceitar:", err);
      alert("Erro na requisição.");
    }
  };

  return (
    <>
      <div
        className="w-[400px] bg-gray-50 rounded-2xl flex justify-center items-center shadow-lg hover:bg-gray-100 cursor-pointer"
        onClick={() => setMostrarModal(true)}
      >
        <div className="w-[400px] rounded-2xl flex">
          <div className="w-[25px] rounded-l-2xl" style={{ backgroundColor: corUrgente }}></div>
          <div className="flex flex-col p-3 w-full">
            <h4 className="font-semibold text-left">{nome}</h4>
            <p className="text-[12px]">{data_abertura}</p>
            <span
              className="w-[180px] font-semibold text-[13px] text-center rounded-full p-1"
              style={{ backgroundColor: corUrgente }}
            >
              {tipo_ajuda}
            </span>
            <p>{descricao}</p>
            <p>
              <strong>Endereço:</strong> {endereco}
            </p>
          </div>
        </div>
      </div>

      {mostrarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{tipo_ajuda}</h2>
            <p><strong>Solicitante:</strong> {nome}</p>
            <p><strong>Data:</strong> {data_abertura}</p>
            <p><strong>Descrição:</strong> {descricao}</p>
            <p><strong>Endereço:</strong> {endereco}</p>
            <p><strong>Urgência:</strong> {urgente === 'S' ? 'Urgente' : 'Não Urgente'}</p>
            <div className="flex justify-end mt-4 gap-4">
              <button onClick={() => setMostrarModal(false)} className="text-gray-600">Fechar</button>
              <button onClick={handleAceitarPedido} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Aceitar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
