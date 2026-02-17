# XP-inspired Landing Page (Projeto demonstrativo)

Este repositório contém um projeto front-end completo inspirado na experiência visual da XP Investimentos.

## ⚠️ Aviso importante
Este projeto **não é o site oficial da XP** e foi construído para fins de estudo/demonstração. Marcas, logotipos e conteúdos oficiais pertencem aos seus respectivos proprietários.

## Como rodar localmente

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Estrutura

- `index.html`: layout e seções da página
- `styles.css`: tema escuro, responsividade e componentes
- `script.js`: rolagem suave para seções internas

## Subir para GitHub

### 1) Criar repositório remoto
No GitHub, crie um repositório (ex.: `xp-clone-demo`).

### 2) Conectar e enviar

```bash
git remote add origin https://github.com/SEU_USUARIO/xp-clone-demo.git
git push -u origin main
```

## Clonar no Windows para VS Code e IntelliJ IDEA

### VS Code
1. Abra o VS Code.
2. Pressione `Ctrl + Shift + P`.
3. Execute: `Git: Clone`.
4. Cole a URL do repositório no GitHub.
5. Escolha a pasta local e clique em **Open**.

### IntelliJ IDEA
1. Abra o IntelliJ IDEA.
2. Na tela inicial, clique em **Get from VCS**.
3. Cole a URL do repositório.
4. Escolha a pasta local e clique em **Clone**.

## Próximos passos sugeridos

- Integrar API/CMS para conteúdos dinâmicos.
- Adicionar formulário real de captação de leads.
- Configurar deploy (Vercel/Netlify/GitHub Pages).
