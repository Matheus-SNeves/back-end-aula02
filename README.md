# Trabalho da matéria PBE2 - 10/02

## GRUPO:
- Isabelle Almeida
- Matheus Neves
- Pedro Henrique

## Tema: Tema 02: Sistema de Gerenciamento de Produtos

## Tecnologias
Frontend: HTML, CSS e JavaScript
Backend: NodeJS com Express
Banco de Dados: MySQL
Requisitos
Git
NodeJS
MySQL
VsCode
## Como rodar
1 Clonar o repositório
2 Abrir o projeto no VsCode
3 Instalar o Banco de dados no Mysql (Via XAMPP dar start em MySQL).

CREATE DATABASE produtos;
USE produtos;
CREATE TABLE produtos(
    produto_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    valor decimal(10,2) NOT NULL,
    descricao VARCHAR(255) NOT NULL
);

4 Abrir o terminal cmd ou bash, navegar até a pasta ./api e rodar:
cd api
npm install
npm start ou npx nodemon
5 Navegar até a pasta ./web e executar o arquivo index.html no navegador ou via live server do VsCode
