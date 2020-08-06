document.getElementById("search").addEventListener('change', function() {
    let text = document.getElementById("search").value;
    let text_URL = " ";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == "" ) {
            text_URL += "+";
        } else {
            text_URL+=text.charAt(i);
        }
    }
    let URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=4dd7521c'+text_URL;
    fetch(URL).then((response) => {
        return response.json();
    }).then((result) => {
        console.log(result);
        let p = document.getElementById('p1');
        p.setAttribute('style', 'margin-top:20px;margin-left:50px;');
        let html = `<img src= ${result.Poster} width=200px height=200px><br>
        <i><b>Title:</b> ${result.Title}<br>
        <b>Actors: </b> ${result.Actors}<br>
        <b>Awards: </b> ${result.Awards}<br>
        <b>BoxOffice: </b> ${result.BoxOffice}<br>
        <b>Country: </b> ${result.Country}<br>
        <b>DVD: </b> ${result.DVD}<br>
        <b>Director: </b> ${result.Director}<br>
        <b>Genre: </b> ${result.Genre}<br>
        <b>Language: </b> ${result.Language}<br>
        <b>Metascore: </b> ${result.Metascore}<br>
        <b>Plot: </b> ${result.Plot}<br>
        <b>Production: </b> ${result.Production}<br>
        <b>Rated: </b> ${result.Rated}<br>
        <b>Released: </b> ${result.Released}<br>
        <b>Response: </b> ${result.Response}<br>
        <b>Runtime: </b> ${result.Runtime}<br>
        <b>Type: </b> ${result.Type}<br>
        <b>Website: </b> ${result.Website}<br>
        <b>Writer: </b> ${result.Writer}<br>
        <b>imdbID: </b> ${result.imdbID}<br>
        <b>imdbRating: </b> ${result.imdbRating}<br>
        <b>imdbVotes: </b> ${result.imdbVotes}<br>`;
        p.innerHTML = html;
    }).catch((error) => {
        alert(error);
    });
});