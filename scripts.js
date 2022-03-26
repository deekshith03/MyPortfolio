const typeWriter = document.getElementById("typewriter-text");
const text = "Computer Science UnderGraduate";
typeWriter.innerHTML = text;


typeWriter.style.setProperty("--characters", text.length);

function getLocation() {


    let blah=document.getElementById("bottom-pos");

    document.getElementById("mapholder").style.opacity=1;

    blah.style.justifyContent="space-around";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    latlon = new google.maps.LatLng(lat, lon)
    mapholder = document.getElementById('mapholder')
    mapholder.style.height = '170px';
    mapholder.style.width = '170px';
	mapholder.style.border = '2px solid balck';
    mapholder.style.margin = '10px';

    var myOptions = {
    center:latlon,zoom:12,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:false,
    disableDefaultUI: true,
    }
    
    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    var marker = new google.maps.Marker({position:latlon,map:map,title:"Reach Me Out Here"});
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}