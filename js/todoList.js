
const inputBox = document.querySelector('.input-area input')
const addBtn = document.querySelector('.input-area span')
const listItems = document.querySelector('.list-items')
const allDeleteBtn = document.querySelector('.all-delete')


function submitValue(){

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
    // alert('내용을 입력하세요')
  }
  else {
    listItem.appendChild(inputValue)
    listItem.appendChild(deleteBtn)
    listItems.appendChild(listItem)

    inputBox.value = '';
    inputBox.focus()
  }

  // 리스트 클릭시 취소선
  listItem.addEventListener('click', function(){
    inputValue.classList.toggle('off')
  })

  // 삭제 버튼 클릭시 사라짐
  deleteBtn.addEventListener('click', function(){
    this.parentNode.remove()
  })

  // 전체 삭제 버튼 클릭시
  allDeleteBtn.addEventListener('click', function(){
    listItem.remove()
  })
}

addBtn.addEventListener('click', submitValue)
inputBox.addEventListener('keyup', function(e){
  if(e.keyCode === 13){
    submitValue()
  }
})


