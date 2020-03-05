"use strict";


    $('#clickme').click(function () {
        var userInput = $('#long').val() + ", " + $('#lat').val();

        console.log(userInput);

// weather data weather data weather data weather data

        $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + userInput)
            .done(function (data) {
                {
                    $('#weatherDay1').empty().append(
                        '<div class="icon"><img src="svg/' + data.currently.icon + '.svg"' + '</div>' +
                        '<div class="temp">CURRENTLY: <br>' + data.currently.temperature + '</div>' +
                        '<div class="date">' + (Date(data.currently.time * 1000)) + '</div>' +
                        '<div class="summary">' + data.currently.summary + '</div>' +
                        '<div class="hiLo">' + data.daily.data[0].temperatureHigh + '/' + data.daily.data[0].temperatureLow);
                    $('#weatherDay2').empty().append(
                        '<div class="icon"><img src="svg/' + data.hourly.icon + '.svg"' + '</div>' +
                        '<div class="date">' + (Date(data.time * 1000)) + '</div>' +
                        '<div class="summary">' + data.hourly.summary + '</div>' +
                        '<div class="hiLo">' + data.daily.data[1].temperatureHigh + '/' + data.daily.data[2].temperatureLow);
                    $('#weatherDay3').empty().append(
                        '<div class="icon"><img src="svg/' + data.daily.icon + '.svg"' + '</div>' +
                        '<div class="date">' + (Date(data.daily.data[7].time * 1000)) + '</div>' +
                        '<div class="summary">' + data.daily.summary + '</div>' +
                        '<div class="hiLo">' + data.daily.data[7].temperatureHigh + '/' + data.daily.data[7].temperatureLow);
                    console.log(data);
                }
                var markerOptions = {
                    color: "red",
                };
                var marker = new mapboxgl.Marker(markerOptions)
                    .setLngLat([data.longitude, data.latitude])
                    .addTo(map);
                console.log(marker);

                $('.fly').click(function () {
                    map.flyTo({
                        center: [data.longitude, data.latitude],
                        essential: true


                    });
                });

            });
    });

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 10,
    center: [-98.4936, 29.4241],
});
