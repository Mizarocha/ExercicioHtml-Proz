document.addEventListener("DOMContentLoaded", function () {
  // Método simples para adicionar um título ao site
  document.getElementById("titulo").innerText = "Meu Site de Produtos";

  // Método complexo para adicionar um produto à venda
  const produtoContainer = document.createElement("div");
  produtoContainer.classList.add("produto");

  const nomeProduto = document.createElement("h2");
  nomeProduto.innerText = "Notebook";

  const descricaoProduto = document.createElement("p");
  descricaoProduto.innerText =
    "Este é um produto incrível que você vai adorar!";

  const precoProduto = document.createElement("span");
  precoProduto.innerText = "R$ 2.500,00";

  const imagemProduto = document.createElement("img");
  imagemProduto.src = "./img/notbook.webp";
  imagemProduto.alt = "Imagem do Notebook";
  imagemProduto.width = "300";
  imagemProduto.height = "300";

  produtoContainer.appendChild(nomeProduto);
  produtoContainer.appendChild(descricaoProduto);
  produtoContainer.appendChild(precoProduto);
  produtoContainer.appendChild(imagemProduto);

  document.body.appendChild(produtoContainer);
});
