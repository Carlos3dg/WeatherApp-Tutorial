//To import the UI class from the ui.js
const { UI } = require('./ui');
const ui = new UI();
//To import the Storage class from the storage.js
const { Storage } = require('./storage');
const storage = new Storage();
const { city, countryCode } = storage.getDataLS(); //We get two values from this function: city and countryCode (This function throw default values if LS is empty)
//To import the Weather class from weatherRequest.js
const { Weather } = require('./weatherRequest');
const weather = new Weather(city, countryCode); //Create a new instance with the two values from the storage.getDataLS() as parameters
//Import the css file
require('./index.css');
//This function is executed everytime that the DOM content is loaded
async function fetchWeather() {
    //Get data from the getWeather method in the Weather class (Make request)
    const data = await weather.getWeather();
    //Call the render method to insert the previous data in DOM
    ui.render(data); //Here the value of the parameter is a json object (The API data)
}
//Event to get the API data requiere when the DOM is loaded
document.addEventListener('DOMContentLoaded', fetchWeather);

//Event to insert the weather country that the user insert in the form
document.getElementById('w-form').addEventListener('submit', (e) => {
    e.preventDefault();
    //Save inputs values provided by the user
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    //Call changeCountry method from weather class to change the propertie values
    weather.changeCountry(city, countryCode);
    //Call saveDataLS method to set the values provided by the user in LS
    storage.saveDataLS(city, countryCode);
    //Call again the fetchWeather function to make the request again but with the new values
    fetchWeather();

    document.getElementById('w-form').reset();
});

