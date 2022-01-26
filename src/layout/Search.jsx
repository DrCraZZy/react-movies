import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    }


    handleKey = (event) => {
        if(event.key === 'Enter') {
            this.props.cbSearchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.cbSearchMovies(this.state.search, this.state.type);
        });
    }

    render() {
        return (
          <div className="row">
            <div className="input-field col s12">
              <input
                className="validate"
                type="search"
                placeholder="Search"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                onKeyPress={this.handleKey}
              />
              <button
                className="btn light-blue"
                onClick={() => this.props.cbSearchMovies(this.state.search, this.state.type)}
              >
                Search
              </button>
            </div>
            <div className="filter">
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  value=""
                  onChange={this.handleFilter}
                  data-type="all"
                  checked={this.state.type === "all"}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  value="movie"
                  onChange={this.handleFilter}
                  data-type="movie"
                  checked={this.state.type === "movie"}
                />
                <span>Movie</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  value="series"
                  onChange={this.handleFilter}
                  data-type="series"
                  checked={this.state.type === "series"}
                />
                <span>Series</span>
              </label>
            </div>
          </div>
        );
    }

}

export default Search;