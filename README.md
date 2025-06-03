# 🆘 Sistema de Apoio a Desastres - Histórico de Pedidos da Empresa

Este projeto faz parte de uma plataforma de auxílio em situações de desastre. A funcionalidade aqui documentada é o **Histórico de Pedidos Atendidos por Empresas**, permitindo que empresas visualizem os pedidos que aceitaram e concluíram, como resgates, doações e ajuda humanitária.

---

## 🔧 Tecnologias Utilizadas

### 🖥️ Front-end
- [Next.js](https://nextjs.org/) (React)
- Tailwind CSS
- TypeScript

### 🖧 Back-end
- Flask (Python)
- Oracle Database
- SQL

---

## 🚀 Funcionalidades

### 📁 Front-end
- Listagem dos pedidos atendidos por uma empresa.
- Exibição dos dados:
  - Nome do solicitante
  - Datas de criação e aceitação do pedido
  - Tipo de pedido (ex: Resgate de Vítimas, Doação de Alimentos, etc.)
  - Status do pedido (Concluído ou Em Andamento)
  - Endereço completo do solicitante
  - Urgência do pedido (com indicação por cor)

### 🧠 Back-end (API Flask)
- Endpoint: `GET /historico/empresa/<email>`
  - Busca o `id_empresa` com base no email fornecido.
  - Consulta todos os pedidos associados à empresa.
  - Retorna uma lista JSON com todos os pedidos formatados.

---

## 🧩 Estrutura do Projeto

### 📦 Front-end (`app/component/Card_Historico/`)
- `CardHistorico.tsx`: Renderiza os pedidos com destaque visual para urgência e status.
- `HistoricoCliente.tsx`: Página principal que busca os dados e envia para o componente `CardHistorico`.

### 🔙 Back-end (Flask)
```python
@app.route("/historico/empresa/<email>", methods=["GET"])
def historico_pedido_empresa(email):
    ...
