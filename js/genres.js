let topGenreEndpoint = `https://api.allorigins.win/get?url=https://api.deezer.com/genre
`
fetch(topGenreEndpoint)
.then(function (response) {
    return response.json();
})
.then(function(data) {
    let ol =JSON.parse(data.contents)
   console.log(JSON.parse(data.contents));

   for (let i = 1; i < 6; i++) {
    document.querySelector(".contenedorgeneros").innerHTML += `<div>
    <a href="detail-genres.html" class="hiperlinkgeneros">
                    <div class="artistahijagenero">
                        <img class="artistaimggenero" src=${ol.data[i].picture_medium} alt="Jazz">
                        <h3 class="nombrebanda">
                            ${ol.data[i].name}
                        </h3>
                    </div>
                </a>`;
}})