import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(!inputText) {
            alert('This field is mandatory!')
        } else {
            setTodos([...todos, {
                text: inputText,
                completed: false,
                id: Math.random() * 5000
            }]);
            setInputText('');
        }
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" maxLength={50} required/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="active">Active</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
