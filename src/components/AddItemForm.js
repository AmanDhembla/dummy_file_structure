import React from 'react';
import {add_item} from "../actions/item";
import {connect} from 'react-redux';
import "../css/form.css"
class AddItemForm extends React.Component{
  state={
    name:'',
    creator:'',
    size:"",
    date:''
  }
  onNameChange=(e)=>{
    const val=e.target.value;
    this.setState(()=>{
      return {name:val}
    })
  }
  onCreatorChange=(e)=>{
    const val=e.target.value;
    this.setState(()=>{
      return {creator:val}
    })
  }
  onSizeChange=(e)=>{
    const val=e.target.value;
    this.setState(()=>{
      return {size:val}
    })
  }
  onDateChange=(e)=>{
    const val=e.target.value;
    this.setState(()=>{
      return {date:val}
    })
  }
  onSubmit=(e)=>{
    e.preventDefault();
    let dir=this.props.current_path.split("/")
    dir=dir[dir.length-1]
    const item={
      name:this.state.name,
      creator:this.state.creator,
      size:this.state.size,
      date:this.state.date,
      type:this.props.type,
      parent:dir
    }
    this.props.dispatch(add_item(item));
  }
  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Name" value={this.state.name} onChange={this.onNameChange}/>
          <input type="text" placeholder="Creator" value={this.state.creator} onChange={this.onCreatorChange}/>
          <input type="number" placeholder="Size" value={this.state.size} onChange={this.onSizeChange}/>
          <input type="text" placeholder="Date" value={this.state.date} onChange={this.onDateChange}/>
          <button>Create</button>
        </form>
      </div>
    )
  }
}

export default connect((state)=>{
  return{
    current_path: state.current_path
  }
})(AddItemForm);
