import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovaCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovaCard>
        <div>
          <h1>Warning!</h1>
          Are you sure?
        </div>
      </ApprovaCard>
      <ApprovaCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovaCard>
      <ApprovaCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          content="Agree with you!"
          avatar={faker.image.avatar()}
        />
      </ApprovaCard>
      <ApprovaCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          content="Hi there!"
          avatar={faker.image.avatar()}
        />
      </ApprovaCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));