import { useReducer, useState } from 'react'
import Todo from './components/Todo';
import reducer from './utils/reducers';
import NewTodoForm from './components/NewTodoForm';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert'

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  return (
    <Container>
      <h1 className = "my-3">Your basic to-do list with useReducer</h1>
      <p>I've found useReducer to be a particularly difficult concept to get my head around, so here's a practice app I did. This was heavily influenced by web dev simplified's useReducer video, but I broke it up into different components, files, and also added react-bootstrap for basic styling.</p>
      <NewTodoForm dispatch={dispatch} setName={setName} name={name} />
      {todos.length>0 && (
        <>
          <Alert className = "mt-3" variant = "warning">Below are your todos. Click Toggle to mark them done or Delete to take them out of the list.</Alert>
        </>
      )}
      <div className="d-flex flex-row flex-wrap">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>
    </Container>
  );
}

export default App;
