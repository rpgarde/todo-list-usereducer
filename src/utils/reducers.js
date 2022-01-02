import {ACTIONS} from './actions.js'

export default function reducer(todos, action) {
  switch (action.type) {
    // Returns a new array with the new to-do added
    case ACTIONS.ADD_TODO:
      return [...todos, { ...action.payload }]

    case ACTIONS.TOGGLE_TODO:
      // Toggles the complete attribute
      return todos.map(todo=>{
        if(todo.id===action.payload.id){
          return{...todo,complete:!todo.complete}
        }
        return todo
      })
      // Returns a new array with the deleted ID excluded
      case ACTIONS.DELETE_TODO:
        return todos.filter(todo=>todo.id!==action.payload.id)
    default:
      return todos
  }
}
