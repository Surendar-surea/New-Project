import react from "react"
import {useState} from "react"
import {imgobj} from "../btn components/datas/Datas"
import ImageChild from "./ImageChild"
import "./ImageView.css"
function ImageView(props){
    const[value,setValue]=useState(imgobj)
    return(
       
        <div className="container">
        
            {
                value.map((val)=>{
                    if(val.category.includes(props.status))

                    return(
                        <div>
                    <ImageChild val={val}/>

                        </div>
                    )

                })
            }



        </div>
    )
}
export default ImageView