import React from 'react';
import {connect} from 'react-redux';
import CombinedForm from "./CombinedForm";
import File from "./File";
import Folder from "./Folder";
import myImage from "../arrow.png";
import {remove_path} from "../actions/path";
import "../css/landing.css";

class Landing extends React.Component{
  state={
    search:""
  }
  findAllchilderns=(items=[])=>{
    const arr=[];
    let dir=this.props.current_path.split("/");

    dir=dir[dir.length-1];
    for(var i=0;i<items.length;i++){
      if(this.state.search!==""){
        if(items[i].parent===dir && items[i].name.includes(this.state.search)){
          arr.push(items[i]);
        }
      }else{
        if(items[i].parent===dir){
          arr.push(items[i]);
        }
      }
    }
    return arr;
  }
  handleClick=(e)=>{
    e.preventDefault();
    this.props.dispatch(remove_path());
  }

  onSearchChange=(e)=>{
    const val=e.target.value;
    this.setState(()=>{
      return {search:val}
    })
  }

  render(){
    return (
      <div id="landing">
        <div id="landing-header">
          <div >{this.props.current_path!=="/root"?<button id="landing-button" onClick={this.handleClick}><img src={myImage} alt="file" /></button>:null}</div>
          <div id="landing-path">{this.props.current_path}</div>
          <form id="landing-form">
            <input type="text" placeholder="Search for anything" value={this.state.search} onChange={this.onSearchChange}/>
          </form>
        </div>
        {
          this.findAllchilderns(this.props.items).map((i)=>{
            if(i.type==="file"){
                return <File item={i} key={i.name}/>
            }else{
              return <Folder item={i} key={i.name}/>
            }
          })
        }
        <CombinedForm />
      </div>
    )
  }
}

export default connect((state)=>{
  return{
    items: state.items,
    current_path: state.current_path
  }
})(Landing);
