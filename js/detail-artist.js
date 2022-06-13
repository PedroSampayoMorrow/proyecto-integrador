let qs = location.search;
let qsOL = new URLSearchParams(qs)
let idPJ = qsOL.get('id')
console.log(idPJ);

let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/` + idPJ

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        document.querySelector('.contenedorartista').innerHTML = `<a style="text-decoration:none" href="./detail-artist.html?id=${data.id}">
        <article class="ordencajas">
            <div class="artistahija2">
                <img class="artistaimg1" src=${data.picture_medium} alt="Music of the spheres">
            </div>
            <div class="artistanomdesc">
                <h3 class="nombreartista">
                ${data.name}
                </h3>
                <h4 class="nombrealbum">
               Cantidad de albums: ${data.nb_album}
                </h4>
            </div>
        </article>
    </a>`
        document.querySelector('.tituloseccionmaroonv').innerHTML = data.name
    })
    .catch(function (error) {
        console.log(error);
    })
   


    