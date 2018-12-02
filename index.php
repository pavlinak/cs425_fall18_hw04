<?php
session_start();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>PV System</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"
   integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
   crossorigin=""/>
   <script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"
   integrity="sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA=="
   crossorigin=""></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
    <link rel="stylesheet" href="map.css"/>
</head>
<body>

<div id="mapid">
<script>
var mymap = L.map('mapid').setView([35.114477, 33.317803], 10);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZ2FjaGlsMDEiLCJhIjoiY2pvc2xwYmMxMDJmazNxcWtrejQzbGMwciJ9.mt4bKB-EsMeE1mVfacKpAQ'
}).addTo(mymap);

mymap.on('click', addMarker);

function addMarker(e) {
    // // Add marker to map at click location; add popup window
    // var newMarker = new L.marker(e.latlng).addTo(mymap)
    // .bindPopup("<input type='button' value='x' class='marker-delete-button'/>")
    // .openPopup();
    var marker = L.marker(e.latlng, {

        title: "Resource Location",
        alt: "Resource Location",
        riseOnHover: true,
        draggable: true,

    }).bindPopup('<a href="index.html">Complete Form</a>')
        .addTo(mymap)
   // marker.on("popupopen", onPopupOpen);

    return marker;

}

function onPopupOpen(){
}
</script>
</div> 
</body>
</html>