const API_KEY = `c10ca9287aa90932f5077f0d8d074999&units=metric`;
const loadTemp = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTempareture(data));
}
const displayTempareture = data => {
    const tempareture = document.getElementById('tempareture');
    console.log(data);
    tempareture.innerText = data.main.temp;
    setInnerTextById('tempareture',data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
}
const setInnerTextById = (id, text) => {
    const tempareture = document.getElementById(id);
    tempareture.innerText = text;
}
document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    city = searchField.value;
    document.getElementById('city').innerText = city;
    loadTemp(city);
})
loadTemp('dhaka');