import React from 'react';
import ToDo from '../Todo/ToDo';



const ToDoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredTodos.map((todo) => (
                    <ToDo 
                    setTodos={setTodos}
                    todos={todos} 
                    text={todo.text} 
                    key={todo.id}
                    todo={todo}/>
                ))}
            </ul>
            <div className='img-container'>
                <img src='../images/toDoList.png' alt='pic'/>
            </div>
        </div>
    );
}

export default ToDoList;