import React from 'react';
import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';
import { useState } from 'react';

function App() {
  const [usersList, setUsersList]=useState([]); 
  
  const addUserHandler = (userName, userAge)=>{
    setUsersList((prevState)=>{
      return(
        [...prevState, {name: userName, age: userAge, id: Math.random().toString()}]
      )
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
