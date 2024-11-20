Aplicação de Monitoramento de Métricas
Visão Geral do Projeto
Aplicação de monitoramento de métricas em tempo real com comunicação baseada em WebSocket e autenticação JWT.

Requisitos do Sistema
Java 11+
Maven 3.6+
Node.js 14+
Angular CLI 13+
Configuração do Backend (Spring Boot)
Pré-requisitos
Certifique-se de que o Java 11+ e o Maven estejam instalados
Abra o terminal/prompt de comando
Etapas de Instalação
Bash
# Clone o repositório
git clone https://github.com/xmindgatex/monitoramento-metricas.git

# Navegue até o diretório do backend
cd monitoramento-metricas/backend

# Instale as dependências e compile
mvn clean install

# Execute a aplicação Spring Boot
mvn spring-boot:run
Use code with caution.

Configuração do Frontend (Angular)
Pré-requisitos
Certifique-se de que o Node.js e o npm estejam instalados
Instale o Angular CLI: npm install -g @angular/cli
Etapas de Instalação
Bash
# Navegue até o diretório do frontend
cd monitoramento-metricas/frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
ng serve
Use code with caution.

Acessando a Aplicação
Backend: http://localhost:8080
Frontend: http://localhost:4200
Executando os Testes
Bash
# Testes do backend
cd backend
mvn test

# Testes do frontend
cd frontend
ng test
Use code with caution.

Implantação
Backend: Construa com mvn package
Frontend: Construa com ng build --prod
Tecnologias Utilizadas
Backend: Spring Boot, WebSocket, JWT
Frontend: Angular, RxJS
Ferramentas de Construção: Maven, npm
Solução de Problemas
Certifique-se de que todos os pré-requisitos estejam instalados
Verifique se as portas de rede estão disponíveis
Verifique se as versões das dependências correspondem aos requisitos
