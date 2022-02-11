import classes from './ErrorModal.module.css'
import Button from './Button'
import Card from './Card'
import React from 'react'
import ReactDOM  from 'react-dom'

// initially we have enclosed the backdrop and modal component inside the react fragment thereforce it is coming just with the form//
// inappropriate in terms of styling so instead of that we will use portal from react dom method which helps in rendering the element
// at the positio where we want to in the final html code

function ErrorModal(props){
    function Backdrop(props){
         return(<div className={classes.backdrop} onClick={props.onConfirm}></div>)
        }
        function Modal(props){
            return(
            <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>OK</Button>
            </footer>
            </Card>
            )
        }

    return(
    <React.Fragment>
       {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}></Backdrop>,document.getElementById("backdrop-root"))}
       {ReactDOM.createPortal(<Modal onConfirm={props.onConfirm} title={props.title} message={props.message} ></Modal>,document.getElementById("overlay-root"))}
   
</React.Fragment>
    )}


export default ErrorModal