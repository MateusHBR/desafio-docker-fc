# Desafio do Curso FullCycle

## Desafio 1. GOLang
```bash
$ cd go-lang
```

Repositório da imagem no Dockerhub: https://hub.docker.com/r/mateushbr/desafio-golang-01

### Objetivos:
- [x] Executar um app feito em GoLang que printe no console `FullCycle Rocks!`;
- [x] Criar uma imagem que tenha menos de 2mb;
- [x] Publicar a imagem no Dockerhub

### Tamanho da imagem encontrada:
```bash
$ docker images | grep golang
```
desafio-fc-golang_app   latest      6c2f08a18214   1 minutes ago       1.84MB
### Como executar o desafio:
```bash
$ docker-compose up --build
```

## Desafio 2. Nginx - Nodejs - Mysql
```bash
$ cd nginx-node-mysql
```
### Objetivos:
- [x] Fazer o Nginx acessar a aplicação nodejs;
- [x] A Aplicação node irá inserir o dado no mysql toda vez que uma requisição for feita;
- [x] O site acessado através do Nginx deverá apresentar o nome que foi cadastrado no banco.
 
### Como executar o desafio:
```bash
$ docker-compose up -d --build
```

O site estará acessível através da url: http://localhost:8080/