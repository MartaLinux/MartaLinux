const board = document.querySelector('#board')//доступ до доски
const colors = ['#fe7e00', '#fe0002', '#ff007f', '#ff01ff', '#8001ff', '#0000fd', '#0080ff',
'#02ffff', '#00fe82', '#01ff00', '#81fe00', '#81fc03', '#fdff06', '#ff9934', '#fcb764',
'#ffcc9a', '#ffe5cc', '#ff6668', '#ffcccd', '#ff68b5', '#fecce5', '#ff67ff', '#fcccfe', '#b265ff',
'#cc9af9', '#6667ff', '#9998fe', '#cde7ff', '#98fffe', '#cdffff', '#68ffb3',
'#98fecc', '#99fe98', '#cdffcc', '#ccff9a', '#ffff67', '#fcffd1', '#fe0002',
'#0000fd']//массив с выборкой цвета для собитий с мышью
const SQUARES_NUMBER = 10000//управление квадратами программно(кол.)
//в зависимости от числа генерируеться доска

var newboard = [];
for (let i = 0; i < SQUARES_NUMBER; i++) { //ключ.слово лэт для создания переменной для итерации(которую можно менять)
    //итерация будет пробегать по переменной сквэр намбер то кол. раз сколько в ней указанно(450) 
    const square = document.createElement('div')
    //для того что бы менять в штмл елемент динамически.Указаываеться какой тэг нужно создать
    square.classList.add('square')//для того что бы получился квадрат

    square.addEventListener('mouseover', setColor) //кол бэк функция с добавлением события наведения мыши
    
    square.addEventListener('mouseleave', removeColor)  //событие когда мышь убираеться
    


    board.append(square)//для того что бы елемент в штмл был не только виртуальным
}

//функция указывает цвет квадратов раскрашивает их при наведении мыши
function setColor(event) {
 const element =  event.target  
 const color = getRandomColor()   
 element.style.backgroundColor = color
 element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` //динимаческий подбор цветов и светящийся эффект
}
//функ. для случая когда мышь убираеться
function removeColor(event) {
 const element =  event.target    
 element.style.backgroundColor = '#1d1d1d' 
 element.style.boxShadow = `0 0 2px #000` //что бы цвет потом исчезал после того как мышь убрали
}
//функция случайного выбора цвета
function getRandomColor() {
 
 //с помощью мат объекта высчитываеться длина массива цветов и передаеться массив с рандомной выборкой цвета
 return colors[Math.floor(Math.random() * colors.length)]//возврат массива цветов с полученным индексом
}