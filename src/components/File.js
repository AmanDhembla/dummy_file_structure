import React from 'react';
import myImage from "../file.png";
import Options from "./Options";
import "../css/file.css"

class File extends React.Component{
  state={
    visibility:false
  }
  handleClick=(event)=>{
    if(event){
      event.preventDefault();
    }
    this.setState((prevState)=>{
      return {visibility: !prevState.visibility}
    })
  }
  render(){
    let extension=this.props.item.name.split(".");
    
    return (
      <div id="file-content" onContextMenu={this.handleClick}>
        <img id="file-img" src={myImage} alt="file" />
        <div id="file-extension">{
          extension.length!==1?"."+extension[extension.length-1]:null
        }</div>
        <span id="file-name">{this.props.item.name}</span>
        {
          this.state.visibility?<Options handle={this.handleClick} item={this.props.item}/>:null
        }
      </div>
    )
  }
}

export default File;
