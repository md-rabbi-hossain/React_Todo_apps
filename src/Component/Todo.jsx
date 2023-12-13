import React, { useReducer, useState } from 'react';
import Taskitem from './Taskitem';
import '../css/Todo.css'

import reducer from '../utility/reducer';
import setlocalStoarage from '../utility/localstorage';

export default function Todo() {
    const [todos, dispatch] = useReducer(reducer, setlocalStoarage());
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_TO_DO",
            payload: input
        })

        const { tasks } = todos

        setlocalStoarage({ tasks: [...tasks, { text: input }] })
        setInput('')
    }

    return (
        <>
            <div className="task-app-container">
                <h1>Task Management App</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Add task'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button>Add</button>
                </form>
                <div className="task-list">
                    {todos.tasks.map((item) => (
                        <Taskitem key={item.id} item={item} dispatch={dispatch} />
                    ))}
                </div>
            </div>
        </>
    );
}

