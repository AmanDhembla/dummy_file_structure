import React from 'react';
import myImage from "../dropdown.svg";
import "../css/item.css"

class Item extends React.Component{
  state={
    open:false
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

  handleClick=(e)=>{
    e.preventDefault();
    this.setState((prevState)=>{
      return {open:!prevState.open}
    })
  }

  render(){
    const temp=this.findAllchilderns(this.props.items);
    return (
      <div >
        <button id="sidebar-item" onClick={this.handleClick}>
          <span id="item-name">{this.props.item.name}</span>
          {this.props.item.type==="folder"?<span id="item-caret">{!this.state.open?<img src={myImage}  alt="file" />:<img src={myImage} style={{transform:"rotate(180deg)"}} alt="file" />}</span>:null}
        </button>
        <div id="embed-item">{
          this.state.open?temp.map((i)=>{
            return <Item item={i} items={this.props.items} key={i.name}/>
          }):null
        }</div>
      </div>
    )
  }
}

export default Item;
