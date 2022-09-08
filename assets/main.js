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
    precio: 1000,
  },
  {
    id: 2,
    nombre: "Jamon y Morron",
    ingredientes: "Jamon, Morron y Aceitunas",
    precio: 1200,
  },
  {
    id: 3,
    nombre: "Cebolla y Queso",
    ingredientes: "Cebolla, Queso y Oregano",
    precio: 1250,
  },
  { id: 4, nombre: "Roquefort", ingredientes: "Queso Roquefort", precio: 1100 },
  {
    id: 5,
    nombre: "Cuatro Quesos",
    ingredientes: "Quesos Parmesano, Roquiefort, Reggianato y Provolone",
    precio: 1300,
  },
  {
    id: 6,
    nombre: "Palmito",
    ingredientes: "Queso, Jamon y Palmitos",
    precio: 1400,
  },
];

const renderPizza = (arr) => {
  namePizza.textContent = `${arr.nombre.toString()}`;
  pricePizza.textContent = `$${arr.precio.toString()}`;
};

const resetInput = () => {
  input.value = "";
};

const init = (e) => {
  e.preventDefault();

  const inputValue = input.value.trim();

  const arrayFinded = arrayDePizzas.find((num) => num.id === +inputValue);

  renderPizza(arrayFinded);

  resetInput();
};

form.addEventListener("submit", init);
