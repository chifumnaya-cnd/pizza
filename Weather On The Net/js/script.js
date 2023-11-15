const api = {
    key:"971bc5a5ab9bab301b06e7dd2a50f29d",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value); //
    }
}

// Equal to function
function add(a, b) {
    return a + b
}

var m = "Market"

console.log("Jasper " + "is going to the " + m)
console.log(`Jasper is going to the ${m}`)

function getResults (query){

    if(query === ""){
        alert("Search box is empty")
        return;
    }

    // OBJECT
    // PARAMETER
    // API (basics)
    // PROMISE

    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(w => {
            return w.json();
        }).then(displayResults) 
}

function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
     
    
    let now = new Date(weather.dt * 1000);
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);


    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>℃</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}℃ / ${Math. round (weather.main.temp_max)}℃`;
}

function dateBuilder(d){

    console.log(d.getDate())

    let months = ["January", "Febuary", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
};