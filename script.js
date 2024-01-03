<script>
const logoutButton = document.getElementById('logoutButton');
const movieList = document.getElementById('movieList');
const videoPlayer = document.getElementById('videoPlayer');
const playButton = document.getElementById('playButton');



async function loadMovies() {
    try {
        const response = await fetch('http://localhost:3000/api/movies');
        const movies = await response.json();
    }
{"}"}
 

 let isAutheticated =false;
 const movies = [
    { id: 1, title: 'Movie 1' videoSource: 'movie1.mp4'},
    { id: 2, title: 'Movie 2' videoSource: 'movie2.mp4'},
 ];

 function loadMovies() {
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML =<h3>{movie.title}</h3>;
        movieElement.addEventListener('click', () => playMovie(movie.videoSource));
        movieList.appendChild(movieElement);
    });

    

 }

 catch (error) {
    console.error ('Error loading movies:', error);
 }

 function playMovie(source) [
    videoPlayer.src = source;
    videoPlayer.play();
 ]

 playButton.addEventListener('click', () =>{
    if (videoPlayer.paused) {
        videoPlayer.play();
    }
    else {
        videoPlayer.pause();
    }
 });

 logoutButton.addEventListener('click', () => {
    isAuthenticated = false;
 });

 if (isAuthenticated) {
    loadMovies();
 }


</script>