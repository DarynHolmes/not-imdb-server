const api = require('./api');
const Film = require('./models').Film;
const Review = require('./models').Review;


const resolvers = {
    Query: {
        films(root, args){

            return api.searchByTitle(args.searchTerm)
                .then(res => res.data.results.map(data => new Film (data))
                )
                .catch(console.error);
        }
    },
    Film: {
        reviews(film) {
            return api.fetchReviews(film.id) 
                .then((response) => { 
                    return response.data.results.map(data => new Review(Object.assign({}, data, {filmId: film.id})))
                })
                .catch(console.error);
        }
    },
    Review: {
        film(review) {
            return api.fetchFilmById(review.filmId)
                .then(res => new Film(res.data))
                .catch(console.error);
        }
    }

}



module.exports.resolvers = resolvers;