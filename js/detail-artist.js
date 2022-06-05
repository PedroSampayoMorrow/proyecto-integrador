let qs = location.search;
let qsOL = new URLSearchParams(qs)
let idPJ = qsOL.get('id')
console.log(idPJ);

let endpoint = `https://api.allorigins.win/get?url=https://api.deezer.com/artist/` + idPJ

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        let ol = JSON.parse(data.contents)
        console.log(ol);
        document.querySelector('.contenedorartista').innerHTML = `<a style="text-decoration:none" href="./detail-artist.html">
        <article class="ordencajas">
            <div class="artistahija2">
                <img class="artistaimg1" src=${ol.picture_medium} alt="Music of the spheres">
            </div>
            <div class="artistanomdesc">
                <h3 class="nombreartista">
                ${ol.name}
                </h3>
                <h4 class="nombrealbum">
               Cantidad de albums: ${ol.nb_album}
                </h4>
            </div>
        </article>
    </a>`
        document.querySelector('.tituloseccionmaroonv').innerHTML = ol.name
    })
    .catch(function (error) {
        console.log(error);
    })
