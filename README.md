### **Painel de Monitoramento de Métricas em Tempo Real**

#### **Introdução**
Este projeto é uma aplicação de monitoramento de métricas em tempo real, desenvolvida com Spring Boot no backend e Angular no frontend. Ele permite que os usuários monitorem métricas do sistema, como uso de CPU, uso de memória e latência, em tempo real.

---

### **Funcionalidades**

- Geração e publicação de dados de métricas via WebSocket.
- Autenticação JWT para acesso seguro ao WebSocket.
- Painel de monitoramento em tempo real no frontend Angular.
- Alertas visuais para valores críticos de métricas.
- Registro histórico de alertas.

---

### **Backend (Spring)**

#### **Geração de Dados de Métricas**
- Serviços para gerar dados simulados de uso de CPU, uso de memória e latência em intervalos configurados.
- Lógica para verificar se os valores das métricas ultrapassam os limites configurados para alertas.
- Publicação de atualizações de métricas e alertas por meio de uma conexão WebSocket.

#### **Publicação via WebSocket**
- Endpoint WebSocket que os clientes podem conectar.
- Autenticação JWT para garantir que apenas clientes autorizados tenham acesso.

#### **Autenticação JWT**
- Sistema de autenticação de usuários em memória, utilizando o Spring Security.
- Implementação de geração e validação de tokens JWT para acesso seguro ao WebSocket.

---

### **Frontend (Angular)**

#### **Painel de Monitoramento**
- Componentes para exibir dados de métricas em tempo real utilizando gráficos.
- Atualizações automáticas quando novos dados são recebidos via WebSocket.

#### **Destaque de Alertas**
- Realce visual dos componentes de métricas quando uma condição de alerta for acionada.
- Exibição de detalhes do alerta, como tipo de métrica, valor e timestamp.

#### **Registro de Alertas**
- Componente para exibir o histórico de alertas.
- Armazenamento de detalhes do alerta, incluindo tipo de métrica, valor e timestamp.

#### **Autenticação JWT**
- Página de login para autenticação do usuário.
- Armazenamento e uso do token JWT para conexões subsequentes com o WebSocket.
- Tratamento de expiração do token e redirecionamento para a página de login, se necessário.

---

### **Como Começar**

#### **Pré-requisitos**
- Java 11 ou superior.
- Node.js 14 ou superior.
- Angular CLI 12 ou superior.

#### **Executando a Aplicação**

1. Clone o repositório:
   ```bash
   git clone https://github.com/xmindgatex/metrics-monitoring-panel.git
   ```

2. Navegue até o diretório do backend e inicie a aplicação Spring Boot:
   ```bash
   cd metrics-monitoring-panel/backend
   ./gradlew bootRun
   ```

3. Em um terminal separado, navegue até o diretório do frontend e inicie o servidor de desenvolvimento Angular:
   ```bash
   cd metrics-monitoring-panel/frontend
   ng serve
   ```

4. Abra o navegador e acesse [http://localhost:4200](http://localhost:4200) para usar o painel de monitoramento.

---

### **Testes**

A aplicação inclui testes unitários e de integração para os componentes do backend e do frontend.

- **Backend:**
  ```bash
  cd metrics-monitoring-panel/backend
  ./gradlew test
  ```

- **Frontend:**
  ```bash
  cd metrics-monitoring-panel/frontend
  ng test
  ```

---

### **Contribuindo**
Se encontrar problemas ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma *issue* ou enviar uma *pull request*.# monitoramento-metricas
Teste
