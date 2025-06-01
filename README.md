# PopCity

> **PopCity** é um dashboard frontend criado para um teste técnico.  
> O objetivo é reproduzir fielmente um layout Figma contendo **diferentes tipos de gráficos, painéis de atividades e uma tabela**, demonstrando domínio de React e boas práticas de UI.

---

## 📦 Tecnologias & Ferramentas

| Categoria            | Ferramenta      | Descrição                                                                                             |
|----------------------|-----------------|-------------------------------------------------------------------------------------------------------|
| Build Tool           | **Vite**        | Inicialização e bundling ultrarrápidos para projetos React                                            |
| Biblioteca de UI     | **React**       | Composição de componentes e gerenciamento de estado                                                   |
| CSS Framework        | **Tailwind**    | Estilização utilitária, mobile-first                                                                  |
| Component Library    | **shadcn/ui**   | Conjunto de componentes acessíveis baseado em Radix + Tailwind                                        |
| HTTP Client          | **Axios**       | Cliente HTTP baseado em Promises para fazer requisições a APIs                                         |
| Servidor de Mock API | **json-server** | Gera uma API REST fake a partir de um arquivo JSON, simulando banco de dados                          |

---

## 🚀 Como rodar localmente

> Requer **Node.js ≥ 18** instalado.

1. **Clone o repositório**
   ```bash
   git clone https://github.com/GabrielOliveiraEvangelista/popCity.git
   cd popCity
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o back-end (API fake)**
   ```bash
   cd back-end
   npm run json-server   # Servidor em http://localhost:3000
   ```

4. **Inicie o front-end**
   ```bash
   # No diretório raiz do projeto
   npm run dev          # App em http://localhost:5173
   ```

---

## ⚡️ Performance / Boas práticas

- **Renderização memoizada da tabela:**  
  A tabela de tarefas está envolvida por `React.memo`, de modo que ela é re-renderizada somente quando suas linhas realmente mudam. Isso evita renders desnecessários enquanto os dados são buscados do `json-server`, mantendo a interface leve mesmo com grandes volumes de dados.

- **Gerenciamento de permissões de usuário:**  
  A aplicação controla o que cada usuário deve visualizar baseado em seu tipo. Atualmente existe apenas a rota de **admin**, mas a estrutura já está preparada para suportar outros tipos de usuários (usuário comum, etc.), permitindo expansão futura.

---

## 📺 Demo

Um vídeo demonstrativo — incluindo adaptação mobile/desktop e navegação pelo dashboard — será adicionado aqui.

<!-- Substitua o link abaixo após publicar o vídeo -->
