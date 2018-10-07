var spinner = document.querySelector('.spinner');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var color3 = document.querySelector('.color3');
var color4 = document.querySelector('.color4');
var color5 = document.querySelector('.color5');

spinner.addEventListener('click', generateColors)

function generateColors() {
  // const alphabet = [a, b, c, d, e, f]
  const hex = '#' + Math.floor(Math.random() * 16900000).toString(16)
  console.log(hex)
}