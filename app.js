let city = document.getElementById("city");
let temp = document.getElementById("temp");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");

function search() {
  citySearch = document.getElementById("citysearch").value;
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      citySearch +
      "&APPID=64d27e418c94ae459b8862f6019c05eb"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      city.innerHTML = "Location: " + data.name + ", " + data.sys.country;
      temp.innerHTML =
        "Temperature: " + (parseInt(data.main.temp) - 273) + "&#8451";
      wind.innerHTML = "Wind: " + data.wind.speed + " m/s";
      humidity.innerHTML = "Humidity: " + data.main.humidity + " %";
      pressure.innerHTML = "Humidity: " + data.main.pressure + " mbar";
      citySearch = document.getElementById("citysearch").value = "";      
    });
}

search();
