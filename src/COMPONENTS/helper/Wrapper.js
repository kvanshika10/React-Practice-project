// what is wrapper 
// so basically we can return only one jsx element in the component and if we want to return multiple jsx element we have 
// to wrap it in a div so for most of the component we have to wrap a div // so if we se the final html code we end up with a lot of 
// divs which is not good in terms of format and styling so we used a wrapper instead
function Wrapper(props){
    return props.children;
}
export default Wrapper