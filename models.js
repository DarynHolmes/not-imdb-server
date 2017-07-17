

module.exports.Film = function(options) {
    this.id = options.id;
    this.thumbnail = `http://image.tmdb.org/t/p/w500/${options.backdrop_path}`;
    this.poster = `http://image.tmdb.org/t/p/w500/${options.poster_path}`;
    this.title = options.original_title;
}

module.exports.Review = function(options) {
    this.id = options.id; 
    this.author = options.author; 
    this.content = options.content;
    this.url = options.url;
    this.filmId = options.filmId;
}