import React from 'react';
import {connect} from 'react-redux';
import {add_path} from "../actions/path";
import {remove_item} from "../actions/item";
import { Modal } from 'react-bootstrap';
import fileImage from "../file.png";
import folderImage from "../Shape.png";
import "../css/options.css";

class Options extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false },()=>{
      this.props.handle();
    });
  }

  handleShow=(e)=> {
    e.preventDefault();
    this.setState({show: true });
  }

  findAllchilderns=(items=[])=>{
    const arr=[];
    for(var i=0;i<items.length;i++){
      if(items[i].parent===this.props.item.name){
        arr.push(items[i]);
      }
    }
    return arr;
  }
  handleOpen=(e)=>{
    e.preventDefault();
    this.props.dispatch(add_path({path:this.props.item.name}))
  }


  Delete=(e)=>{
    e.preventDefault();
    this.props.dispatch(remove_item({name:this.props.item.name}))
  }
  render(){
    console.log(this.props);
    return (
      <div id="options-main">
        {this.props.item.type==="folder"?<button id="option-button" onClick={this.handleOpen}>Open</button>:null}
        <button id="option-button" onClick={this.handleShow}>GetInfo</button>
        <button id="option-button" style={{color:"#FF5942"}} onClick={this.Delete}>Delete</button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>File Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="option-img">{this.props.item.type==="folder"?<img src={folderImage} alt="file" />:<img src={fileImage} alt="file" />}</div>
            <div className="option-content"><p className="option-span">Name: </p> {this.props.item.name}</div>
            <div className="option-content"><span className="option-span">Size: </span> {this.props.item.size}kb</div>
            <div className="option-content"><span className="option-span">Creator Name: </span> {this.props.item.creator}</div>
            <div className="option-content"><span className="option-span">Created date: </span> {this.props.item.date}</div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default connect((state)=>{
  return{
    items: state.items,
    current_path: state.current_path
  }
})(Options);
