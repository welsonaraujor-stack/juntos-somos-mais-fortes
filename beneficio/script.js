const categorias = document.querySelectorAll(".categoria");

categorias.forEach(cat => {

cat.addEventListener("click", () => {

categorias.forEach(item =>
item.classList.remove("ativa")
);

cat.classList.add("ativa");

});

});