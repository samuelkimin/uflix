import axios from "axios";

const apiKey = "9354b7f55770ee27726d6e6b757de889";

//
// SEARCH
//
export async function searchMovies(searchKeyword) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${searchKeyword}`
    );
    return resp.data?.results ?? [];
  } catch (error) {
    console.error("API ERROR searchMovies:", error);
    return [];
  }
}

//
// MOVIES
//
export async function getTrendingMovieData(type = "movie", page = 1) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&page=${page}`
    );
    return resp.data?.results ?? [];
  } catch (error) {
    console.error("API ERROR getTrendingMovieData:", error);
    return [];
  }
}

export async function getTopRatedMovieData(page = 1) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${page}`
    );
    return resp.data?.results ?? [];
  } catch (error) {
    console.error("API ERROR getTopRatedMovieData:", error);
    return [];
  }
}

export async function getNowPlayingMovieData(page = 1) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`
    );
    return resp.data?.results ?? [];
  } catch (error) {
    console.error("API ERROR getNowPlayingMovieData:", error);
    return [];
  }
}

export async function getMovieDetail(id) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );
    return resp.data ?? null;
  } catch (error) {
    console.error("API ERROR getMovieDetail:", error);
    return null;
  }
}

export async function watchMovie(id) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
    );

    const videos = resp?.data?.results ?? [];
    return videos.filter(v => v.type === "Trailer");
  } catch (error) {
    console.error("API ERROR watchMovie:", error);
    return [];
  }
}

export async function getComingSoonMovieData(page = 1) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${page}`
    );
    return resp.data?.results ?? [];
  } catch (error) {
    console.error("API ERROR getComingSoonMovieData:", error);
    return [];
  }
}

//
// CAST
//
export async function getCastDetail(id) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`
    );
    return resp.data ?? null;
  } catch (error) {
    console.error("API ERROR getCastDetail:", error);
    return null;
  }
}

//
// GENRE
//
export async function getGenreData(genreId, page = 1) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${page}`
    );
    return resp.data?.results ?? [];
  } catch (error) {
    console.error("API ERROR getGenreData:", error);
    return [];
  }
}

//
// TV SERIES
//
export async function getTvDetail(tvId) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvId}?api_key=${apiKey}`
    );
    return resp.data ?? null;
  } catch (error) {
    console.error("API ERROR getTvDetail:", error);
    return null;
  }
}

export async function getTrendingTvData(page = 1) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&page=${page}`
    );
    return resp.data?.results ?? [];
  } catch (error) {
    console.error("API ERROR getTrendingTvData:", error);
    return [];
  }
}

export async function getTvSeasons(tvId) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvId}?api_key=${apiKey}`
    );
    return resp.data ?? null;
  } catch (error) {
    console.error("API ERROR getTvSeasons:", error);
    return null;
  }
}

export async function getSeasonEpisodes(tvId, seasonNumber) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}?api_key=${apiKey}`
    );
    return resp.data?.episodes ?? [];
  } catch (error) {
    console.error("API ERROR getSeasonEpisodes:", error);
    return [];
  }
}

export async function getTvSeasonDetail(tvId, seasonNumber) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}?api_key=${apiKey}`
    );
    return resp.data ?? null;
  } catch (error) {
    console.error("API ERROR getTvSeasonDetail:", error);
    return null;
  }
}

export async function getTvEpisodeDetail(tvId, seasonNumber, episodeNumber) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}?api_key=${apiKey}`
    );
    return resp.data ?? null;
  } catch (error) {
    console.error("API ERROR getTvEpisodeDetail:", error);
    return null;
  }
}

export async function getTvVideos(tvId) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=${apiKey}`
    );

    const videos = resp?.data?.results ?? [];
    return videos.filter(v => v.type === "Trailer");
  } catch (error) {
    console.error("API ERROR getTvVideos:", error);
    return [];
  }
}

export async function watchTv(tvId) {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=${apiKey}`
    );

    const videos = resp?.data?.results ?? [];
    return videos.filter(v => v.type === "Trailer");
  } catch (error) {
    console.error("API ERROR watchTv:", error);
    return [];
  }
}
