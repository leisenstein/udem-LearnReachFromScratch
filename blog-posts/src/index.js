import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
  return (
    <div className='ui comments'>
      <UserCard>
        Hello, this is some plain text.
      </UserCard>
      <UserCard>
        <SingleComment 
          picture='https://picsum.photos/300/400' 
          name='Sarah' 
          date='Today at 5:00PM' 
          text='Its Amazing'/>
      </UserCard>

      <UserCard>
      <SingleComment 
        picture='https://picsum.photos/150/200' 
        name='Alex' 
        date='Yesterda at 1:01PM'  
        text='IKR'/>
      </UserCard>
      
      <UserCard>
      <SingleComment 
        picture='https://picsum.photos/200/300' 
        name='Jack' 
        date='Today at 4:33PM'  
        text='Great job!'/>
      </UserCard>
      

    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
