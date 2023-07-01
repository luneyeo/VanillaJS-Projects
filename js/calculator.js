// 1. 버튼 클릭할 때마다 input에 값 추가하기
// 2. 각 operator에 할일 주기
// 3. 사칙연산 함수
// 4. 최종 값을 result에 넣기






const inputNum = document.querySelector('.display-result .input-num')
const resultNum = document.querySelector('.result')
const numBtnItems = document.querySelectorAll('.button__row button')
const operator = document.querySelectorAll('button.operator')



function onClickBtn(e){
  let btnText = e.target.textContent
  // let inputNumText = inputNum.innerText;

  inputNum.innerText += btnText;

  console.log(btnText)
}


numBtnItems.forEach(function(btn){
  btn.addEventListener('click', onClickBtn)
})









