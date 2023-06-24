// 달력

const calendar = document.querySelector('.calendar--bottom')
const yearsMonth = document.querySelector('.calendar--top .years-month')




function renderCalendar(){
  let date = new Date();
  const viewYearMonth = `${date.getFullYear()}년 ${date.getMonth() + 1}월`
  yearsMonth.innerText = `${viewYearMonth}`;
}

let daysArr = '';

for( let i = 1; i <=30; i++){
  if(i == 1){
    daysArr += '[][]';
  }
  daysArr += " " + i;
  if(i % 7 == 0){
    daysArr += '\n';
  }
}


renderCalendar()
calendar.innerText = `${daysArr}`;







// 시계
const clock = document.querySelector('.clock span')

function getClock() {
  const d = new Date();
  const h = String(d.getHours()).padStart(2, "0");
  const m = String(d.getMinutes()).padStart(2, "0");
  const s = String(d.getSeconds()).padStart(2, "0");

  clock.innerText = `${h} : ${m} : ${s}` 
}
getClock()
setInterval(getClock, 1000)