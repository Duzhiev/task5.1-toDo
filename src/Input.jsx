import React, { useState } from 'react';

const Input = () => {

    const [todos, setTodos] = useState([])

    const [text, setText] = useState("");

    const [blur, setBlur] = useState(false);


    const addTodo = () => {
        setTodos([{
            text: text
        }, ...todos]);
        setText('');
    }

    const deleteTodo = (id) => {
        const d = todos.filter((todo, index) => {
            if (index === id) {
                return false
            }
            return true
        })
        setTodos(d)
    }

    const newTodos = todos.map((todo, index) => {
        return (
            <div className='text'>
                <div>
                    {todo.text}
                </div>
                <div>
                    <button className='deleteBtn' onClick={() => deleteTodo(index)}>❌</button>
                </div>
            </div>
        )
    });

    const handleSetBlur = (e) => {
        if (!text) {
            setBlur(true)
            e.target.className = "inp red"
        }
        if (text) {
            setBlur(false)
            e.target.className = 'inp default'
        }
    }

    return (
        <>
            <div className='toDo'>
                <input className='inp'
                    type='text'
                    placeholder='Введите текст...'
                    value={text}
                    onBlur={handleSetBlur}
                    onChange={(e) => setText(e.target.value)}></input>
                <button className='btn'
                    disabled={!text}
                    onClick={addTodo}>Добавить</button>
            </div>
            <div>
                {blur ? <div className='blur'>Поле ввода не должно быть пустым</div> : null}
            </div>
            <div className='text1'>
                {newTodos}
            </div>
        </>
    );
};

export default Input;