let searchInputValue = "";

makeIpifyAjaxCall();

function makeIpifyAjaxCall(){
  searchInputValue = getSearchInputValue();
  fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_rfoXPS0FFNi2Mrp6RBUTDxD8ixfxq&ipAddress=${searchInputValue}`)
    .catch(e => {
      console.log(e);
    })
    .then(res => {
      console.log(res);
    })
}

function getSearchInputValue(){
  return document.getElementById("s").value;
}

var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);