# Desafio do Curso FullCycle

## Desafio GOLang
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
