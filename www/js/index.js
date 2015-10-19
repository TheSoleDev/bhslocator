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

                // // Also works with: var yourStartLatLng = '59.3426606750, 18.0736160278';
                // var yourStartLatLng = new google.maps.LatLng(59.3426606750, 18.0736160278);
                // $('#map_canvas').gmap({'center': yourStartLatLng});

                    $('#map-canvas').gmap({'center': '57.7973333,12.0502107', 'zoom': 10, 'disableDefaultUI':true, 'callback': function() {
                        var self = this;
                        self.addMarker({'position': this.get('map').getCenter() }).click(function() {
                            self.openInfoWindow({ 'content': 'Hello World!' }, this);
                        }); 
                    }}).triggerEvent('resize');

});

    $('#main').on('click','.btn-back',function(e) { 
    	alert('ffffff');
      document.location.href="gmap.html";
    });