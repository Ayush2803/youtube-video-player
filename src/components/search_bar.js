import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    render() {
        return (
            <div className='search-bar'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube Icon" className="youtube-icon"></img>
                <input 
                placeholder='Search'
                value={this.state.term}
                onChange={(event) => {this.searchTermChangeEventHandler(event.target.value)}}/>
            </div>
        );
    }

    searchTermChangeEventHandler(term) {
        this.setState({term: term});

        //Call the callback function form the parent
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;