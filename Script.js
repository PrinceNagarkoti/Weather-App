const btn = document.getElementById("search-btn");
const input = document.getElementById("city-input");


async function getData(cityname){
    const promise=await fetch(
        `http://api.weatherapi.com/v1/current.json?key=API Key: 20eb9f048cc54c7e99380151250601&q=${cityname}&aqi=yes`
    );
    return await promise.json()
}

btn.addEventListener("click", () => {
  const value=input.value;
  const result= await getData(value);
});
