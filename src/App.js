import logo from './logo.svg';
import './App.css';
import ButtonPannel from "./btn components/ButtonPannel";
import {useState} from "react";
import ImageView from "./imagecomponents/ImageView";

function App() {
  const[status,setStatus]=useState("")
  return (
    <div className="App">
      <ButtonPannel send={(a)=>{setStatus(a)}}/>
      <ImageView status={status}/>
      
    </div>
  );
}

export default App;
