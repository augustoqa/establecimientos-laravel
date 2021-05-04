document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#mapa')) {
        const lat = 14.646617585370924
        const lng = -90.73711863119946

        const mapa = L.map('mapa').setView([lat, lng], 16)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapa)

        let marker;

        marker = new L.marker([lat, lng], {
            draggable: true,
            autoPan: true
        }).addTo(mapa)

        // Detectar movimiento del marker
        marker.on('moveend', function (e) {
            marker = e.target;

            const posicion = marker.getLatLng()

            // Centrar automáticamente
            mapa.panTo(new L.LatLng(posicion.lat, posicion.lng))
        })
    }
})
