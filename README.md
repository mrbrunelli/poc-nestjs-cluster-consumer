# Clusterized NestJS Kafka

> POC de uma aplicação escrita com NestJS consumindo várias partições de um tópico no Kafka, de forma paralela, utilizando o módulo Cluster do Node.js.
> Cada worker processa indivualmente mensagens da partição que se conectou.
> O ideal é que tenha sempre mais partições do que workers, pois dessa forma é garantido que todos os workers se conectarão à uma ou várias partições.

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

4. Acesse o Kafdrop e crie o tópico "beers-topic" com 5 ou mais partições
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
      "name": "Spaten 300ml",
      "price": 3.99
    },
    "headers": [],
    "keyMeta": {},
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "name": "Colorado 600ml",
      "price": 13.5
    },
    "headers": [],
    "keyMeta": {},
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "name": "Amstel 300ml",
      "price": 3.4
    },
    "headers": [],
    "keyMeta": {},
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "name": "Boa 600ml",
      "price": 6.0
    },
    "headers": [],
    "keyMeta": {},
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "name": "Brahma Duplo Malte 300ml",
      "price": 3.68
    },
    "headers": [],
    "keyMeta": {},
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "name": "Heineken 350ml",
      "price": 5.29
    },
    "headers": [],
    "keyMeta": {},
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "name": "Heineken 5l",
      "price": 109.99
    },
    "headers": [],
    "keyMeta": {},
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "name": "Baden Baden IPA 350ml",
      "price": 6.0
    },
    "headers": [],
    "keyMeta": {},
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "name": "Skol 1l",
      "price": 8.0
    },
    "headers": [],
    "keyMeta": {},
    "valueMeta": {}
  },
  {
    "key": null,
    "value": {
      "name": "Sub Zero 350ml",
      "price": 2.98
    },
    "headers": [],
    "keyMeta": {},
    "valueMeta": {}
  }
]
```
