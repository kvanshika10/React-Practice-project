import classes from  './Button.module.css'



function Button(props){


return (
<button type="submit" className={classes.button} type={props.children|| "button"} onClick={props.onClick}>{props.children}</button>

)}

export default Button