import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: ''}
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    onInputChange = e => {
        this.setState({term: e.target.value})
    }
    onFormSubmit (e) {
        e.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }


    // todo: make sure we call
    // from parent component

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;