function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 51.40,
            lng: 0.01
        }
    });
    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [
        {  // CPB rehearsal 1
        lat: 51.419723,
        lng: -0.076623
    }, {  // CPB rehearsal 2
        lat: 51.4087375,
        lng: -0.0379927
    }, {  // BYMT
        lat: 51.3898737,
        lng: 0.0568122
    }];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

/*              var markerCluster = */
    new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });

}