apiKey = 'api_key=f840b1b9ca749f93dd7bc7320bf2df65';
baseUrl = 'https://api.themoviedb.org/3'
imageBaseUrl = 'https://image.tmdb.org/t/p/w300/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg'

class Api {

  static getData(url, processData, extParameter = ''){
    fetch(`${baseUrl}/${url}?${apiKey}${extParameter}`, { 
      method: "GET",
      headers: {'Content-Type':'application/json;charset=utf-8'},
    })
    .then(response => response.json())
    .then(response => {
        processData(response);
    })
    .catch(err => console.error(err));
  }

  // media_type = all|movie|tv|person
  // time_window = day|week
  static getTrending = (media_type, time_window, processData) => {
    this.getData(`trending/${media_type}/${time_window}`, processData);
  };

  static getGenre = (processData) => {
    this.getData(`/genre/movie/list`, processData);
  };

  static getQuery = (keyword, processData) => {
    this.getData(`/search/movie`, processData);
  };
}

Api.getTrending('movie', 'day', data => console.log(data));
Api.getGenre(data => console.log(data));