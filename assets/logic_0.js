      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 24.886, lng: -70.269},
          zoom: 5,
        });

        var CubaCoords = [
            {lng: -82.268151,lat: 23.188611},
            {lng:  -81.404457,lat: 23.117271},
            {lng: -80.618769,lat: 23.10598},
            {lng: -79.679524,lat: 22.765303},
            {lng: -79.281486,lat: 22.399202},
            {lng: -78.347434,lat: 22.512166},
            {lng: -77.993296,lat: 22.277194},
            {lng: -77.146422,lat: 21.657851},
            {lng: -76.523825,lat: 21.20682},
            {lng: -76.19462,lat: 21.220565},
            {lng: -75.598222,lat: 21.016624},
            {lng: -75.67106,lat: 20.735091},
            {lng: -74.933896,lat: 20.693905},
            {lng: -74.178025,lat: 20.284628},
            {lng: -74.296648,lat: 20.050379},
            {lng: -74.961595,lat: 19.923435},
            {lng: -75.63468,lat: 19.873774},
            {lng: -76.323656,lat: 19.952891},
            {lng: -77.755481,lat: 19.855481},
            {lng: -77.085108,lat: 20.413354},
            {lng: -77.492655,lat: 20.673105},
            {lng: -78.137292,lat: 20.739949},
            {lng: -78.482827,lat: 21.028613},
            {lng: -78.719867,lat:21.598114},
            {lng: -79.285,lat: 21.559175},
            {lng: -80.217475,lat: 21.827324},
            {lng: -80.517535,lat: 22.037079},
            {lng: -81.820943,lat: 22.192057},
            {lng: -82.169992,lat: 22.387109},
            {lng: -81.795002,lat: 22.636965},
            {lng: -82.775898,lat: 22.68815},
            {lng: -83.494459,lat: 22.168518},
            {lng: -83.9088,lat: 22.154565},
            {lng: -84.052151,lat: 21.910575},
            {lng: -84.54703,lat: 21.801228},
            {lng: -84.974911,lat: 21.896028},
            {lng: -84.447062,lat: 22.20495},
            {lng: -84.230357,lat: 22.565755},
            {lng: -83.77824,lat: 22.788118},
            {lng: -83.267548,lat: 22.983042},
            {lng: -82.510436,lat: 23.078747},
            {lng: -82.268151,lat: 23.188611}
        ];

        var CubaBorder = new google.maps.Polygon({paths: CubaCoords});

        google.maps.event.addListener(map, 'click', function(e) {
          var resultColor =
              google.maps.geometry.poly.containsLocation(e.latLng, CubaBorder) ?
              'yellow' :
              'red';

          var resultPath =
              google.maps.geometry.poly.containsLocation(e.latLng, CubaBorder) ?
              // A triangle.
              "m 0 -1 l 1 2 -2 0 z" :
              google.maps.SymbolPath.CIRCLE;

          new google.maps.Marker({
            position: e.latLng,
            map: map,
            icon: {
                path: resultPath,
                fillColor: resultColor,
                fillOpacity: .2,
                strokeColor: 'white',
                strokeWeight: .5,
                scale: 10
            }
          });
        });

      }
  