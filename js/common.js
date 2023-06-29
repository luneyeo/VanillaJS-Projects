const menuBtn = document.querySelectorAll('.menu li a')
const menuItem = document.querySelectorAll('article')

for(let i = 0; i < menuBtn.length; i++){
  menuBtn[i].addEventListener('click', function(e){
    e.preventDefault();
    for(let j = 0; j < menuBtn.length; j++){
      menuBtn[j].parentNode.classList.remove('active')
      menuItem[j].style.display = 'none'
    }
    menuBtn[i].parentNode.classList.add('active')
    targetID = this.getAttribute('href');
    document.querySelector(targetID).style.display = 'block'
  })
}



// 팝업
const popup = document.querySelector('#popup')
const popupCloseBtn = document.querySelector('#popup .btn')



function popupRemove(){
  popup.remove()
}

// popupCloseBtn.addEventListener('click', popupRemove)





// 라이트, 다크 모드
const modeArea = document.querySelector('.mode-container')
const lightModeBtn = document.querySelector('.light-mode')
const darkModeBtn = document.querySelector('.dark-mode')

// 기본 라이트 모드
document.documentElement.setAttribute('color-theme', 'light');


function lightMode(){
  lightModeBtn.classList.add('active')
  darkModeBtn.classList.remove('active')
  modeArea.classList.remove('change-dark')
  modeArea.classList.add('change-light')

  document.documentElement.setAttribute('color-theme', 'light');
}
function darkMode(){
  darkModeBtn.classList.add('active')
  lightModeBtn.classList.remove('active')
  modeArea.classList.add('change-dark')
  modeArea.classList.remove('change-light')
  document.documentElement.setAttribute('color-theme', 'dark');
}

lightModeBtn.addEventListener('click', lightMode)
darkModeBtn.addEventListener('click', darkMode)
