var spinner = document.querySelector('.spinner');
var button1 = document.querySelector('.button1');
var button2 = document.querySelector('.button2');
var button3 = document.querySelector('.button3');
var button4 = document.querySelector('.button4');
var button5 = document.querySelector('.button5');
var button6 = document.querySelector('.button6');
var button7 = document.querySelector('.button7');
var rainbow = document.querySelector('.rainbows');
var lockBox = document.querySelector('.lock-box');
let lockedColorArray = []
var unlockedColorArray = [button1, button2, button3, button4, button5, button6, button7]

spinner.addEventListener('click', createRainbow);
lockBox.addEventListener('click', lockThisHex)

function createRainbow() {
  unlockedColorArray.forEach(item => {
    if(item.value === 'unlocked'){
    let colorItem = document.querySelector(`.${item.name}`);

      colorItem.style.background = generateColors()
    }

  // color1.style.background = generateColors()
  // color2.style.background = generateColors()
  // color3.style.background = generateColors()
  // color4.style.background = generateColors()
  // color5.style.background = generateColors()
  // color6.style.background = generateColors()
  // color7.style.background = generateColors()

  })
  
    
}

function generateColors() {
  const hex = '#' + Math.floor(Math.random() * 16900000).toString(16)
  return hex
}

function lockThisHex(event) {
  const name = event.target.name;
  let value = event.target.value;
  if(value === 'unlocked') {
    event.target.value = 'locked'
    lockedColorArray.push(name);
    console.log(name)
    console.log(lockedColorArray, event.target.value)
  }
  if(value === 'locked') {
    const removeColorArray = lockedColorArray.filter(color => color !== name)
    event.target.value = 'unlocked'
    lockedColorArray = [...removeColorArray]
    console.log(lockedColorArray, event.target.value);
  } 
  // const newStatus = (value ? 'unlocked' || 'locked')
  // console.log(newStatus)
}
