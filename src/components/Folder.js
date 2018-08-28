import React from 'react';
import myImage from "../Shape.png";
import Options from "./Options";
import "../css/folder.css"
import {add_path} from "../actions/path";
import {connect} from 'react-redux';

class Folder extends React.Component{
  state={
    visibility:false
  }
  handleClick=(event)=>{
    console.log("here");
    if(event){
      event.preventDefault();
    }
    this.setState((prevState)=>{
      return {visibility: !prevState.visibility}
    })
  }
  doubleClick=(e)=>{
    e.preventDefault();
    this.props.dispatch(add_path({path:this.props.item.name}))
  }
  render(){
    return (
      <div id="folder-content" onDoubleClick={this.doubleClick} onContextMenu={this.handleClick}>
        <img id="folder-img" src={myImage} alt="folder" />
        <span id="folder-name">{this.props.item.name}</span>
        {
          this.state.visibility?<Options handle={this.handleClick} item={this.props.item}/>:null
        }
      </div>
    )
  }
}

export default connect()(Folder);
