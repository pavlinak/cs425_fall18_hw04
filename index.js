var template = '<form action="form.php" method="POST">\
    <label for="Name">Name</label>\
    <input type="text" class="form-control" id="Name" aria-describedby="name" placeholder="Enter name">\
    <br>\
    <label for="Location">Location</label>\
    <input type="text" class="form-control" id="Location" placeholder="Your Location">\
    <br>\
    <label for="Operator">Operator</label>\
    <input type="text" class="form-control" id="Operator" placeholder="Operator">\
    <br>\
    <label for="photo">Photo url:</label>\
    <input required type="url" class="form-control" id="photo" placeholder="Photo URL">\
    <br>\
    <label for="CommisionDate">Commision Date</label>\
    <input type="date" class="form-control" id="CommisionDate" placeholder="Commision Date">\
    <br>\
    <label for="Description">Description</label>\
    <input type="text" class="form-control" id="Description" placeholder="Discription">\
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
    <label for="Panel">Solar Panel Modules</label>\
    <input type="text" class="form-control" id="Panel" placeholder="Panel">\
    <br>\
    <label for="Azimuth">Azimuth Angle</label>\
    <input type="number" class="form-control" id="Azimuth" placeholder="Azimuth">\
    <br>\
    <label for="Inclination">Inclination Angle</label>\
    <input type="number" class="form-control" id="Inclination" placeholder="Inclination">\
    <br>\
    <label for="Communication">Communication</label>\
    <input type="text" class="form-control" id="Communication" placeholder="Communication">\
    <br>\
    <label for="Inverter">Inverter</label>\
    <input type="text" class="form-control" id="Inverter" placeholder="Inverter">\
    <br>\
    <label for="Sensors">Sensors</label>\
    <input type="text" class="form-control" id="Sensors" placeholder="Sensors">\
    <br>\
    <button type="submit" class="btn btn-default" id="Get">Get</button>\
    <button type="submit" class="btn btn-default" id="Create">Create</button>\
    <button type="submit" class="btn btn-default" id="Update">Update</button>\
    <button type="submit" class="btn btn-default" id="Delete">Delete</button>\
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
