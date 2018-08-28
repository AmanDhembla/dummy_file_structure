export const add_path=({path=""}={})=>{
    return {
        type:"ADD_PATH",
        path: path
    }
}


export const remove_path=()=>{
    return {
        type:"REMOVE_PATH"
    }
}
