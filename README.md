# Projeto Chatbot CIB2B

Um chatbot interativo desenvolvido em Django para auxiliar vendedores com tutoriais em vídeo sobre cotações e pedidos. O sistema apresenta uma experiência personalizada com saudações baseadas na hora do dia e um widget de ajuda para navegação por vídeos instrutivos.

## 📋 Funcionalidades

- **Página Inicial**: Interface simples com botão "LOGAR" centralizado para acesso ao sistema.
- **Página de Vendedores**: Área principal com fundo personalizado e funcionalidades avançadas.
- **Vídeos de Saudação**: Exibe automaticamente "Bom dia", "Boa tarde" ou "Boa noite" baseado na hora atual, uma vez por dia.
- **Widget de Ajuda**: Ícone flutuante que abre um chat interativo para navegação por tutoriais.
- **Tutoriais em Vídeo**:
  - **Cotações**: 4 vídeos explicativos sobre localização, participação, preenchimento e campos obrigatórios.
  - **Pedidos**: 3 vídeos sobre acesso, aceitação e histórico de pedidos.
- **Responsividade**: Design adaptável para diferentes dispositivos.
- **Acesso via Rede**: Suporte para exposição em rede local ou internet (via Ngrok).

## 🛠️ Tecnologias Utilizadas

### Backend
- **Django 5.2.6**: Framework web principal para estrutura, roteamento e templates.
- **Python**: Linguagem de programação base.
- **SQLite**: Banco de dados padrão (configurado para desenvolvimento).

### Frontend
- **HTML5**: Estrutura das páginas.
- **CSS3**: Estilização personalizada, incluindo fundos dinâmicos.
- **JavaScript (ES6 Modules)**: Lógica interativa, controle de vídeos e widget de chat.
- **Font Awesome**: Biblioteca de ícones via CDN.

### Recursos Multimídia
- **Vídeos MP4**: 10 arquivos de tutorial (3 saudações + 7 instrutivos).
- **Imagens**: Backgrounds personalizados (background.png e background2.png).

### Ferramentas de Desenvolvimento
- **Virtual Environment (venv)**: Isolamento de dependências Python.
- **Ngrok**: Exposição temporária para acesso web público.

## 🚀 Como Executar

### Pré-requisitos
- Python 3.8 ou superior instalado.
- Git para clonar o repositório.

### Passos para Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/RacconWebFenix/projeto_chatbot.git
   cd projeto_chatbot
   ```

2. **Ative o ambiente virtual**:
   ```bash
   source venv/bin/activate  # Linux/Mac
   # ou
   venv\Scripts\activate     # Windows
   ```

3. **Instale as dependências** (se houver requirements.txt):
   ```bash
   pip install -r requirements.txt
   ```
   *Nota: O projeto usa apenas Django como dependência principal. Se não houver requirements.txt, instale manualmente:*
   ```bash
   pip install django
   ```

4. **Execute as migrações** (se necessário):
   ```bash
   python manage.py migrate
   ```

5. **Colete arquivos estáticos**:
   ```bash
   python manage.py collectstatic --noinput
   ```

6. **Inicie o servidor**:
   ```bash
   python manage.py runserver
   ```

7. **Acesse a aplicação**:
   - Local: http://localhost:8000
   - Rede local: http://[SEU_IP]:8000 (descubra o IP com `hostname -I`)

### Exposição na Web (Opcional)

Para tornar acessível publicamente:

1. **Instale Ngrok** (https://ngrok.com/download).
2. **Faça login**: `ngrok authtoken YOUR_TOKEN`.
3. **Exponha a porta 8000**:
   ```bash
   ngrok http 8000
   ```
4. **Acesse a URL gerada** (ex: https://abc123.ngrok.io).

## 📁 Estrutura do Projeto

```
projeto_chatbot/
├── core/                          # App principal Django
│   ├── migrations/                # Migrações do banco
│   ├── static/core/               # Arquivos estáticos
│   │   ├── css/                   # Folhas de estilo
│   │   ├── img/                   # Imagens (backgrounds)
│   │   ├── js/                    # Scripts JavaScript
│   │   └── video/                 # Vídeos MP4
│   ├── templates/core/            # Templates HTML
│   ├── models.py                  # Modelos (vazio)
│   ├── views.py                   # Views (home, vendedores)
│   └── ...
├── projeto_chatbot/               # Configurações do projeto
│   ├── settings.py                # Configurações Django
│   ├── urls.py                    # Roteamento principal
│   └── ...
├── db.sqlite3                     # Banco de dados
├── manage.py                      # Comando Django
├── venv/                          # Ambiente virtual (não subir)
└── README.md                      # Este arquivo
```

## 🎯 Como Usar

1. **Acesse a página inicial** e clique em "LOGAR".
2. **Assista ao vídeo de saudação** (exibido uma vez por dia).
3. **Clique no ícone de ajuda** (💬) no canto inferior direito.
4. **Selecione uma categoria**: "Cotações" ou "Pedidos".
5. **Navegue pelos vídeos** clicando nos títulos.
6. **Use o botão "Voltar"** para retornar ao menu principal.

## 🤝 Contribuição

1. Fork o projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`).
4. Push para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

### Diretrizes
- Siga os padrões de código Python (PEP 8).
- Mantenha a estrutura de templates e static organizada.
- Teste em diferentes navegadores.

## 📝 Licença

Este projeto é privado e destinado ao uso interno da CIB2B. Todos os direitos reservados.

## 📞 Contato

- **Desenvolvedor**: RacconWebFenix
- **Email**: dfenixweb@gmail.com
- **GitHub**: https://github.com/RacconWebFenix

---

*Desenvolvido com ❤️ para otimizar o suporte aos vendedores da CIB2B.*