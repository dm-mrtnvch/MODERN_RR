import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

if (module.hot) {
    module.hot.accept();
}


const App = function () {

    return (

        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>warning!</h4>
                    are you sure?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    autrhor="raz"
                    timeAgo="Today at 3:30AM"
                    content="this"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    autrhor="dva"
                    timeAgo="Today at 6:00PM"
                    content="is"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    autrhor="tri"
                    timeAgo="Today at 7:42PM"
                    content="cool"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));


// https://semantic-ui.com/