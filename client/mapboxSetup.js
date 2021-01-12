mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsbGp2YW4iLCJhIjoiY2tkbnU4OWYwMGVpczJ4bW1nY244dmg4NiJ9.MdLDOaFZSztwA83pYMj06g';
var map = new mapboxgl.Map ({
    container: 'mapbox', // container id
    style: 'mapbox://styles/willjvan/ckjoqhmc442q618mr91fwieml', // style URL
    center: [-124.3, 48.49], // starting position [lng, lat]
    zoom: 8, // starting zoom
    attributionControl: false
});