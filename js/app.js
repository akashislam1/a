const API_KEY = `18689ee1b3d406be38e656527d51b54c`;

const loadTem = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => showTem(data))
};


const showTem = temperature =>{
    setInnerTextById('city', temperature.name)
    setInnerTextById('temperature', temperature.main.temp);
    setInnerTextById('condition', temperature.weather[0].main);
    // console.log(temperature.name)
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    setInnerTextById('city', city);
    
    loadTem(city);
});

const setInnerTextById = (id, text) =>{
    document.getElementById(id).innerText = text;
}

loadTem('london')