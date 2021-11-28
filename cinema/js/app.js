const API_KEY = 'e24b1f6b-859b-4711-9b0c-592933e2a14e';
const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';
const API_URL_SEARCH = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';
const form = document.querySelector('.header__form-search');
const searchInput = document.querySelector('.header__search');

async function getMovies(url) {
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY,
        },
    })
    const respData = await resp.json();
    showMovies(respData);
}
getMovies(API_URL);

function getClassByRate(rate){
    return (rate >= 7) ? 'green' :
           (rate <= 5) ? 'red' :
           (!rate)     ? 'none' : 'yellow';
}

function showMovies(data){
    const moviesEL = document.querySelector('.movies');

    document.querySelector('.movies').innerHTML = '';

    data.films.forEach(movie => {
        const movieEL = document.createElement('div');
        movieEL.classList.add('movie');

        movieEL.innerHTML = `
            <div class="movie__cover-inner">
                 <img
                     src="${movie.posterUrlPreview}"
                      class="movie_cover"
                     alt="${movie.nameRu}"
                  >
                 <div class="movie__cover-darkened"></div>
             </div>
            <div class="movie__info">
                <div class="movie__title">
                    ${movie.nameRu}
                </div>
                <div class="movie__category">
                    ${movie.genres.map(genre => ` ${genre.genre}`)}
                </div>
                <div class="movie__average movie__average--${getClassByRate(movie.rating)}">
                    ${movie.rating}
                </div>
            </div>
        `

        moviesEL.appendChild(movieEL);
    });

}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const apiSearchURL = `${API_URL_SEARCH}` + `${searchInput.value}`;

    if (searchInput.value) getMovies(apiSearchURL);
})
