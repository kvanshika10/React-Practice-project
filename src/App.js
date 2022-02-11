
import AddUser from './COMPONENTS/User/AddUser';
import UserList from './COMPONENTS/User/UserList';
import React, { useState } from 'react';

function App() {
  const UserData=[];
  const[Users,setUser]=useState(UserData);
   function newUserHandler(User){
     setUser(function(prevUser){
       return[User,...prevUser]
     })
   }
// instead of wrapper we can use a built in react fragment
  return (
    <React.Fragment>
    <AddUser onNewUser={newUserHandler}></AddUser>
    <UserList Users={Users} ></UserList>
    </React.Fragment>
  );
}

export default App;
