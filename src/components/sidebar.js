import React from 'react';
import {connect} from 'react-redux';
import Item from "./Item";
import "../css/sidebar.css"

const Sidebar = (props)=>{
    return (
      <div id="sidebar">
        <p id="sidebar-heading">ROOT</p>
        {
          props.items.map((i)=>{
            return <Item items={props.completeList} item={i} key={i.name}/>
          })
        }
      </div>
    )
}

export default connect((state)=>{
  return{
    items: state.items.filter((item)=>{
      if(item.parent==="root"){
        return item
      }
    }),
    completeList: state.items
  }
})(Sidebar);
