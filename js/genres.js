let topGenreEndpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre`
fetch(topGenreEndpoint)
.then(function (response) {
    return response.json();
})
.then(function(data) {
    console.log(data)

   for (let i = 1; i < 6; i++) {
    document.querySelector(".contenedorgeneros").innerHTML += `<div>
    <a href="detail-genres.html?id=${data.data[i].id}" class="hiperlinkgeneros">
                    <div class="artistahijagenero">
                        <img class="artistaimggenero" src=${data.data[i].picture_medium} alt="Jazz">
                        <h3 class="nombrebanda">
                            ${data.data [i].name}
                        </h3>
                    </div>
                </a>`;}})
    .catch(function (error) {
        console.log(error);
    });