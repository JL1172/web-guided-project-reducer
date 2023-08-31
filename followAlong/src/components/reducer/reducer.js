import { SET_TITLE,TOGGLE_EDITING,SET_NEW_TITLE } from "../actions/action";


export const initialValue = {
    title : "title",
    editing : false,
    newTitle : "",
}

export const reducer = (state,action) => {

    switch(action.type) {
        case(SET_TITLE) : 
        return({...state, title : action.payload, editing : false, newTitle : ""});
        case(TOGGLE_EDITING) : 
        return({...state, editing : true});
        case(SET_NEW_TITLE) :
        return({...state, title : "", newTitle : action.payload});
        default : 
        return(state);
    }
}