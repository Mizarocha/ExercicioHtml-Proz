// Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' insira a estrutura base HTML e dentro da tag 'body' inclua quatro tags vazias: h1, ul, a, ol. Adicione o atributo id="titulo" à tag h1, o atributo href="https://prozeducacao.com.br" à tag 'a', e o atributo id="lista-ordenada" à tag 'ol'. Na sequência, realize a conexão entre o arquivo HTML e o arquivo JavaScript.

// No arquivo script.js capture os quatro elementos criados, e use a propriedade .innerText para adicionar conteúdo textual aos elementos 'h1' e 'a', e a propriedade .innerHTML para adicionar três itens simples na lista não ordenada, e três itens com links para outros sites na lista ordenada.

const titulo = document.getElementById("titulo");
titulo.innerText = "Título da Página";

const link = document.getElementById("link");
link.innerText = "Link para o Proz Educação";

const listaNaoOrdenada = document.querySelector("ul");
listaNaoOrdenada.innerHTML = "<li>Item 1</li><li>Item 2</li><li>Item 3</li>";

const listaOrdenada = document.getElementById("lista-ordenada");
listaOrdenada.innerHTML =
  "<li><a href='https://site1.com'>Link 1</a></li><li><a href='https://site2.com'>Link 2</a></li><li><a href='https://site3.com'>Link 3</a></li>";
