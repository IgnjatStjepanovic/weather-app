let city = document.getElementById('city');
let temp = document.getElementById('temp');
let wind = document.getElementById('wind');
let humidity = document.getElementById('humidity');


fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=64d27e418c94ae459b8862f6019c05eb')
  .then(res => res.json())
  .then(data => obj = data)
  .then(data => console.log(data))
  .then(() => city.innerHTML = "Location: " + obj.name + ", " + obj.sys.country)
  .then(() => temp.innerHTML = "Temperature: " + (parseInt(obj.main.temp) - 273) + "&#8451")
  .then(() => wind.innerHTML = "Wind: " + obj.wind.speed + " m/s")
  .then(() => humidity.innerHTML = "Humidity: " + obj.main.humidity + " %")


