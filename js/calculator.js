const link = document.querySelector('#calculator a')

function linkGo(event){
  console.log(event)
}

link.addEventListener('click', linkGo)