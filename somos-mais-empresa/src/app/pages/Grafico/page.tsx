'use client';
import { useEffect, useState } from "react";

const PreverRisco = () => {
  const [rios, setRios] = useState<string[]>([]);
  const [rio, setRio] = useState("");
  const [chuva, setChuva] = useState("1");
  const [data, setData] = useState("");
  const [risco, setRisco] = useState("");

  // Busca os rios disponíveis
  useEffect(() => {
  fetch("http://localhost:5000/rios_disponiveis")
    .then(res => res.json())
    .then(data => {
      console.log("📥 Rios recebidos:", data);
      if (data.rios) {
        setRios(data.rios);
      }
    })
    .catch(error => {
      console.error("Erro ao buscar rios:", error);
    });
}, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const partes = data.split("-");
    const dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;

    try {
      const res = await fetch("http://localhost:5000/prever", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rio,
          chuva_mm: { "1": 0.0, "2": 5.0, "3": 20.0, "4": 50.0 }[chuva],
          data: dataFormatada,
        }),
      });

      const resultado = await res.json();
      console.log("Resultado da previsão:", resultado);
      setRisco(resultado.resultado || "Erro ao prever");
    } catch (error) {
      console.error("Erro na previsão:", error);
      setRisco("Erro ao prever");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4">🔍 Previsão de Risco de Enchentes</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label>
          🌊 Selecione o rio:
          <select value={rio} onChange={e => setRio(e.target.value)} required className="w-full border p-2 rounded">
            <option value="">-- Escolha --</option>
            {rios.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </label>
        <label>
          🌧️ Nível de chuva:
          <select value={chuva} onChange={e => setChuva(e.target.value)} className="w-full border p-2 rounded">
            <option value="1">1. Não choveu</option>
            <option value="2">2. Chuva fraca</option>
            <option value="3">3. Chuva média</option>
            <option value="4">4. Chuva forte</option>
          </select>
        </label>
        <label>
          📅 Data da observação:
          <input type="date" value={data} onChange={e => setData(e.target.value)} required className="w-full border p-2 rounded" />
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">🔎 Verificar risco</button>
      </form>

      {risco && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          📢 <strong>Nível de risco:</strong> <span className="text-lg font-bold">{risco}</span>
        </div>
      )}
    </div>
  );
};

export default PreverRisco;
