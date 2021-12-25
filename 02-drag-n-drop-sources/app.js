const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')
//События
item.addEventListener('dragstart', dragstart)      //начало перетаскивания
item.addEventListener('dragend', dragend)        //конец перетаскивания


for(const placeholder of placeholders) {

    placeholder.addEventListener('dragover', dragover)//когда находиться над тем куда переместить
    placeholder.addEventListener('dragenter', dragenter)//когда заходим на територию плэкс холдера
    placeholder.addEventListener('dragleave', dragleave)//когда выбрали но вышли 
    placeholder.addEventListener('drop', dragdrop)//когда отпустили
}


function dragstart(event) {
    //console.log('drag start', event.target)                   //описание и объект
    event.target.classList.add('hold')                          //добавление стилей(класса)
    setTimeout(() => event.target.classList.add('haid'), 0)        // кол бэк функция задержки по времени
                                                                //что бы элемент исчезал(доб.класса haid)
}


function dragend(event) {
    
    //event.target.classList.remove('hold', 'haid')  //удаление нужного класса 
    //для того что бы объект не изчезал после перетаскивания 1 вариант
    event.target.className = 'item'  //2вариант. Затирание всех классов кроме итэма

}

function dragover(event) {
    event.preventDefault()  //для перетаскивания в другой холдэр
}


function dragenter(event) {
    event.target.classList.add('hovered')

}

function dragleave(event) {
    event.target.classList.remove('hovered')
    
}

function dragdrop(event) {
    event.target.classList.remove('hovered') //перемещение
    event.target.append(item)
}