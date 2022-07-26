<<<<<<< HEAD
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
=======
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
>>>>>>> 1ef3ebd37c4fdcdd60b838ae79dbfbbcf5eef5b2
