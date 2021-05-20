document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#mapa')) {
        const lat = 14.646617585370924
        const lng = -90.73711863119946

        const apiKey = 'AAPKbb8ab896f06247c1a39b5808cec5262bQOrmHf38KE7jeFqkHpRB4AjAqnmLK-Cun_UB36LJcn_KbZHHYbcD1w2i1x6sSNQj';

        const mapa = L.map('mapa').setView([lat, lng], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapa);

        const geocodeService = L.esri.Geocoding.geocodeService({
            apikey: apiKey
        });

        let marker = new L.marker([lat, lng], {
            draggable: true,
            autoPan: true,
        }).addTo(mapa);

        marker.on('moveend', function (e) {
            marker = e.target;

            const position = marker.getLatLng()

            // Centrar automáticamente
            mapa.panTo(new L.LatLng(position.lat, position.lng))

            // Reverse Geocoding cuando el usuario reubica el pin
            geocodeService.reverse().latlng(position, 16).run(function (error, result) {
                marker.bindPopup(result.address.LongLabel).openPopup()

                llenarInputs(result)
            })
        })

        function llenarInputs(resultado) {
            document.querySelector('#direccion').value = resultado.address.Address || '';
            document.querySelector('#colonia').value = resultado.address.Neighborhood || '';
            document.querySelector('#lat').value = resultado.latlng.lat || '';
            document.querySelector('#lng').value = resultado.latlng.lng || '';
        }
    }
})
