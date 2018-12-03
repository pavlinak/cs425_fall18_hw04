var mymap = L.map('mapid').setView([35.114477, 33.317803], 10);
mymap.on('click', addMarker);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZ2FjaGlsMDEiLCJhIjoiY2pvc2xwYmMxMDJmazNxcWtrejQzbGMwciJ9.mt4bKB-EsMeE1mVfacKpAQ'
}).addTo(mymap);

function addMarker(e) {
    var marker = L.marker(e.latlng, {
        title: "Resource Location",
        alt: "Resource Location",
        riseOnHover: true,
        draggable: true,
    }).bindPopup('<a href="form.html">Complete Form</a>')
        .addTo(mymap)
    return marker;
}
