import React from "react";
import { reducer, initialState } from "./reducer";
import { addTodo, changeValue, pushNewTodo, removeTodo, toggleTodo } from "./action";
import { useReducer } from "react";

export default function Name() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ display: 'flex', flexDirection: "column",alignItems : "center"}}>
            <h3>Todo List</h3>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex',flexDirection: "column", marginBottom : "1rem"  }}>
                <button onClick={() => dispatch(addTodo())}>{state.editMode ? "close" : "add"}</button>
                <button onClick={()=> dispatch(removeTodo())}>Remove Completed</button>
                </div>
                {state.editMode && <div>
                    <input type="text" id="todoInQue"
                        name="todoInQue" value={state.todoInQue}
                        onChange={(e) => dispatch(changeValue(e.target.value))} />
                    <button onClick={()=> dispatch(pushNewTodo(state.todoInQue))}>Add To List</button>
                </div>
                }
            </div>
            {state.todos.map((n, i) => {
                return <li onClick={(e)=> dispatch(toggleTodo(n.id,e.target))} className = {n.completed ? "completed" : ""} 
                key={i}>{n.description}</li>
            })}
        </div>
    )
}