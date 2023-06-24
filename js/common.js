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