export const add_item=({name="",creator="",size=0,type="",createdAt=0,parent="root"}={})=>{
    return {
        type:"ADD_ITEM",
        item:{
            name,
            creator,
            size,
            createdAt,
            type,
            parent
        }
    }
}


export const remove_item=({name}={})=>{
    return {
        type:"REMOVE_ITEM",
        name
    }
}
