import React, { useState, useReducer, useEffect } from 'react';
import { initialState,reducer } from './reducers/title.reducer';
import { setTitle,toggleEditing,setNewTitleText } from './actions/title.actions';


const Title = () => {
const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={()=> dispatch(toggleEditing())} className="far fa-edit" />
          {/* <button onClick={()=> dispatch(toggleEditing())}>toggle</button> */}
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitleText}
            onChange={(e)=> dispatch(setNewTitleText(e.target.value))}
          />
          <button
            onClick={()=> dispatch(setTitle(state.newTitleText))}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;