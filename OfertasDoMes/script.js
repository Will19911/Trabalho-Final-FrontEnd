const descontos = [
  {
    nome: "Jaqueta camo denim trucker",
    precoOriginal: 599.90,
    precoDesconto: 499.90,
    imagem1: "assets/JaquetaJeans1.webp",
    imagem2: "assets/JaquetaJeans2.webp"
  },
  {
    nome: "Camiseta mte crestline",
    precoOriginal: 129.90,
    precoDesconto: 89.90,
    imagem1: "assets/Blusa.webp",
    imagem2: "assets/Blusa1.webp"
  },
  {
    nome: "Moletom  verdant green",
    precoOriginal: 249.90,
    precoDesconto: 196.90,
    imagem1: "assets/CasacoVerde1.webp",
    imagem2: "assets/CasacoVerde2.webp"
  },
  {
    nome: "Tênis skate black white",
    precoOriginal: 199.90,
    precoDesconto: 159.90,
    imagem1: "assets/Tenis1.webp",
    imagem2: "assets/Tenis2.webp"
  },
  {
    nome: "Boné grape leaf",
    precoOriginal: 269.99,
    precoDesconto: 249.90,
    imagem1: "assets/Bone1.webp",
    imagem2: "assets/Bone2.webp"
  },
  {
    nome: "Óculos shades black",
    precoOriginal: 179.99,
    precoDesconto: 143.90,
    imagem1: "assets/Oculos1.webp",
    imagem2: "assets/Oculos2.webp"
  }
];

const container = document.getElementById("descontos-container");

descontos.forEach(item => {
  const card = document.createElement("div");
  card.className = "desconto-card";

  card.innerHTML = `
    <div class="imagens">
      <img src="${item.imagem1}" alt="Imagem frontal de ${item.nome}" class="produto-img" />
      <img src="${item.imagem2}" alt="Imagem traseira de ${item.nome}" class="produto-img" />
    </div>
    <h2>${item.nome}</h2>
    <p><del>R$ ${item.precoOriginal.toFixed(2)}</del></p>
    <p><strong>R$ ${item.precoDesconto.toFixed(2)}</strong></p>
    <button class="comprar-btn" aria-label="Comprar ${item.nome}">Comprar</button>
  `;

  container.appendChild(card);
});

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});