const ipAddressEl = document.getElementById("ipAddress");
const locationEl = document.getElementById("location");
const timezoneEl = document.getElementById("timezone");
const ispEl = document.getElementById("isp");
const btnEl = document.getElementsByClassName("btn")[0];

let searchInputValue = "";
let map = L.map('map');

function makeIpifyAjaxCall(){
  searchInputValue = getSearchInputValue();
  fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_rfoXPS0FFNi2Mrp6RBUTDxD8ixfxq&ipAddress=${searchInputValue}&domain=${searchInputValue}`)
    .then(res => {
      return res.json();
    })
    .then(jsonData => {
      updateResultDisplay(jsonData)
      updateMap(jsonData.location.lat, jsonData.location.lng);
    })
}

function getSearchInputValue(){
  return document.getElementById("s").value;
}

function updateResultDisplay(data){
  ipAddressEl.innerText = data.ip;
  locationEl.innerText = data.location.city;
  timezoneEl.innerText = `UTC ${data.location.timezone}`;
  ispEl.innerText = data.isp;
}

function updateMap(lat,lng){
  map.setView([lat, lng], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    dragging: true,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.marker([lat, lng]).addTo(map);
}

btnEl.addEventListener('click',()=>{
makeIpifyAjaxCall();
})

document.getElementById("s").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    makeIpifyAjaxCall();
  }
});

makeIpifyAjaxCall();
