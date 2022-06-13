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
                <h4 class="nombrealbumartista">
               Cantidad de albums: ${data.nb_album}
                </h4>
            </div>
        </article>
    </a>`

        document.querySelector('.tituloseccionmaroonv').innerHTML = data.name
      let  urlnueva = 
    fetch(data.tracklist)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        for (let i = 0; i < 5; i++) {
            document.querySelector(".podioprimero").innerHTML += ` <a href="./detail-track.html?id=${data.data[i].id}" class="hiperresultados">
            <article class="podioprimerlugar">
                <h3 class="nombrecancionpodio">${i +1 } - ${data.data[i].title}</h3>
                <h3 class="nombredescripcionpodio fechapodio">2014</h3>
                <h3 class="nombredescripcionpodio albumpodio">Album: ${data.data[i].album.title}</h3>
                <h3 class="nombredescripcionpodio reproduccionespodio">Reproducciones: 5.015.184.788</h3>
            </article>
        </a>`
        }
    }).catch(function (error) {
        console.log(error);
    })
    })
    .catch(function (error) {
        console.log(error);
    })
   
    let buscador = document.querySelector('.buscador')
let campoBuscar = document.querySelector('#busqueda')

buscador.addEventListener('submit', function (e) {
    e.preventDefault()
    if (campoBuscar.value.length < 3) {
        alert("El termino buscado debe tener mas de 3 letras")
    } else {
        this.submit();
    }
})


