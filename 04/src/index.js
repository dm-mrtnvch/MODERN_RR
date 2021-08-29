import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {lat: null, errorMessage: ''};

        console.log(React.Component);
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setState
                this.setState({lat: position.coords.latitude});
            },
            err => {
                this.setState({errorMessage: err.message});
            }
        );
    }


    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>error: {this.state.errorMessage}</div>;
        }

        if (this.state.lat && !this.state.errorMessage) {
            return <div>latitude: {this.state.lat}</div>;
        }
        return <div>loading</div>
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));