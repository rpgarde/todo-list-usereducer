import React from 'react'
import { ACTIONS } from '../utils/actions.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

export default function NewTodoForm({ dispatch, setName, name }) {

    function handleSubmit(e) {
        e.preventDefault()
        // Uses dispatch to select the ADD_TODO action, sending a payload with name
        dispatch({ 
            type: ACTIONS.ADD_TODO, 
            payload: {id: Date.now(), name: name, complete: false }
            })
        setName('')
    }
    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
            <Form.Control 
                type="text" 
                placeholder="Add a todo" 
                value={name} 
                onChange={e => setName(e.target.value)} />
            <Button type = "submit" id="button-addon1">Submit</Button>
            </InputGroup>
        </Form>
    )
}