import { useReducer } from "react";
import { initialState, reducer } from "../reducers/title.reducer";

//!TYPES
export const SET_TITLE = "SET_TITLE";
export const TOGGLE_EDITING = "SET_TITLE";
export const SET_NEW_TEXT_TITLE = "SET_NEW_TEXT_TITLE";


//!ACTIONS
export const setTitle = (title) => {
    return { type: SET_TITLE, payload: title }
}

export const setEditing = () => {
    return { type: TOGGLE_EDITING_EDITING };
}

export const setNewTitleText = (newTitleText) => {
    return { type: SET_NEW_TEXT_TITLE, payload: newTitleText }
}