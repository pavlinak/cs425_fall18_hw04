var zoom = 10;
var lat = 35.1522437;
var lon = 33.3751678;
var pv_id = 0;
var mymap = L.map('mapid').setView([lat, lon], zoom);
var php_file = "";
var pruneCluster = new PruneClusterForLeaflet();
var newMarker;
var MarkerLocation;
document.getElementById("mapid").onload = function loadMap(){
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZ2FjaGlsMDEiLCJhIjoiY2pvc2xwYmMxMDJmazNxcWtrejQzbGMwciJ9.mt4bKB-EsMeE1mVfacKpAQ'
}).addTo(mymap);
};

mymap.on('click', onMapClick);
var modal = document.getElementById('myModal');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function onMapClick(e) {
    var lat = e.latlng.lat;
    var lon = e.latlng.lng;
    var data = {
        name: "A",
        location: "Here",
        operator: "Company",
        commission: "December 04, 2018 03:24:00",
        description: "Description",
        power: "x kWp",
        production: "x kWp",
        cO2: "x tons per annum",
        reimbursement: "x euro",
        modules: "x moodules",
        azimuth: "x",
        inclination: "x",
        communication: "x communication",
        inverter: "x inverter",
        sensors: "x sensor"

    };

    edit(lat, lon, 0, data);

}

function edit(lat, lon, isset, data){
    var myform = document.createElement("form"); 
    myform.setAttribute('method',"post");
    myform.setAttribute('action',"submit.php");


    var i = document.createElement("name"); //input element, text
    i.setAttribute('type',"text");
    


}