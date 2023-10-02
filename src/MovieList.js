import { Component } from "react";
import MovieCard from "./Moviecard";


class MovieList extends Component {

    render() {
        const { movies, addStars, minusStars, togglefav, toggleCart } = this.props;
        return (
            <>
                {movies.map((movie) => <MovieCard movies={movie}
                    addStars={addStars}
                    minusStars={minusStars}
                    togglefav={togglefav}
                    toggleCart={toggleCart}
                    key={movie.id} />)}
            </>
        )
    }
}

export default MovieList;