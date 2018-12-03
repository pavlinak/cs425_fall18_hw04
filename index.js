var template = '<form action="form.php" method="POST">\
    <label for="InputName">Name</label>\
    <input type="text" class="form-control" id="InputName" aria-describedby="name" placeholder="Enter name">\
    <br>\
    <label for="InputLocation">Location</label>\
    <input type="text" class="form-control" id="InputLocation" placeholder="Your Location">\
    <br>\
    <label for="InputOperator">Operator</label>\
    <input type="text" class="form-control" id="InputOperator" placeholder="Operator">\
    <br>\
    <label for="CommisionDate">Commision Date</label>\
    <input type="date" class="form-control" id="CommisionDate" placeholder="Commision Date">\
    <br>\
    <label for="InputDescription">Description</label>\
    <input type="text" class="form-control" id="InputDiscription" placeholder="Discription">\
    <br>\
    <label for="SystemPower">System Power</label>\
    <input type="number" class="form-control" id="SystemPower" placeholder="System Power">\
    <br>\
    <label for="AnnualProduction">Annual Production</label>\
    <input type="number" class="form-control" id="AnnualProduction" placeholder="Annual Production">\
    <br>\
    <label for="CO2Avoided">CO2 Avoided</label>\
    <input type="number" class="form-control" id="CO2Avoided" placeholder="CO2 Avoided">\
    <br>\
    <label for="Reimbursement">Reimbursement</label>\
    <input type="number" class="form-control" id="Reimbursement" placeholder="Reimbursement">\
    <br>\
    <label for="InputPanel">Solar Panel Modules</label>\
    <input type="text" class="form-control" id="InputPanel" placeholder="Panel">\
    <br>\
    <label for="InputAzimuth">Azimuth Angle</label>\
    <input type="number" class="form-control" id="InputAzimuth" placeholder="Azimuth">\
    <br>\
    <label for="InputInclination">Inclination Angle</label>\
    <input type="number" class="form-control" id="InputInclination" placeholder="Inclination">\
    <br>\
    <label for="InputCommunication">Communication</label>\
    <input type="text" class="form-control" id="InputCommunication" placeholder="Communication">\
    <br>\
    <label for="InputInverter">Inverter</label>\
    <input type="text" class="form-control" id="InputInverter" placeholder="Inverter">\
    <br>\
    <label for="InputSensors">Sensors</label>\
    <input type="text" class="form-control" id="InputSensors" placeholder="Sensors">\
    <br>\
    <button type="submit" class="btn btn-default" id="save">Save</button>\
    <button type="submit" class="btn btn-default" id="delete">Delete</button>\
    <button type="submit" class="btn btn-default" id="change">Change</button>\
    <button type="submit" class="btn btn-default" id="create">Create</button>\
    <button type="submit" class="btn btn-default" data-dismiss="modal" id="close">Close</button>\
</form>';

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
    }).bindPopup(template)
        .addTo(mymap)
    return marker;
}