<<<<<<< HEAD
import React from 'react';

const ToDo = ({text, todo, todos, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(todoElement =>todoElement.id !== todo.id))
    };
    const completeHandler = () => {
        setTodos(todos.map((todoItem) => {
            if(todoItem.id === todo.id) {
                return {
                    ...todoItem,
                    completed: !todoItem.completed
                };
            }
            return todoItem;
        }))
    };
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>

    );
}

export default ToDo;
=======
import React from 'react';

const ToDo = ({text, todo, todos, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(todoElement =>todoElement.id !== todo.id))
    };
    const completeHandler = () => {
        setTodos(todos.map((todoItem) => {
            if(todoItem.id === todo.id) {
                return {
                    ...todoItem,
                    completed: !todoItem.completed
                };
            }
            return todoItem;
        }))
    };
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>

    );
}

export default ToDo;
>>>>>>> 1ef3ebd37c4fdcdd60b838ae79dbfbbcf5eef5b2
