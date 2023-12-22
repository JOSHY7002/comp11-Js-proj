const images = [king.png, pawn.png, Queen.png, knight.png];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = images[randomNumber];
  color.textContent = images[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * images.length);
}