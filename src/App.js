import React from "react";
import MovieList from "./MovieList";
import "./index.css"
import Navbar from "./Navbar";
import { movies } from "./moviesData";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0
    }
  }


  handleIncStar = (movie) => {
    const { movies } = this.state;
    const mid = this.state.movies.indexOf(movie);

    if (movies[mid].stars >= 5) { return; }
    movies[mid].stars += 0.5;
    this.setState({
      movies: movies
    })
  }
  handleDecStar = (movie) => {
    const { movies } = this.state;
    const mid = this.state.movies.indexOf(movie);

    if (movies[mid].stars <= 0) { return; }
    movies[mid].stars -= 0.5;
    this.setState({
      movies: movies
    })
  }
  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const mid = this.state.movies.indexOf(movie);

    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies
    })
  }
  handleToggleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = this.state.movies.indexOf(movie);

    movies[mid].inCart = !movies[mid].inCart;

    if(movies[mid].inCart){
      cartCount = cartCount + 1;
    }else{

      cartCount = cartCount - 1;
    }
    this.setState({
      movies,cartCount
    })
  }
  

  render() {

    const {movies, cartCount} = this.state;

    return <>
      <Navbar cartCount = {cartCount} />
      <MovieList movies = {movies}
                          addStars={this.handleIncStar}
                          minusStars={this.handleDecStar}
                          togglefav={this.handleToggleFav}
                          toggleCart={this.handleToggleCart}
      />
    </>
  }

}

export default App;



