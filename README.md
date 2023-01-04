## Inicializando o projeto

 Comandos para o server:

```bash
cd server
docker-compose up -d --build
docker exec -it cashforce bash
npm install
npm run flash
```

O comando "npm run flash" faz as migrations, popula com as seeders e inicia o backend.
Uma vez iniciado, este comando não precisa ser repetido. Pode-se usar somente "npm start"

Comando para o client:
```bash
cd client
npm install
npm start
```

![Diagrama Entidade-Relacionamento](./img/er_diagram_cashforce.png)