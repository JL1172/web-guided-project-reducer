import React, { useState, useReducer } from 'react';
import { changeTitle,editTitle,submitNewTitle } from './actions/action';
import { reducer,initialValue } from './reducer/reducer';

const Title = () => {
const [state,dispatch] = useReducer(reducer,initialValue);

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={()=> dispatch(editTitle())} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitle}
            onChange={(e)=>dispatch(changeTitle(e))}
          />
          <button
            onClick={()=> dispatch(submitNewTitle(state.newTitle))}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;