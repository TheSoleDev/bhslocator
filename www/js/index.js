// $(document).on('pageshow', '#gmap', function (e, data) {


//                 // // Also works with: var yourStartLatLng = '59.3426606750, 18.0736160278';
//                 // var yourStartLatLng = new google.maps.LatLng(59.3426606750, 18.0736160278);
//                 // $('#map_canvas').gmap({'center': yourStartLatLng});

//                     $('#map_canvas').gmap({'center': '57.7973333,12.0502107', 'zoom': 10, 'disableDefaultUI':true, 'callback': function() {
//                         var self = this;
//                         self.addMarker({'position': this.get('map').getCenter() }).click(function() {
//                             self.openInfoWindow({ 'content': 'Hello World!' }, this);
//                         }); 
//                     }}).triggerEvent('resize');


 
// });


/*
 * Google Maps documentation: http://code.google.com/apis/maps/documentation/javascript/basics.html
 * Geolocation documentation: http://dev.w3.org/geo/api/spec-source.html
 */
$( document ).on( "pageinit", "#map-page", function() {
    var defaultLatLng = new google.maps.LatLng(34.0983425, -118.3267434);  // Default to Hollywood, CA when no geolocation support
    if ( navigator.geolocation ) {
        function success(pos) {
            // Location found, show map with these coordinates
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }
        function fail(error) {
            drawMap(defaultLatLng);  // Failed to find location, show default map
        }
        // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
    } else {
        drawMap(defaultLatLng);  // No geolocation support, show default map
    }
    function drawMap(latlng) {
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // Add an overlay to the map of current lat/lng
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Greetings!"
        });
    }
});

    $('#main').on('click','.btn-back',function(e) { 
    	alert('ffffff');
      document.location.href="gmap.html";
    });