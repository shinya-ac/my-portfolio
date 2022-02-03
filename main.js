const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const text = document.createElement("p");
const textContainer = document.getElementById("img-box");

let img;

button1.onclick = function () {
  img = document.getElementById("image_file");
  img.src = "loveP1.jpg";
  text.className = "text1";
  text.textContent = "Pizzaを食べる😃";
  textContainer.after(text);
};

button2.onclick = function () {
  img = document.getElementById("image_file");
  img.src = "loveP2.jpg";
  text.className = "text2";
  text.textContent = "Pizzaを食べる🤗";
  textContainer.after(text);
};

button3.onclick = function () {
  img = document.getElementById("image_file");
  img.src = "loveP3.jpg";
  text.className = "text3";
  text.textContent = "Pizzaを食べる😂";
  textContainer.after(text);
};
