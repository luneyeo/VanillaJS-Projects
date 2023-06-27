// 달력

const currentDate = document.querySelector('.calendar--top .current-date')
const calendar = document.querySelector('.calendar--bottom')
const daysTag = calendar.querySelector('.days')
const prevNextIcons = document.querySelectorAll('.icons span')

let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();


const renderCalendar = () => {
  let firstDateofMonth = new Date(currYear, currMonth, 1).getDay(); // 이번 달 첫째 날 구하기
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // 이번 달 마지막 날 구하기
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); // 다음달 첫째 날 구하기
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // 저번 달 마지막 날 구하기

  let liTag = " ";

  // 저번 달 날짜 구하기
  for (let i = firstDateofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`; // 마지막 날짜에서 1씩 줄어들기
  }

  // 이번 달 날짜 구하기
  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                    && currYear === new Date().getFullYear() ? "active" : ""
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  // 다음 달 날짜 구하기
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth  + 1}</li>`; // 마지막 날짜에서 1씩 줄어들기
  }

  
  currentDate.innerText = `${currYear}년 ${currMonth + 1}월`
  daysTag.innerHTML = liTag;
}

renderCalendar()

prevNextIcons.forEach(function(icon){
  icon.addEventListener('click', function(){
    currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1 // 월 이동 이벤트

    // 1월보다 적거나 12월보다 커지면 연도 변경
    if(currMonth < 0 || currMonth > 11){
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar()
  })
})







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







// 날씨

const API_KEY = "a758b2bfe96799600a77b987a34a2210";


function onGeoOk(position){
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json().then(data => {
    const weatherIcon = document.querySelector('.weather-icon')
    const city = document.querySelector('.weather-info span:first-child')
    const temp = document.querySelector('.weather-info span:last-child')
  
    // weatherIcon.innerText = data.weather[0].main;




    const clearIcon = `<span class="material-symbols-outlined">sunny</span>`
    const cloudIcon = `<span class="material-symbols-outlined">cloud</span>`


    if(data.weather[0].main === 'Clear'){
      weatherIcon.innerHTML = clearIcon;
    } else if(data.weather[0].main === 'Clouds'){
      weatherIcon.innerHTML = cloudIcon;
    }

    city.innerText = data.name;
    temp.innerText = `${Math.round(data.main.temp)}°C`





  }))
}
function onGeoError(){
  alert("Can't find you, No weather for you")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);