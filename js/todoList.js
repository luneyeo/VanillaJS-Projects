
const inputForm = document.querySelector('.input-area')
const inputBox = document.querySelector('.input-area input')
const addBtn = document.querySelector('.input-area span')
const listItems = document.querySelector('.list-items')
const allDeleteBtn = document.querySelector('.all-delete')


const TODOS_KEY = "todos"
// 스토리지에 저장
const todos = []
function saveTodos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function deleteTodo(){
  this.parentNode.remove()
}

function offToggle(){
  this.firstElementChild.classList.toggle('off')
}

function addTodo(){
  // 할일 리스트
  const listItem = document.createElement('li')
  listItem.classList.add('list-item')

  // 입력값
  const inputValue = document.createElement('span')
  inputValue.classList.add('input-value')
  inputValue.textContent = inputBox.value
  todos.push(inputBox.value)

  // 삭제 버튼
  const deleteBtn = document.createElement('span')
  deleteBtn.classList.add('material-symbols-outlined')
  deleteBtn.textContent = 'close'

  listItem.appendChild(inputValue)
  listItem.appendChild(deleteBtn)
  listItems.appendChild(listItem)

  deleteBtn.addEventListener('click', deleteTodo) // 버튼 클릭시 삭제
  listItem.addEventListener('click', offToggle) // 리스트 클릭시 취소선
  allDeleteBtn.addEventListener('click', function(){ // 전체 삭제 버튼 클릭시 전체 삭제
    listItem.remove()
  })
}

// 입력창 초기화, 자동 포커스
function resetInputValue(){
  inputBox.value = '';
  inputBox.focus()
  saveTodos()
}

// 제출
function submitValue(){
  if (!inputBox.value){

  } else{
    addTodo()
    resetInputValue()
  }
}

// 엔터 눌러서 제출
function enterSubmitValue(e){
  e.preventDefault()
  
  if(!inputBox.value){

  }
  else{
    addTodo()
    resetInputValue()
  }
}

addBtn.addEventListener('click', submitValue)
inputForm.addEventListener('submit', enterSubmitValue)


const savedTodos = localStorage.getItem(TODOS_KEY)

resetInputValue()