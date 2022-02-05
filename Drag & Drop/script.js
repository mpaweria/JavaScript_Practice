const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})
containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const dragged = document.querySelector('.dragging')
        const parent = dragged.parentNode
        container.appendChild(dragged)
        const child = container.firstChild;
        parent.appendChild(child)
        if(container.childElementCount == 2)
        {
            container.removeChild(child)
        }
    })
})