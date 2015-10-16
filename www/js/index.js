// $(document).on('pageshow', '#index', function (e, data) {

//     setTimeout(function () {
//     	alert('vvvvvvv');
//         // This is the minimum zoom level that we'll allow
//         var minZoomLevel = 12;

//         var map = new google.maps.Map(document.getElementById('map_canvas'), {
//             zoom: minZoomLevel,
//             center: new google.maps.LatLng(38.50, -90.50),
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         });

//        var map = new google.maps.Map(map_element, myOptions);

//         var mapwidth = $(window).width();
//         var mapheight = $(window).height();
//         $("#map_canvas").height(mapheight);
//         $("#map_canvas").width(mapwidth);
//         google.maps.event.trigger(map, 'resize');

//             });

//     }, 1);
// });


 $(document).on("pageinit", "#index", function () {
        
        var centerLocation = new google.maps.LatLng('57.77828', '14.17200');

        var myOptions = {
            center: centerLocation,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            callback: function () { alert('callback'); }
        };

        var map_element = document.getElementById("map_canvas");




        map = new google.maps.Map(map_element, myOptions);

        var mapwidth = $(window).width();
        var mapheight = $(window).height();
        $("#map_canvas").height(mapheight);
        $("#map_canvas").width(mapwidth);
        google.maps.event.trigger(map, 'resize');

});



    $('#main').on('click','.btn-back',function(e) { 
    	alert('ffffff');
      document.location.href="gmap.html";
    });