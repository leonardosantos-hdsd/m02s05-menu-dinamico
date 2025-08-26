// Array com as opções do menu
const opcoesMenu = ["Home", "Sobre", "Contato"];

// Seleciona o container do menu
const navContainer = document.getElementById("menu");

// Cria dinamicamente os itens do menu
function criarMenu(opcoes) {
  const nav = document.createElement("nav");
  nav.className = "navbar";

  const ul = document.createElement("ul");
  ul.className = "menu-list";

  opcoes.forEach(opcao => {
    const li = document.createElement("li");
    li.className = "menu-item";

    const a = document.createElement("a");
    a.href = `#${opcao.toLowerCase()}`;
    a.textContent = opcao;

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  return nav;
}

// Adiciona o menu na página
const menu = criarMenu(opcoesMenu);
navContainer.appendChild(menu);

// Exibe no console para validação
console.log("Menu gerado:", opcoesMenu);
