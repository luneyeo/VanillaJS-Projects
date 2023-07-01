// 달력
const currentDate = document.querySelector('.calendar__top .current-date')
const calendar = document.querySelector('.calendar__bottom')
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


  // 날짜 클릭하면 click 클래스 추가
  for(let i = 0; i < daysTag.children.length; i++){
    daysTag.children[i].addEventListener('click', function(e){
      e.preventDefault();

      for(let j = 0; j < daysTag.children.length; j++){
        daysTag.children[j].classList.remove('click')
      }

      this.classList.add('click')
    })

  }


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
const weatherSunny = document.querySelector('.weather span.sunny')


function onGeoOk(position){

  weatherSunny.remove()


  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric&lang=kr`
  fetch(url).then(response => response.json().then(data => {
    const weather = document.querySelector('.weather-icon')
    const city = document.querySelector('.weather-info span:first-child')
    const temp = document.querySelector('.weather-info span:last-child')
    let weatherCondition = data.weather[0].main

    
    city.innerText = data.name;
    temp.innerText = `${Math.round(data.main.temp)}°C`



    // 날씨 아이콘 - 수정 예정
    if(weatherCondition === 'Clouds'){
      weather.innerHTML = `<span class="material-symbols-outlined">cloudy</span>`;
    } else if (weatherCondition === 'Sunny') {
      weather.innerHTML = `<span class="material-symbols-outlined">sunny</span>`;
    } else if (weatherCondition === 'Rain') {
      weather.innerHTML = `<span class="material-symbols-outlined">rainy</span>`;
    } else {
      weather.innerHTML = `<span style="font-size: 17px;">${data.weather[0].description}</span>`;
    }
  }))
}

function onGeoError(){
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);