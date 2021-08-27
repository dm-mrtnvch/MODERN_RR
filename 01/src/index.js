// import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
}


// Create a react component
const App = function () {

    const buttonText = {text: 'click me'}
    const style = {backgroundColor: 'blue', color: 'white', border: '3px solid black'}
    const labelText = 'enter name:   '

    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text"/>
            <button style={style}>
                {buttonText.text}
            </button>
        </div>
    );
};


// Take the react component and show it on the screen
ReactDOM.render(<App/>, document.querySelector('#root'));