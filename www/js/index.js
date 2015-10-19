$(document).on('pageshow', '#gmap', function (e, data) {


                // // Also works with: var yourStartLatLng = '59.3426606750, 18.0736160278';
                // var yourStartLatLng = new google.maps.LatLng(59.3426606750, 18.0736160278);
                // $('#map_canvas').gmap({'center': yourStartLatLng});


                    $('#map_canvas').gmap({ 'center': new google.maps.LatLng(42.345573,-71.098326), 'callback': function() {
    alert('Google map loaded!');
}}).triggerEvent('resize');


 
});

    $('#main').on('click','.btn-back',function(e) { 
    	alert('ffffff');
      document.location.href="gmap.html";
    });