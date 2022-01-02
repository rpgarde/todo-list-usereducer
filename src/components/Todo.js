import React from 'react'
import { ACTIONS } from '../utils/actions'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function Todo({ todo, dispatch }) {
    return (
        <Card style = {{ width: '18rem'}} className = "m-2">
            <Card.Body style={{ color: todo.complete ? '#AAA' : '#000' }}>
                    <Card.Title>
                    {todo.name}
                    </Card.Title>
                    <Button size = "sm" variant="secondary" onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>
                        Toggle
                    </Button>
                    <Button size = "sm" variant="danger" onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>
                        Delete
                    </Button>
            </Card.Body>
        </Card>
    )
}

export default Todo
