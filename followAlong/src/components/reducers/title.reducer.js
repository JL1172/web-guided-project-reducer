import React from "react"

export const initialState = {
    title : "Hello earthlings!",
    editing : false,
    newTitleText : "",
}

export const reducer = (state,action) => {
    switch(action.type) {
        case(SET_TITLE) : 
            return ({...state,title : payload.title, newTitleText : "", editing : false})
    }
}