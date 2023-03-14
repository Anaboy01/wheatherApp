//http://api.weatherapi.com/v1/current.json?key=7c12949e7e084a1cb21101329231403&q=London&aqi=no

const tempField = document.querySelector('.temp') 
const locationField = document.querySelector('.timeLocation')
const dateandTimeField = document.querySelector('.timeAndDay')
const weatherField = document.querySelector('.condition p')
const searchField = document.querySelector('.searchArea')
const conImage = document.querySelector('.conditionImage')
const form = document.querySelector('form')



form.addEventListener('submit', formSubmit)
let target = 'Egypt'

const fetchResult = async(targetLocation) => {
      let url = `http://api.weatherapi.com/v1/current.json?key=7c12949e7e084a1cb21101329231403&q=${targetLocation}&aqi=no`

      const resp = await fetch(url)
      const data = await resp.json()
      console.log(data)
      
      conImage.innerHTML = ` <img src= "${data.current.condition.icon}" class = "flag-img">`
      
      let image = conImage.innerHTML
      let locationName = data.location.name
      let time = data.location.localtime;
      let temp = data.current.temp_c;
      let condition = data.current.condition.text

      updateDetails(temp,locationName,time,condition,image)
}
fetchResult(target)

function updateDetails (temp,locationName,time,condition) {
      let splitDate = time.split(' ') [0]
      let splitTime = time.split(' ') [1]
      let currentDay = getDayName(new Date (splitDate).getDay())
     

      tempField.innerText = temp + '°C'
      locationField.innerText = locationName
      dateandTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`
      weatherField.innerText = condition
}


function formSubmit(event){
      event.preventDefault()
      fetchResult(target)
      target = searchField.value
}


const getDayName = (number) =>{
      switch (number) {
            case 0:
            return 'Sunday';
            case 1:
            return 'Monday';
            case 2:
            return 'Tuesday';
            case 3:
            return 'Wednesday';
            case 4:
            return 'Thursday';
            case 5:
            return 'Friday';
            case 6:
            return 'Saturday';
                  
      }
}