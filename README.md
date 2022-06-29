# Clusterized NestJS Kafka

> POC de uma aplicação escrita com NestJS consumindo várias partições de um tópico no Kafka, de forma paralela, utilizando o módulo Cluster do Node.js.
> Cada worker processa indivualmente mensagens da partição que se conectou.

## Como executar

1. Suba o container do Kafka

```sh
docker compose up -d
```

2. Instale as dependências

```sh
npm install
```

3. Execute o projeto

```sh
npm run start
```

4. Acesse o Kafdrop e crie/delete tópicos com 1 ou mais partições
   [http://localhost:190001](http://localhost:190001)

## Utilitários

Recomendo a utilização de um [Kafka Client](https://www.xeotek.com/) para o envio das mensagens

## Referências

- [Documentação Cluster Node](https://nodejs.org/api/cluster.html#cluster)

- [Cluster no NestJS](https://dev.to/danudenny/clustering-nest-js-2mj7)

- [Montando Container Kafka](https://medium.com/azure-na-pratica/apache-kafka-kafdrop-docker-compose-montando-rapidamente-um-ambiente-para-testes-606cc76aa66)

- [Vários consumidores no Kafka](https://stackoverflow.com/questions/35561110/can-multiple-kafka-consumers-read-same-message-from-the-partition)

## Exemplo de mensagens

```json
[
  {
    "key": null,
    "value": {
      "type": "application/json",
      "message": "Привет, мир 3",
      "from": "Rússia"
    },
    "headers": [],
    "keyMeta": {},
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "type": "application/json",
      "message": "Hello World 2",
      "from": "EUA"
    },
    "headers": [],
    "keyMeta": null,
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "type": "application/json",
      "message": "Привет, мир 6",
      "from": "Rússia"
    },
    "headers": [],
    "keyMeta": null,
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "type": "application/json",
      "message": "Привет, мир 4",
      "from": "Rússia"
    },
    "headers": [],
    "keyMeta": null,
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "type": "application/json",
      "message": "Olá Mundo 7",
      "from": "Brasil"
    },
    "headers": [],
    "keyMeta": null,
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "type": "application/json",
      "message": "Hello World 5",
      "from": "EUA"
    },
    "headers": [],
    "keyMeta": null,
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "type": "application/json",
      "message": "Привет, мир 8",
      "from": "Rússia"
    },
    "headers": [],
    "keyMeta": null,
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "type": "application/json",
      "message": "Olá Mundo 1",
      "from": "Brasil"
    },
    "headers": [],
    "keyMeta": null,
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "type": "application/json",
      "message": "Olá Mundo 10",
      "from": "Brasil"
    },
    "headers": [],
    "keyMeta": null,
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "type": "application/json",
      "message": "Hello World 9",
      "from": "EUA"
    },
    "headers": [],
    "keyMeta": null,
    "valueMeta": {}
  }
]
```
