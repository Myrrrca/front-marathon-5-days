const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

const dragStart = (event) => {
  event.target.classList.add('hold')
  setTimeout(() => event.target.classList.add('hide'), 0)
}

const dragEnd = (event) => {
  event.target.className = 'item'
}

const dragOver = (event) => {
  event.preventDefault()
  //console.log('dragOver');
}

const dragEnter = (event) => {
  event.target.classList.add('hovered')
}

const dragLeave = (event) => {
  event.target.classList.remove('hovered')
}

const dragDrop = (event) => {
  event.target.append(item)
  event.target.classList.remove('hovered')
}

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragOver)
  placeholder.addEventListener('dragenter', dragEnter)
  placeholder.addEventListener('dragleave', dragLeave)
  placeholder.addEventListener('drop', dragDrop)
}

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)