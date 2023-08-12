# Desenvolvendo o Dio Bank
desenvolvido por [Nathally Souza](https://github.com/nathyts)
Forked e reformulado por [Deyvson Aguiar](https://github.com/deyvsonaguiar)

#### Projeto desenvolvido com conceitos básicos de typescript para o curso Fullstack Typescript - DIO

### Tecnologias
- Typescript

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependeências
    
    npm install

3 - Execute o projeto

    npm run dev

#### Desafios
[x] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
  - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
  - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

[x] Implementar o método de empréstimo (getLoan) na classe CompanyAccount
  - Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
  - Apenas contas com o status true podem fazer empréstimo

[x] Criar um novo tipo de conta a partir da DioAccount
  - Esta conta não deve receber novos atributos
  - Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

[x] Todos os atributos de qualquer conta devem ser privados

[x] Os atributos name e accountNumber não podem ser alterados internamente ou externamente

[x] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.

[x] Feature: Criação de método currency para converter a saída em moeda brasileira, devidamente formatada.

- método utilizada a função toLocaleString() para converter um number em string. Utilizado style com moeda BRL
