// Crear un archivo HTML que contenga un h2, un h4, un input number y un botón.

// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
// 👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input.

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error.

const form = document.getElementById("form");
const input = document.getElementById("input");
const namePizza = document.getElementById("h2");
const pricePizza = document.getElementById("h4");

const arrayDePizzas = [
  {
    id: 1,
    nombre: "Napolitana",
    ingredientes: "Queso, Tomate y Jamon",
    precio: 350,
  },
  {
    id: 2,
    nombre: "Jamon y Morron",
    ingredientes: "Jamon, Morron y Aceitunas",
    precio: 400,
  },
  {
    id: 3,
    nombre: "Cebolla y Queso",
    ingredientes: "Cebolla, Queso y Oregano",
    precio: 450,
  },
  { id: 4, nombre: "Roquefort", ingredientes: "Queso Roquefort", precio: 500 },
  {
    id: 5,
    nombre: "Cuatro Quesos",
    ingredientes: "Quesos Parmesano, Roquiefort, Reggianato y Provolone",
    precio: 550,
  },
  {
    id: 6,
    nombre: "Palmito",
    ingredientes: "Queso, Jamon y Palmitos",
    precio: 600,
  },
];

const renderPizza = (arr) => {
  namePizza.innerHTML = `<h2 id="h2">${arr.nombre}</h2>`;
  // YA INTENTE CON TEXT CONTENT Y NO SE CUAL ES EL ERROR QUE DA UNDEFINED
  console.log(namePizza);
  pricePizza.textContent = `${arr.precio.toString()}`;
  console.log(pricePizza);
};

const resetInput = () => {
  input.value = "";
};

const init = (e) => {
  e.preventDefault();

  const inputValue = input.value.trim();

  const arrayFiltered = arrayDePizzas.filter((num) => num.id === +inputValue);

  renderPizza(arrayFiltered);

  resetInput();
};

form.addEventListener("submit", init);
