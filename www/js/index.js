$(document).on('pageshow', '#index', function (e, data) {


                // Also works with: var yourStartLatLng = '59.3426606750, 18.0736160278';
                var yourStartLatLng = new google.maps.LatLng(59.3426606750, 18.0736160278);
                $('#map_canvas').gmap({'center': yourStartLatLng});
 
});

    $('#main').on('click','.btn-back',function(e) { 
    	alert('ffffff');
      document.location.href="gmap.html";
    });