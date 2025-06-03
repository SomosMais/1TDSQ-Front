# 🆘 SOMOS+ - Sistema de Ajuda em Desastres Naturais

A **SOMOS+** é uma solução criada com o objetivo de **conectar pessoas em situação de emergência causadas por desastres naturais com empresas ou agentes de ajuda**. Através de um web app, é possível registrar ocorrências, visualizar pedidos e acompanhar o andamento do suporte.

---

## 🧩 Tecnologias Utilizadas

- React
- TailwindCSS
- Bando de dados Oracle
- Python API REST
- Java Quarkus API REST


### 🧠 API
- Python + Flask
- Java Quarkus
- Banco de dados Oracle

---

## 🗺️ Como Funciona?

### Para Usuários (Aplicativo)
1. 📝 Cria uma conta com dados pessoais e dados de endereço.
2. 🚨 Registra ocorrências com informações como:
   - Nome
   - Endereço
   - Tipo de problema (enchente, desabamento, etc.)
   - Descrição
3. 🔍 Acompanha o histórico das solicitações

---

## 🔄 Integração

- O **web app envia os dados** para as API de JAVA e Python.
- Há também uma **API Python com Oracle** que pode ser usada por usuários e ONGs para consultar o histórico e registrar atendimentos.
- Há também uma **API JAVA QUARKUS com Oracle** que pode ser usada por usuários e ONGs para cadastrar, realizar login e refeinir senha.

---

## 🔧 Estrutura da Aplicação

📁 mobile-app/
├── components/
├── screens/
└── firebase/

📁 portal-web/
├── src/
│ ├── controller/
│ ├── service/
│ ├── repository/
│ └── templates/
└── application.properties

📁 api-flask/
└── app.py


## 🔗 Links Importantes

- [📂 Repositório da API de JAVA (GitHub)](https://github.com/seu-repo/storm-safety)
- [▶️ Vídeo de Demonstração no YouTube](https://youtube.com/seu-video)

---

## 👨‍💻 Equipe

| Nome                                   | RM      | Função                     |
|----------------------------------------|---------|----------------------------|
| Cleyton Enrike de Oliveira             | 560485  | Back-end / Documentação    |
| Matheus Henrique Nascimento de Freitas | 560442  | Front-end / Documentação   |
| Pedro Henrique Sena                    | 561178  | Back-end / Documentação    |
