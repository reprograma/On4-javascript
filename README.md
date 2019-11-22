
## Chamar o JS dentro do HTML

Você precisa avisar ao navegador que existe um arquivo Javascipt e que ele precisa carregá-lo.

``` javascript
<script src="./js/hello.js"></script>`
```

```javascript
<script>
    Seu script
    Essa não é uma boa prática, serve apenas para exercícios e pequenos testes.
</script>
```
---

## O que é DOM e para que serve

O Modelo de Objeto de Documento (DOM) do W3C é uma plataforma e interface de linguagem neutra que permite que programas e scripts acessem e atualizem dinamicamente o conteúdo, estrutura e estilo de um documento.

Um dos grandes responsáveis por isso tudo é o objeto “document” que é responsável por conceder ao código Javascript todo o acesso a árvore DOM do navegador Web. 

Com o DOM pode-se mover itens dentro de uma página ou criar efeitos CSS bastante interessantes sem precisar nem mesmo recarregar a página.

<img src="assets/dom.png">

- mudar todos os elementos HTML da página
- alterar todos os atributos HTML na página
- mudar todos os estilos CSS na página
- remover elementos e atributos HTML existentes
- adicionar novos elementos e atributos HTML
- reagir a todos os eventos HTML existentes na página
- criar novos eventos HTML na página


## Métodos úteis do DOM para HTML - focar em ID e querySelector

```javascript
document.getElementById("nome-id")

```

```javascript
document.querySelector(".classe")

document.querySelector("#id")

document.querySelector("div")

```

## Funções

Uma função é um procedimento JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor,
ou seja,
uma função é um bloco de código projetado para executar uma tarefa específica. Esse código é definido uma vez e chamado quantas vezes for necessário.



## Eventos no Javascript - Click 

### preventDefault


## Capturar valores de inputs em eventos

value

## Manipulando elementos HTML

createElement

createTextNode

appendChild

insertBefore

innerHTML


## Métodos do DOM para manipular CSS

style

## Manipulando elementos HTML

src

## Adicionar e remover classes do HTML pelo Javascript

classList
## Eventos no Javascript - submit

## Validações com condicionais

focus

----

1 - Acessando os nodulos/elementos e visualizando no console.

2 - Adicionando eventos de clique e acessando elementos a partir do evento

3 - Retornando uma resposta pro usário atraves de criaçao de elementos novos e recursos de alerta.

---

1 - Destacando um erro de formulário no focus e em eventos do teclado

2 - Selecionando conteúdos.

3 - Manipulando o estilo para fazer animações

4 - Métodos de manipulação de atributo - classe

5 - Métodos de manipulação de atributo - imagem