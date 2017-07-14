const api = require('./api');

const resolvers = {
    Query: {
        films(root, args){

            return api.searchByTitle(args.searchTerm)
                .then(res => res.data.results.map( data => {
                    return {
                                id: data.id, 
                                thumbnail: `http://image.tmdb.org/t/p/w500/${data.backdrop_path}`, 
                                poster: `http://image.tmdb.org/t/p/w500/${data.poster_path}`, 
                                title: data.original_title
                        };
                    })
                )
                .catch(console.error);
        }
    },
    Film: {
        reviews(film) {
            return api.fetchReviews(film.id) 
                .then(function (response) {
                    return this.reviews = response.data.results.map(data => ({
                                                        id: data.id, 
                                                        author: data.author, 
                                                        content: data.content,
                                                        url: data.url,
                                                        filmId: film.id
                                                    }));
                })
                .catch(console.error);
        }
                    
    },
    Review: {
        film(review) {
            console.log("review", review.filmId);
            return api.fetchFilmById(review.filmId)
                .then(res => {
                    return  {
                        id: res.data.id,
                        title: res.data.original_title, 
                        thumbnail: res.data.backdrop_path, 
                        poster: res.data.poster_path
                    }
                })
                .catch(console.error);
        }
    }

}



module.exports.resolvers = resolvers;