const axios = require('axios');
const apiKey = 'd81847c99fcc2c246df68557ee7a651b';
const language = 'en';

function searchByTitle(searchTerm) {
    return axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
                api_key: apiKey,
                query: searchTerm,
                language
            }
        });
}

function fetchFilmById(id) {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
                api_key: apiKey
            }
        });
}

function fetchReviews(filmId) {
    return axios.get(`https://api.themoviedb.org/3/movie/${filmId}/reviews`, {
        params: {
                api_key: apiKey,
                language
            }
        });        
}

module.exports = {
    searchByTitle,
    fetchFilmById,
    fetchReviews
};