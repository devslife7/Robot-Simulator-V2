document.addEventListener("DOMContentLoaded", () => {
  createGrid()
  renderBot(currentPosition)

  const moveUl = document.getElementById('moves-container')
  const moveButton = document.getElementById('move-button')

  document.addEventListener('keydown', (e) => {
    if (e.key == "ArrowRight" || e.key == "ArrowLeft" || e.key == "ArrowUp" || e.key == "ArrowDown"){
      const keyPress = e.key.slice(5).toLowerCase()
      
      const moveLi = document.createElement('li')
      moveLi.textContent = keyPress
      moveUl.append(moveLi)
    }

    if (e.key == "Delete"){
      moveUl.removeChild(moveUl.lastChild)
    }
  })

  moveButton.addEventListener('click', (r) => {
    const firstMoveText = moveUl.firstChild.textContent.toLowerCase()
    move(firstMoveText)

    moveUl.firstChild.remove()
  })
})
