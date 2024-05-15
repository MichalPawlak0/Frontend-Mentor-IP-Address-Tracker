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

let map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});