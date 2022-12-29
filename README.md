## Inicializando o projeto

 Comandos para o server:

```bash
cd server
docker-compose up -d --build
docker exec -it cashforce bash
npm install
npm run prestart
npm run seed
npm start
```

![Diagrama Entidade-Relacionamento](./img/er_diagram_cashforce.png)