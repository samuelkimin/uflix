import axios from "axios";

const apiKey = "9354b7f55770ee27726d6e6b757de889";


export async function searchMovies(searchKeyword) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${searchKeyword}`
    );
    return resp.data.results;
  } catch (error) {
    console.error(error);
  }
}



export async function getTrendingMovieData (type, page = 1) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&media_type=movie&page=${page}`
    );
    return resp.data.results;
  } catch (error) {
    console.error(error);
  }
};

export async function getTopRatedMovieData(page) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&media_type=movie&page=${page}`
    );
    return resp.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getNowPlayingMovieData(page) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&media_type=movie&page=${page}`
    );
    return resp.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieDetail(id) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );
    return resp.data;
  } catch (error) {
    console.error(error);
  }
}

export async function watchMovie(id) {
  try {
    const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
    );
    const videos = resp.data.results;
    const trailers = videos.filter(video => video.type === 'Trailer');
    return trailers;
  } catch (error) {
    console.error(error);
  }
}

export async function getComingSoonMovieData(page) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&media_type=movie&page=${page}`
    );
    return resp.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getCastDetail(id) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`
    );
    return resp.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getGenreData(genreId, page) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${page}`
    );
    return resp.data.results;
  } catch (error) {
    console.error(error);
  }
}