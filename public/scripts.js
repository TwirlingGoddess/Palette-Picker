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
var addPaletteButton = document.querySelector('.add-palette-button');
var addVillageButton = document.querySelector('.add-village-button');
var palette = document.querySelector('.palette-name');
var village = document.querySelector('.village-name');
var villageList = document.querySelector('select');
let lockedColorArray = []
var unlockedColorArray = [button1, button2, button3, button4, button5, button6, button7]
var paletteArray = []

spinner.addEventListener('click', createRainbow);
lockBox.addEventListener('click', lockThisHex)
addPaletteButton.addEventListener('click', createPalette)
addVillageButton.addEventListener('click', createVillage)

function createRainbow() {
  unlockedColorArray.forEach(item => {
    if(item.value === 'unlocked'){
    let colorItem = document.querySelector(`.${item.name}`);
    let textItem = document.querySelector(`.text-${item.name}`);
    let hexCode = generateColors()
      colorItem.style.background = hexCode
      textItem.innerText = hexCode
    }
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
    event.target.style.backgroundImage = 'url(lock.svg.png)'
    lockedColorArray.push(name);
  }
  if(value === 'locked') {
    const removeColorArray = lockedColorArray.filter(color => color !== name)
    event.target.value = 'unlocked'
    event.target.style.backgroundImage = 'url(unlock.png)'
    lockedColorArray = [...removeColorArray]
  } 
}

function createPalette(event) {
  event.preventDefault();
  if(palette.value) {
      const hexCodeArray = unlockedColorArray.map(color => {
        const hexNum = document.querySelector(`.text-${color.name}`)
        return hexNum.innerText
      });
    const currentVillage = villageList.options[villageList.selectedIndex].text;
    const newPaletteObject = { village: currentVillage, title: palette.value, colors: hexCodeArray};
    palette.value = '';
    paletteArray.push(newPaletteObject)
    console.log(paletteArray)
    postToDatabase(newPaletteObject)
  }
}

function createVillage(event) {
  event.preventDefault()
  if(village.value) {
    const newOption = document.createElement('option');
    newOption.innerText = village.value
    villageList.append(newOption);
  }
  village.value = ''
}

function postToDatabase(object) {
  const url = 'http://localhost:3000/api/v1/palettes';
  const { village, title, colors } = object
  try {
    const response = fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        village,
        title,
        colors
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Email has already been used');
    }
  } catch (error) {
    alert(error.message);
  }

}