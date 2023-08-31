import { ADD_TODO, CHANGE_VALUE, PUSH_NEW_TODO, REMOVE_TODO, TOGGLE_TODO } from "./action"

const todos = [
    {
        description: "do laundry",
        completed: false,
        id : 1,
    },
    {
        description: "do chores",
        completed: false,
        id : 2,
    },
    {
        description: "walk dog",
        completed: false,
        id : 3,
    },
    {
        description: "homework",
        completed: false,
        id : 4,
    },
    {
        description: "study DSA",
        completed: false,
        id : 5,
    },
]
export const initialState = {
    todos: todos, //!default list
    todoInQue: "", //!change value
    editMode: false,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case(ADD_TODO):
            return ({ ...state, editMode: !state.editMode })
        case(CHANGE_VALUE) :
            return({...state, todoInQue : action.payload})
        case(PUSH_NEW_TODO) :
            return({...state, todos : [...state.todos,action.payload], todoInQue : ""})
        case(TOGGLE_TODO) :
            return({...state, })
        default:
            return (state)
    }
}