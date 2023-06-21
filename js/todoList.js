
const inputBox = document.querySelector('.input-area input')
const addBtn = document.querySelector('.input-area span')
const listItems = document.querySelector('.list-items')
const allDeleteBtn = document.querySelector('.all-delete')


addBtn.addEventListener('click', function(){

  // 할일 리스트
  const listItem = document.createElement('li')
  listItem.classList.add('list-item')

  // 입력값
  const inputValue = document.createElement('span')
  inputValue.classList.add('input-value')
  inputValue.textContent = inputBox.value

  // 삭제 버튼
  const deleteBtn = document.createElement('span')
  deleteBtn.classList.add('material-symbols-outlined')
  deleteBtn.textContent = 'close'
  
  if(!inputBox.value){

  }
  else {


    listItem.appendChild(inputValue)
    listItem.appendChild(deleteBtn)
    listItems.appendChild(listItem)

    inputBox.value = '';
  }

  // 리스트 클릭시 취소선
  listItem.addEventListener('click', function(){
    inputValue.style.textDecoration = 'line-through'
  })

  // 삭제 버튼 클릭시 사라짐
  deleteBtn.addEventListener('click', function(){
    this.parentNode.remove()
  })

  // 전체 삭제 버튼 클릭시
  allDeleteBtn.addEventListener('click', function(){
    listItem.remove()
  })


})


