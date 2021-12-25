const upBtn = document.querySelector('.up-button')//получение кнопок вверх
const downBtn = document.querySelector('.down-button')//вниз
const sidebar = document.querySelector('.sidebar')//сам блок слева
const container = document.querySelector('.container')//для перещений картинки
const mainSlide = document.querySelector('.main-slide')// сам блок для подсчёта кол. слайддов
const slidesCount = mainSlide.querySelectorAll('div').length //получкения массива коллеций и дивов.Для получ.числа функ len

let activeSlideIndex = 0//переменная текущего слайда

sidebar.style.top = `-${(slidesCount - 1)*100}vh`//управление левым блоком, стилями и просчёт размерности.просчёт в обратных кавычках!
//mainSlide.style.top = `-${(slidesCount-1)*100}vh`


upBtn.addEventListener('click', () => {//кол бэк функ. для кнопок связанное с событием нажатия
 changeSlide('up')//если нажали на верх.кнопку

})

downBtn.addEventListener('click', () => {//
    changeSlide('down')//если нажали на нижнюю кнопку
    
})

document.addEventListener('keydown', event => {
 if (event.key === 'ArrowUp') {
    changeSlide('up')

 } else if (event.key === 'ArrowDown') {
    changeSlide('down')

 }

})//пролистывание картинок по нажатий на клаве стрелочек

function changeSlide(direction) {//функ. для направления нажатий кнопок(изменения слайдов)
//позволяет следить какой слайд сейчас активный
 if (direction === 'up') {//если нажали вверхнюю кнопку
    activeSlideIndex++      //то к активному слайду добавляеться единица
    if(activeSlideIndex === slidesCount)//что бы не выйти за рамки слайда
        //если после прибавления к активному слайду 1,значение стало равное переменной подсчёта кол сладков
    {
        activeSlideIndex = 0//мы текущий слайд обнуляем
    }
    
    } else if (direction === 'down') {//условие если нажали кнопку вниз
      activeSlideIndex--         //проход по слайдам по кнопке вниз
      if (activeSlideIndex < 0) {//проверка если активный слайд меньше 0(а переменная по умолчанию равна 0)
        activeSlideIndex = slidesCount - 1  //так как кол.слайдов может ровняться этому значению

      }

    }

    const height = container.clientHeight//переменная для того что бы просчитть нужно смещение картинки
    
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
     //анимация. Что бы картинка перемещалась будет использоваться свойство
    //транслейт У, для просчёта c с помощью переменной размера(heigt)
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}