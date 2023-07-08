import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import darkBg from "./assets/bg-desktop-light.jpg"

import Header from './components/Header'
import Search from './components/Search'
import TodoList from './components/TodoList'
function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [checked, setChecked] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])


  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  const handleChange = event => {
    setInputValue(event.target.value)
  }
  const handleCheck = () => {
    setChecked(!checked)
  }
  const handleComplete = id => {
    const updatedTodos = [...todos];
    const todoIndex = updatedTodos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      updatedTodos[todoIndex].completed = !updatedTodos[todoIndex].completed;
      setTodos(updatedTodos);
    }
  }
  const handleDelete = id => {
    let updatedTodos = [...todos];
    updatedTodos = updatedTodos.filter((todo) => todo.id != id)
    setTodos(updatedTodos)
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTodo = { id: uuidv4(), title: inputValue, completed: checked }
      setTodos([...todos, newTodo])
      setInputValue('')
    }

  }
  const handleTheme = () => {
    setDarkMode(!darkMode)

  }

  return (
    <div className={`${darkMode ? "bg-dark-900" : "bg-light-100"} h-screen grid `}>
      <img src={darkBg} className="absolute z-10" alt="" />

      <main className='w-96 mx-auto my-auto grid z-20'>

        <Header darkMode={darkMode} handleTheme={handleTheme}></Header>
        <Search darkMode={darkMode} checked={checked} handleCheck={handleCheck} handleChange={handleChange} inputValue={inputValue} handleSubmit={handleSubmit}></Search>
        <TodoList todos={todos} darkMode={darkMode} handleComplete={handleComplete} handleDelete={handleDelete}></TodoList>
      </main>
    </div>
  )
}

export default App
