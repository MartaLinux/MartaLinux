const projectModalSliderOne = document.querySelector('#personal-project-slider-one');
const projectModalDragAndDrop = document.querySelector('#personal-project-drag-and-drop');
const projectModaSliderTwo = document.querySelector('#personal-project-slider-two');
const projectModalPixes = document.querySelector('#personal-project-pixes');
const projectModalClickerGame = document.querySelector('#personal-project-clicker-game');
const projectModalSpinnerAnimation = document.querySelector('#personal-project-spinner-animation');
const projectModalPercent = document.querySelector('#personal-project-percent');
const projectModalHashCash=document.querySelector("#personal-project-hash-cash");
const projectModalWebRezume = document.querySelector("#personal-project-web-sait-artist");
const projectModalWebRezPrint =document.querySelector("#personal-project-web-rezumet-artist");
const projectModalReact = document.querySelector("#personal-project-react-game");
const projectModalLambda = document.querySelector("#personal-project-lamba-func");

const projectOpenBtnSliderOne = document.querySelector('#personal-project-slider-one-btn');
const projectOpenBtnDragAndDrop = document.querySelector('#personal-project-drag-and-drop-btn');
const projectOpenBtnSliderTwo = document.querySelector('#personal-project-slider-two-btn');
const projectOpenBtnPixes = document.querySelector('#personal-project-pixes-btn');
const projectOpenBtnClickerGame = document.querySelector('#personal-project-clicker-game-btn');
const projectOpenBtnSpinnerAnimation = document.querySelector('#personal-project-spinner-animation-btn');
const projectOpenBtnPercent = document.querySelector('#personal-project-procent-btn');
const projectOpenBtnHashCash = document.querySelector("#personal-project-hash-cash-btn");
const projectOpenBtnWebRezume = document.querySelector("#personal-project-web-rezume-btn");
const projectOpenBtnWebRezPrint= document.querySelector('#personal-project-web-rez-btn');
const projectOpenBtnReact = document.querySelector("#personal-project-react-btn");
const projectOpenBtnLambda = document.querySelector("#personal-project-lambda-btn");

const projectModals = [ projectModalSliderOne, projectModalDragAndDrop, projectModaSliderTwo,
 projectModalPixes, projectModalClickerGame, projectModalSpinnerAnimation, 
 projectModalPercent, projectModalHashCash, projectModalWebRezume,
  projectModalWebRezPrint,projectModalReact, projectModalLambda];
  
const projectBtns = [ projectOpenBtnSliderOne, projectOpenBtnDragAndDrop, projectOpenBtnSliderTwo,
 projectOpenBtnPixes, projectOpenBtnClickerGame, projectOpenBtnSpinnerAnimation, 
 projectOpenBtnPercent,projectOpenBtnHashCash, projectOpenBtnWebRezume, 
 projectOpenBtnWebRezPrint, projectOpenBtnReact, projectOpenBtnLambda];

projectBtns.forEach((btn, index) => {
    const projectModal = projectModals[index];

    if (btn) {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            projectModal.classList.add(MODAL_ACTIVE_CLASS);

            document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
        })
    }
});