import react from "react"
import "./datas/Button.css"
function ButtonPannel(props){
    function handleClick(btnv){
        props.send(btnv)
       

    }
    return(
        <div className="btn">
            <button onClick={()=>{handleClick("all")}}>Show All</button>
            <button onClick={()=>{handleClick("lp")}}>Laptops</button>
            <button onClick={()=>{handleClick("mb")}}>Mobiles</button>
            <button onClick={()=>{handleClick("ipd")}}>Ipads</button>

        </div>
    )
}
export default ButtonPannel
