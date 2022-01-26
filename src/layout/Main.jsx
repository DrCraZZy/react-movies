import React from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "./Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}));
    }

    searchMovies = (filmSearch, type='all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${filmSearch}${type !== 'all' ? `&type=${type}`: '' }`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}));
    }

    render() {
        const { movies } = this.state;
        return (
            <main className="container content">
            <Search cbSearchMovies={this.searchMovies} />
            {this.state.loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}

export default Main;