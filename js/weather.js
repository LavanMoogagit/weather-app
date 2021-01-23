//getting all the variables from html document

var description = document.querySelector('.description');
var temperature = document.querySelector('.temperature');
var windSpeed = document.querySelector('.windSpeed');
var cityName = document.querySelector('.cityName');
var humidity = document.querySelector('.humidity');
var pressure = document.querySelector('.pressure');
var button = document.querySelector('.button')
var cityInputValue = document.querySelector('.cityInputValue')


button.addEventListener('click',function (){
    console.log(cityInputValue.value);
    // console.log("https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=cfcf36bf1c1f6180394b4252624cafbe");
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInputValue.value+'&appid=cfcf36bf1c1f6180394b4252624cafbe')
    .then(res => {
        if(res.ok)
        console.log("Fetch Successful");
        else
        console.log("Fetch Unsuccessful");
    return res.json();
    })
    .then(data => {
        // console.log(data);
        // console.log("\n");
        cityName.innerHTML = data['name'];
        temperature.innerHTML = data['main']['temp'];
        description.innerHTML = data['weather']['0']['description'];
        windSpeed.innerHTML = data['wind']['speed'];
        humidity.innerHTML = data['main']['humidity'];
        pressure.innerHTML = data['main']['pressure'];

        setTimeout(function(){ alert("Refresh the page");window.location.reload(); },1000);        
   
    })
    .catch(err => {
        setTimeout(function(){ alert("Enter a Valid City");window.location.reload(); },100);        
        
    });
})
