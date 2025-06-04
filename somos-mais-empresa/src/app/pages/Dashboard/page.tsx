'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Contador from "@/app/component/Contador/Constador";
import Explorar from "@/app/component/Explorar/Explorar";
import Hotbar from "@/app/component/Hotbar/Hotbat";
import Cards from "@/app/component/Cards/Cards";
import withAuth from "@/app/utils/withAuth";

const Dashboard = () => {
  const router = useRouter()
  const [qtdUsuarios, setQtdUsuarios] = useState(0);
  const [qtdOngs, setQtdOngs] = useState(0);
  const [pedidos, setPedidos] = useState<any[]>([]);
  const [filtroUrgencia, setFiltroUrgencia] = useState("");
  const [autenticado, setAutenticado] = useState(false); 


  const tipoNomePorId: { [key: number]: string } = {
    1: "Resgate de Vítimas",
    2: "Resgate de Animais",
    3: "Ajuda Humanitária",
    4: "Apoio em Enchentes",
    5: "Apoio em Deslizamento",
    6: "Transporte de Vítimas",
    7: "Busca e Salvamento",
    8: "Atendimento Médico",
    9: "Doação de Alimentos",
    10: "Doação de Roupas",
    11: "Solicitação de Abrigo",
    12: "Acesso a Água Potável",
    13: "Fornecimento de Energia Emergencial",
  };

  useEffect(() => {
      const email = localStorage.getItem("email_empresa");
      if (!email) {
        router.push("/pages/LoginEmpresa"); // redireciona se não estiver logado
      } else {
        setAutenticado(true); // só permite renderização se autenticado
      }
    }, [router]);


  useEffect(() => {
    if (!autenticado) return;

    fetch("https://onetdsq-python.onrender.com/numero_pedidos_concluidos")
      .then((res) => res.json())
      .then((data) => setQtdUsuarios(data["Numero de pedidos concluidos"]))
      .catch((err) => console.error("Erro ao buscar número de usuários ajudados:", err));

    fetch("https://onetdsq-python.onrender.com/numero_ongs")
      .then((res) => res.json())
      .then((data) => setQtdOngs(data["Numero de empresas"]))
      .catch((err) => console.error("Erro ao buscar empresas:", err));
  }, [autenticado]);

  const aplicarFiltro = () => {
    fetch("https://onetdsq-python.onrender.com/visualizar_pedidos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ urgencia: filtroUrgencia }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro na resposta da API");
        return res.json();
      })
      .then((data) => {
        console.log("Pedidos recebidos:", data);
        setPedidos(data);
      })
      .catch((err) => console.error("Erro ao aplicar filtro:", err));
  };
  if (!autenticado) return null;
  return (
    <>
      <div className="w-full h-[740px] pt-[30px]">
        <div className="flex justify-center items-center gap-10">
          <Contador titulo="Pessoas Ajudadas" quantidade={qtdUsuarios} icon="icon_pessoa_ajudada.png" />
          <Contador titulo="Empresas Ativas" quantidade={qtdOngs} icon="icon_empresa_ativa.png" />
        </div>

        <div className="flex flex-col mt-[20px] gap-2 w-full h-[200px] bg-gray-100 px-[15px] rounded-2xl shadow-lg">
          <h3 className="font-semibold text-2xl text-left">Explore também</h3>
          <div className="flex gap-10">
            <Explorar icon="icon_somos+.png" titulo="Conheça SOMOS+" href="Empresa" />
            <Explorar icon="icon_time.png" titulo="Nosso time" href="Grupo" />
            <Explorar icon="icon_jornal.png" titulo="Noticias" href="Noticias" />
          </div>
        </div>

        {/* Filtro por urgência */}
        <div className="flex items-center justify-start gap-4 mt-8 px-6">
          <select
            className="border border-gray-300 rounded-md px-2 py-1"
            value={filtroUrgencia}
            onChange={(e) => setFiltroUrgencia(e.target.value)}
          >
            <option value="">Filtrar por urgência</option>
            <option value="S">Urgente</option>
            <option value="N">Não Urgente</option>
          </select>
          <button
            onClick={aplicarFiltro}
            className="bg-[#E63946] text-white px-4 py-2 rounded-lg hover:bg-[#E63120] cursor-pointer"
          >
            Aplicar Filtro
          </button>
        </div>

        <div className="flex flex-col justify-start items-center w-full gap-1 mt-6 h-[380px] ">
          <h1 className="text-2xl font-semibold text-left w-full ml-10">Pedidos em Aberto</h1>
          <div className="flex flex-col overflow-y-auto px-4 scrollbar-none w-full gap-6 h-[380px]">
            {pedidos.length > 0 ? (
              pedidos.map((pedido, index) => (
               <Cards
                key={index}
                id={pedido.id_pedido}
                nome={pedido["nome do usuario"]}
                data_abertura={pedido["data criacao"]}
                tipo_ajuda={tipoNomePorId[pedido["id tipo pedido"]] || `Tipo ${pedido["id tipo pedido"]}`}
                descricao={pedido.descricao}
                endereco={pedido["endereco do usuario"].join(", ")}
                urgente={pedido.urgencia}
                onAceitar={() => setPedidos((prev) => prev.filter((p) => p.id_pedido !== pedido.id_pedido))}
              />
              ))
            ) : (
              <p className="text-gray-500">Nenhum pedido encontrado. Aplique um filtro.</p>
            )}
          </div>
        </div>
      </div>
      <Hotbar />
    </>
  );
};

export default withAuth(Dashboard);
