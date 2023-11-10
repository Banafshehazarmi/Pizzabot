const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, & ${pepperoni}`
);

const orderName = prompt(
  `Enter the name of the pizza you want to order today: (${vegetarian}, ${hawaiian}, ${pepperoni})`
);

const orderQuantity = prompt(`How many of ${orderName} do you want?`);

function isOnTheMenu(order) {
  return order == vegetarian || order == pepperoni || order == hawaiian;
}

function totalCost(orderQuantity) {
  return pizzaPrice * orderQuantity;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

const orderTotal = totalCost(orderQuantity);
const orderCookingTime = cookingTime(orderQuantity);

function alert(message) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = message;
}

function processOrder(orderName, orderQuantity) {
  if (!isOnTheMenu(orderName)) {
    alert("Sorry, that pizza is not on our menu.");
    return;
  }

  alert(
    `Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kr. The pizzas will take ${orderCookingTime} minutes.`
  );
}

processOrder(orderName, orderQuantity);
