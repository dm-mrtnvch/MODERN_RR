import React from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamDetele from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import Header from './Header';




const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/new" exact component={StreamCreate}/>
                    <Route path="/streams/edit" exact component={StreamEdit}/>
                    <Route path="/streams/delete" exact component={StreamDetele}/>
                    <Route path="/streams/show" exact component={StreamShow}/>
                </div>
            </BrowserRouter>
        </div>
    );
};





export default App;

