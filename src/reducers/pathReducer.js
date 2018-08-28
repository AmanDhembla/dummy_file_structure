export default (state="",action) => {
  switch(action.type){
    case 'ADD_PATH':
      return state+"/"+action.path;
    case 'REMOVE_PATH':
      let dir=state.split("/")
      var temp="";
      for(var i=1;i<=dir.length-2;i++){
        temp+="/"
        temp+=dir[i]
      }
      return temp;
    default:
      return state;
  }
}
