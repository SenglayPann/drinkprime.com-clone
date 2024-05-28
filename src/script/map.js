function initMap() {
    var location = { lat: 37.089916, lng: -95.710007 };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 5,
        zoomControl: false,
        disableDefaultUI: true 
    });
}
