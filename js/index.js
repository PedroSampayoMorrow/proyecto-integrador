let topAlbumsEndpoint = 'https://api.allorigins.win/get?url=https://api.deezer.com/chart/0/albums'
fetch(topAlbumsEndpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
       let objeto= JSON.parse(data.contents)
       console.log(objeto);
       let contenedora = document.querySelector(".contenedoralbumes")
       for (let i = 0; i < 5; i++) {
        contenedora.innerHTML += `<div>
        <a href="./detail-album.html" class="hiperindex">
            <div class="albumhija" class="hiperindex">
                <img class="cancionimg" src=${objeto.data[i].cover_medium} alt="Cleopatra">
                <h3 class="nombreartista">
                ${objeto.data[i].title}
                </h3>
                <h4 class="nombrealbum">
                ${objeto.data[i].artist.name}
                </h4>
            </div>
        </a>
    </div>`
       }
    })
    .catch(function(error){
        console.log(error);
    })

    let topArtistasEndpoint = "https://api.allorigins.win/get?url=https://developers.deezer.com/chart/0/artist"
    fetch(topArtistasEndpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        console.log(data.contents);
       let contenedora = document.querySelector(".contenedoralbumes2")
       for (let i = 0; i < 5; i++) {
       }
    })
    .catch(function(error){
        
    })



    let topTrackEndpoint = `https://api.allorigins.win/get?url=https://api.deezer.com/chart`

    fetch(topTrackEndpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        let ol =JSON.parse(data.contents)
       console.log(JSON.parse(data.contents));
console.log();
       for (let i = 0; i < 5; i++) {
        document.querySelector(".contenedoralbumes2").innerHTML += `<div>
        <a href="./detail-artist.html?id=${ol.artists.data[i].id}" class="hiperindex">
            <div class="artistahija">
                <img class="cancionimg" src=${ol.artists.data[i].picture_medium} alt="${ol.artists.data[i].name}">
                <h3 class="nombreartista">
                ${ol.artists.data[i].name}
                </h3>
            </div>
        </a>
    </div>`;}
    for (let i = 0; i < 5; i++) {
        document.querySelector(".contenedordiscos").innerHTML += `
        <div>
            <a href="./detail-track.html" class="hiperindex">
                <div class="cancionhija">
                    <img class="cancionimg" src="${ol.tracks.data[i].album.cover_medium}" alt="Music of the spheres">
                    <h3 class="nombreartista">
                    ${ol.tracks.data[i].title}
                    </h3>
                    <h4 class="nombrealbum">
                    ${ol.tracks.data[i].artist.name}
                    </h4>
                </div>
            </a>
        </div>`;
         
     }})
       

    .catch(function(error){
        console.log(error);
    })

    let nombreUsuario = prompt("Bienvenido! Cual es tu nombre?")
    document.querySelector(".usuario").innerText = `Bienvenido ${nombreUsuario}!`
