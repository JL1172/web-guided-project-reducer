export const SET_TITLE = "SET_TITLE";
export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const SET_NEW_TITLE = "SET_NEW_TITLE";

export const changeTitle = e => {
    return {type : SET_NEW_TITLE, payload : e.target.value }
}

export const editTitle = () => {
    return {type : TOGGLE_EDITING}
}

export const submitNewTitle = (title) => {
    return {type : SET_TITLE, payload : title} 
}
