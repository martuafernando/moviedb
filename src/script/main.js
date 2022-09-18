import Api from './api';

const genreContainer = document.querySelector('horizontal-menu');
const carouselImage = document.querySelector('carousel-image');
const bestArtist = document.querySelector('best-artist');
const movieList = document.querySelector('movie-list');
const sidebarList = document.querySelector('sidebar-list');
const dataSource = new Api;

const main = () => {
  dataSource.getGenre(data => {
    genreContainer.genre = data.genres;
    
    dataSource.getMoviesByGenre(genreContainer.activeGenre, data => {
      carouselImage.movie = data.results;
    });
    
    dataSource.getPerson(genreContainer.activeGenre, data => {
      bestArtist.artist = data.results;
    });

    dataSource.getNowPlaying(data => {
      movieList.movie = data.results;
    });

    dataSource.getTrending('movie', 'day', data => {
      sidebarList.movie = data.results;
    });
  });
}

export default main;

