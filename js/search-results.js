let qs = location.search
let qsOL = new URLSearchParams(qs)

let valor = qsOL.get("buscar")
console.log(valor);
let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=` +valor;

let section = document.querySelector(`articlesearch`)
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        
        document.querySelector(`.cajasearch`).innerHTML += `<h3 class="titulosearch">
        Termino buscado : "${valor}"
    </h3>
    <h3 class="titulosearch">
        Resultados que coinciden:
    </h3>`
    for (let i = 0; i < 20; i++) {
      document.querySelector(`.articlesearch`).innerHTML +=  `<div>
        <a href="./detail-track.html?id=${data.data[i].id}" class="hiperindex">
            <div class="cancionhijasearch">
                <img class="cancionimgsearch" src="${data.data[i].album.cover_medium}" alt="Music of the spheres">
                <h3 class="nombreartistasearch">
                ${data.data[i].title}
                </h3>
                <h4 class="nombrealbumsearch">
                ${data.data[i].artist.name}
                </h4>
            </div>
        </a>
        </div>`
   
    }})
    .catch(function(error){
        console.log(error);
    });
    