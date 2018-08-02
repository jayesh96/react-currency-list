export const ADD_DATA = 'ADD_DATA';

export function addDataById(items){
    console.log('items',items)
    const action = {
        type:ADD_DATA,
        items:items  
    }
    return action;
}