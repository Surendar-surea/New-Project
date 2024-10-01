function ImageChild(props){
    return(
        <div className="datas">
            <img src={props.val.imgurl}/>
            <div className="card">
            <h2>{props.val.name}</h2>
           <h4>{props.val.rate}</h4>
           <p>{props.val.rate1}</p>
           <p>{props.val.ram}</p>
           <p>{props.val.battery}</p>
           <p>{props.val.processor}</p>
            </div>
           
           
            

        </div>
    )
}
export default ImageChild;