export const ADD_TODO = "ADD_TODO";
export const CHANGE_VALUE = "CHANGE_VALUE";
export const PUSH_NEW_TODO = "PUSH_NEW_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO  = "TOGGLE_TODO";

export const addTodo = () => {
    return {type : ADD_TODO} //!just going to toggle input field visibility 
}
export const changeValue = (value) => {
    return {type : CHANGE_VALUE, payload : value};
}
export const pushNewTodo = (newTodo) => {
    return {type : PUSH_NEW_TODO, payload : {description : newTodo, complete : false}};
}
export const removeTodo = () => {
    return {type : REMOVE_TODO};
}
export const toggleTodo = (value) => {
    return {type : TOGGLE_TODO, payload : value};
} 