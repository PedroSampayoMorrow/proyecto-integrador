let qs = location.search;
let qsOL = new URLSearchParams(qs)
let idPJ = qsOL.get('id')
console.log(idPJ);

let endpoint = `https://api.allorigins.win/get?url=https://api.deezer.com/album/` + idPJ

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        let ol = JSON.parse(data.contents)
        console.log(ol);
        document.querySelector(".discosdetallepadre").innerHTML = `<img src=${ol.cover_medium} alt="${ol.title}" class="imgdiscosdetalle">
        <h1 class="nombrediscodetalle">Disco: ${ol.title}</h1>
        <a href="./detail-artist.html?id=${ol.artist.id}" class="hiperdisco">
            <h2>${ol.artist.name}</h2>
        </a>
        <a href="./detail-genres.html?id=${ol.genres.data[0].id}" class="hiperdisco">
            <h3>Genero de musica: ${ol.genres.data[0].name}</h3>
        </a>
        <h3>Fecha: ${ol.release_date}</h3>
        <h2>Canciones del disco:</h2>`
        
    })
    .catch(function (error) {
        console.log(error);
    })



    fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        let ol = JSON.parse(data.contents)
        console.log(ol);
        for (let i = 0; i < 5; i++) {
            document.querySelector(".contenedoracancionesdisco").innerHTML += `
            <a href="./detail-track.html?id=${ol.tracks.data[i].id}" class="hiperdisco">
                <article class="hijacancionesdisco">
                    <img src="${ol.cover_medium}" alt="sleeponthefloor" class="imgcanciondisco">
                    <h3 class="nombrecanciondiscodetalle">${ol.tracks.data[i].title}</h3>
                </article>`
        }
        
    })
    .catch(function (error) {
        console.log(error);
    })
