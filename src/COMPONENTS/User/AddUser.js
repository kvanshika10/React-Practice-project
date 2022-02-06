import React,{useState} from "react"
 import classes from  './AddUser.module.css'
import Card from '../UI/Card.js'
import Button from "../UI/Button.js"
import ErrorModal from "../UI/ErrorModal";




function AddUser(props){

const[UserName,setUserName]=useState('');
const[UserAge,setUserAge]=useState('');
const[error,setError]=useState();
    function addUserHandler(event){
        event.preventDefault();
        const Userinfo={
          id:Math.random(),
          name:UserName,
          age:UserAge
        }
        
        if(UserName.trim().length===0||UserAge.trim().length===0){
             setError({
               title:"Invalid Input",
               message:"Please enter a valid name and  age(non-empty values)"
             })
             return;
            }
            if(+UserAge<1){
              setError({
                title:"Invalid Age",
                message:"Please enter a valid age"
              })
              return;
            }
          props.onNewUser(Userinfo)
        setUserName('');
        setUserAge('');
    }
    function usernameChangeHandler(event){
      setUserName(event.target.value);      

    }
    function ageChangeHandler(event){
        setUserAge(event.target.value);
    }
   function errorHandler(){
     setError(null);
     
   }
    return(
      <div>
     {error&& <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
     <Card  className={classes.input}>
    <form onSubmit={addUserHandler}>
  <label>Username</label>
    <input type="text"  value={UserName} onChange={usernameChangeHandler}></input>
    
    <label>Age(Years)</label>
    <input type="number"  step="1" value={UserAge} onChange={ageChangeHandler}></input>
    <Button type="submit"> Add User</Button>
      </form>
    </Card>
    </div>

    )}

export default AddUser

 