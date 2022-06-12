let recuperoStorage = localStorage.getItem(`favoritos`)
let favoritos = JSON.parse(recuperoStorage)
console.log(favoritos);

let section = document.querySelector('.cancionesplaylistpadre')

if (favoritos == null  || favoritos.length == 0) {
    section.innerHTML = `<h1>No hay favoritos!!!</h1>`
} else {
    for (let i = 0; i < favoritos.length; i++) {
        
        let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${favoritos[i]}` 
        fetch(url).then(function (response) {
            return response.json()
        }).then (function (data) {
            console.log(data);
            section.innerHTML += `
            <div class="hiperplaylist">
                        <div class="cancionesplaylisthija">
                            <img src="${data.album.cover_medium}" alt="parachutes" class="imagencancionplaylist">
                            <h3 class="nombrecancionplaylist">${data.title}</h3>
                            <iframe src="${data.preview}" class="playlistplay" frameborder="0"></iframe>
                        </div>
                    </div>
            `;
        }).catch(function(e){
        console.log(e);}
        )}

}