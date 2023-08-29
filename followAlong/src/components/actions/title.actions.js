
//!TYPES of actions
export const SET_TITLE = "SET_TITLE";
export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const SET_NEW_TEXT_TITLE = "SET_NEW_TEXT_TITLE";

//*dispatch actions 
//!ACTIONS --these are the actions themselves 
export const setTitle = (title) => {
    return { type: SET_TITLE, payload: title } //* the type is almost like the key for the reducer switch function
}

export const toggleEditing = () => {
    return { type: TOGGLE_EDITING };
}

export const setNewTitleText = (newTitleText) => {
    console.log("at action phase")
    return { type: SET_NEW_TEXT_TITLE, payload: newTitleText }
}