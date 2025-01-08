const btn = document.getElementById("search-btn");
const input = document.getElementById("city-input");

const cityName=document.getElementById('city-name');
const cityTime=document.getElementById('city-time');
const cityTemp=document.getElementById('city-temp');

async function getData(cityname) {
  const promise = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=20eb9f048cc54c7e99380151250601&q=${cityname}&aqi=yes`
  );
  return await promise.json();
}

btn.addEventListener("click", async () => {
  const value = input.value.trim();
  if (!value) {
      alert("Please enter a city name.");
      return;
  }
  try {
      const result = await getData(value);
      cityName.innerText = `${result.location.name}, ${result.location.region}-${result.location.country}`;
      cityTime.innerText=result.location.localtime;
      cityTemp.innerText=result.current.temp_c;
  } catch (error) {
      alert("Failed to fetch weather data. Please check the city name or try again later.");
  }

});

// const btnloc=document.getElementById('button-loc');
// function getLoc(position){
//   console.log(position);
  
// }
// function errMsg(){
//   console.log("error");
  
// }
// btnloc.addEventListener("click",async()=>{
//   navigator.geolocation.getCurrentPosition(getLoc,errMsg);
// });
