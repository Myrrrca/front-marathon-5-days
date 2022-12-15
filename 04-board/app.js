const board = document.querySelector('#board')
const colors = ['#517974', '#949F49', '#DAD67A', '#B9B264', '#82523F']
const myMin = 60
const myMax = 700

const setRandSquaresNumber = () => {
  let sqauresNumber = Math.floor(Math.random() * (myMax - myMin + 1) + myMin)
  console.log(sqauresNumber);
  if (sqauresNumber % 20 !== 0) {
    const sqauresNumberMod = sqauresNumber % 20
    console.log(sqauresNumberMod);
    sqauresNumber = sqauresNumber - sqauresNumberMod
  }
  console.log(sqauresNumber);
  return sqauresNumber
}

const SQUARES_NUMBER = setRandSquaresNumber()

const setColor = event => {
  const element = event.target
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color} , 0 0 10px ${color}`
}

const removeColor = event => {
  const element = event.target
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', setColor)

  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}