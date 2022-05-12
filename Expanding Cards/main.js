const panels = document.querySelectorAll('.panel')


// вешаем событие на каждый элемент
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})


// удаляем слас актив
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

