import checkIcon from "../assets/icon-check.svg"
import crossIcon from "../assets/icon-cross.svg"
import { useState } from "react";
export default function TodoList({ darkMode, handleComplete, todos, handleDelete }) {

    const [currentList, setCurrentList] = useState(todos)
    const getIncompleteCount = () => {
        return todos.filter((todo) => !todo.completed).length;
    };
    let list = currentList;
    const handleCurrentList = control => {
        if(control === 'completed') {
            console.log("code sucessful")
            setCurrentList(todos.filter(todo => todo.completed))
        } else if(control === "active") {
            setCurrentList(todos.filter((todo) => !todo.completed))
        } else {
            
            setCurrentList(todos)
        }

    }
    list = list.map((todo) => <li key={todo.id} className={`${todo.completed ? `font-normal line-through ${darkMode ? "text-dark-200" : "text-light-700"}` : 'font-semibold'} ${darkMode ? 'bg-dark-800 text-dark-100 border-dark' : 'bg-light-200 text-light-900 border-light'} flex px-4 py-2 items-center justify-between list border-b-2`} >
        <div className="flex items-center">
            <div className={`check flex items-center justify-center rounded-full w-4 h-4 border-2 ${darkMode ? 'border-dark' : 'border-light'} ${todo.completed ? "bg-check border-none" : null}`} onClick={() => { handleComplete(todo.id) }}>{
                todo.completed ? <img src={checkIcon} alt="" /> : null
            }</div>

        </div>
        <p className="bg-transparent mr-2 outline-0 px-4  w-11/12 cursor-pointer text-base">{todo.title}</p>
        <button className="w-4 h-4"><img className="cross" src={crossIcon} alt="" onClick={() => { handleDelete(todo.id) }} /></button>
    </li>)
    return (
        <main>
            <ul>
                {list}
            </ul>
            <section>
                <div className={`px-4 py-2 flex  justify-between items-center ${darkMode ? 'bg-dark-800 text-dark-200 dark-control' : 'bg-light-200 text-light-700 light-control'} text-xs`}>

                    <p><span>{getIncompleteCount()}</span> items left</p>
                    <div className="flex gap-2">
                        <p onClick={() => {handleCurrentList("all")}}>All</p>
                        <p onClick={() => {handleCurrentList("active")}}>Active</p>
                        <p onClick={() => {handleCurrentList("completed")}}>Completed</p>
                    </div>
                    <p>Clear Completed</p>
                </div>
            </section>
        </main>
    )
}