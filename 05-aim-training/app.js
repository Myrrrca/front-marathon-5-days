const startButton = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeOnBoard = document.querySelector('#time')
const board = document.querySelector('#board')

const colors = ['#EEF3ED', '#195E94', '#47AF9F', '#CA993A', '#F3753F']

let time = 0
let score = 0

startButton.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
  }
})

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    ++score
    event.target.remove()
    createRandomCircle()
  }
})

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}

const startGame = () => {
  let isStartGame
  setInterval(() => {
    !isStartGame ? isStartGame = decreaseTime() : null
  }, 1000)
  createRandomCircle()
  setTime(time)
}

const finishGame = () => {
  timeOnBoard.parentNode.classList.add('hide')
  board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`
}

const decreaseTime = () => {
  if (time === 0) {
    finishGame()
    return true
  } else {
    let current = --time
    if (current < 10) {
    current = `${current}`
    }
    setTime(current)
    return false
  }
  
}

const setTime = value => {
  timeOnBoard.innerHTML = `00 : ${value < 10 ? `0${value}` : value}`
} 

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

const createRandomCircle = () => {
  const circle = document.createElement('div')
  const size = getRandomNumber(10, 60)
  const {width, height} = board.getBoundingClientRect()
  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)
  const color = getRandomColor()

  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.backgroundColor = `${color}`

  board.append(circle)
}

const winTheGame = () => {
  const killThemAll = () => {
    const circle = document.querySelector('.circle')

    if(circle) {
      circle.click()
    }    
  }

  setInterval(killThemAll, 1)
}

