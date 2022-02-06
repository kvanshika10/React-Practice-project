
import './App.css';

import AddUser from './COMPONENTS/User/AddUser';
import UserList from './COMPONENTS/User/UserList';
import { useState } from 'react';

function App() {
  const UserData=[];
  const[Users,setUser]=useState(UserData);
   function newUserHandler(User){
     setUser(function(prevUser){
       return[User,...prevUser]
     })
   }

  return (
    <div>
    <AddUser onNewUser={newUserHandler}></AddUser>
    <UserList Users={Users} ></UserList>
    </div>
  );
}

export default App;
