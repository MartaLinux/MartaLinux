const startBtn = document.querySelector('#start')//получение первой кнопки

const screens = document.querySelectorAll('.screen') //получение экранов

const timeList = document.querySelector('#time-list')//получение кнопок для списка с выбором времени
//с помощью получения айди классов
const timeEl = document.querySelector('#time') //получение остаточного времени игроку


const colors = ['#fe7e00', '#fe0002', '#ff007f', '#ff01ff', '#8001ff', '#0000fd', '#0080ff',
'#02ffff', '#00fe82', '#01ff00', '#81fe00', '#81fc03', '#fdff06', '#ff9934', '#fcb764',
'#ffcc9a', '#ffe5cc', '#ff6668', '#ffcccd', '#ff68b5', '#fecce5', '#ff67ff', '#fcccfe', '#b265ff',
'#cc9af9', '#6667ff', '#9998fe', '#cde7ff', '#98fffe', '#cdffff', '#68ffb3',
'#98fecc', '#99fe98', '#cdffcc', '#ccff9a', '#ffff67', '#fcffd1', '#fe0002',
'#0000fd']//массив с выборкой цвета для собитий с мышью



const board = document.querySelector('#board')//получение доски для добавления кругов

let time = 0//переменная для самого времени так что бы она могла меняться
let score = 0 //переменная подсчёта кликов по кружкам на доске

startBtn.addEventListener('click', (event) => {//получая объект при событии клика
event.preventDefault()//отменяем поведение по умолчанию
 screens[0].classList.add('up')//добавление второго экрана, со списком
})

timeList.addEventListener('click', (event) => {
//Деллигирование событий
 if (event.target.classList.contains('time-btn')) { 
     //если елемент выбрали и у него есть нужный класс то значит это  кнопки
     time = parseInt(event.target.getAttribute('data-time'))
     //для каждой кнопки получение дата атрибута, и преобразование строки в число, реализация выбора времени
     screens[1].classList.add('up')//изменение экрана 2 с добавлением 3-го
     startGame()
 }
})


//обработка клика по кругу на самой доске
board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')){
        score++
        event.target.remove()//затирание предидущего круга 
    }else{
        var circle =  board.querySelector('.circle')
        circle.remove();
    }
    
    createRandomCircle()//создаёться новый кружок
})



//DEBUG
//startGame()

function startGame() {
 //задаёться таймер будуд исполняться разные функции в зависимости от заданного времени
 setInterval(decreaseTime, 1000)
 createRandomCircle()
 setTime(time)
}

function decreaseTime() {
 if (time === 0) {
    finishGame()//если время игры истекло то игра завершаеться
 } 
 else {//в противном случае начинаеться
    let current = --time//переменная текущего времени c декриментом отпеременной времени(отсчёт)
    //для красивого отображения времени
    if (current < 10) {
     current = `0${current}`
    }
    setTime(current)
   }
}  
 
//функция для сокращения кода
function setTime(value) {
    timeEl.innerHTML = `00:${value}`//для того что бы не начинать каждую игру с первого экрана
}
//функция завершает игру
function finishGame() {
    timeEl.parentNode.remove()//скрытие отсчёта времени для игрока(удаление родителя спана)
    board.innerHTML = `<div><h1>Your score:<span class="primary"> ${score} </span></h1><br><a href="#" onclick="location.reload()" class="restart" id = "start">Restart</a></div>`
    //не даст появиться новым елементам,и выведет рез.игры
}
//функция добавляет круги
function createRandomCircle() {
    const circle = document.createElement('div')//получение шаров
    const size = getRandomNumber(10, 60) //сам диапозон кружков 
    const {width, height} = board.getBoundingClientRect()//получение размерности доски что бы координаты не вышли за рамки(Деструктуризация)
    
    //координаты кружков горизонталь вертикаль
    const x = getRandomNumber(0, width - size) //парам.по вертикали отнимая длину диапозона координаты вмещаються на доске
    const y = getRandomNumber(0, height - size)



    circle.classList.add('circle')//добавление класса, создание круга
    circle.style.width = `${size}px`//размерность точек 
    circle.style.height = `${size}px`//с заданными диапоз.
    circle.style.top = `${y}px`// расположение круга вертикаль
    circle.style.left = `${x}px`//расположение круга горизонталь
    circle.style.backgroundColor= getRandomColor()
    
    board.append(circle)
}

//функция для получения случайной размерности кругов в заданном диапозоне
function getRandomNumber (min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function getRandomColor() {
 
    //с помощью мат объекта высчитываеться длина массива цветов и передаеться массив с рандомной выборкой цвета
    return colors[Math.floor(Math.random() * colors.length)]//возврат массива цветов с полученным индексом
   }