let qs = location.search;
let qsOL= new URLSearchParams(qs)
let idPJ = qsOL.get('id')
console.log(idPJ);

let endpoint = `https://api.allorigins.win/get?url=https://api.deezer.com/track/` + idPJ

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        let ol = JSON.parse(data.contents)
        console.log(ol);
        document.querySelector('.articulocancionhija').innerHTML = `<h1>
        ${ol.title}
    </h1>
    <div class="iframespotify">
    <img src="${ol.album.cover_medium}" alt="">
    <iframe src=${ol.preview}
        frameborder="0" allowtransparency="true" allow="encrypted-media" class="iframe"></iframe>
        </div>
    <div class="favoritoscontenedor">
        <p>Agregar a favoritos</p>
        <i class="fa-regular fa-heart"></i>
    </div>
    <a href="./playlist.html" class="verplaylist">
        <p>Ver mis canciones favoritas</p> 
    </a>
    <a href="./detail-artist.html?id=${ol.artist.id}" class="hiperresultados">
        <h4 class="nombrebandacancion">
            ${ol.artist.name}
        </h4>
    </a>
    <a href="./detail-album.html?id=${ol.album.id}" class="hiperresultados">
        <h5 class="detallecanciondisco">
            Disco:  ${ol.album.title}
        </h5>
    </a>`;
       })
    .catch(function(error){
        console.log(error);
    })