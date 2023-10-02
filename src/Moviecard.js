function MovieCard(props) {


    const { movies, addStars, minusStars, togglefav, toggleCart } = props;
    const { title, plot, poster, price, rating, stars, fav, inCart } = props.movies;

    return <>
        <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img src={poster} alt="Poster" />
                </div>
                <div className="right">
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs. {price}</div>

                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">

                            <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/992/992683.png" onClick={() => { minusStars(movies) }} />

                            <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" alt="star" className="stars" />

                            <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/992/992651.png" onClick={() => { addStars(movies) }} />
                            <span>{stars}</span>
                        </div>
                        {fav ? <button className="unfavourite-btn" onClick={() => { togglefav(movies) }}>Unfavourite</button> : <button className="favourite-btn" onClick={() => { togglefav(movies) }}>Favourite</button>}


                        {inCart ? <button className="unfavourite-btn" onClick={() => { toggleCart(movies) }}>Remove</button> : <button className="cart-btn" onClick={() => { toggleCart(movies) }}>Add to cart</button>}



                    </div>
                </div>
            </div>
        </div>
    </>
}




export default MovieCard;