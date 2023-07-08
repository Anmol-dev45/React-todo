import checkIcon from "../assets/icon-check.svg"
import crossIcon from "../assets/icon-cross.svg"
export default function TodoList({ darkMode, handleComplete, todos , handleDelete}) {
    const list = todos.map((todo) => <li key={todo.id} className={`${darkMode ? 'bg-dark-800 text-dark-200' : 'bg-light-200 text-light-700'} flex px-4 py-2 items-center justify-between list`} >
        <div className="flex items-center">
            <div className={`check flex items-center justify-center rounded-full w-5 h-5 border-2 ${darkMode ? 'border-dark' : 'border-light'}`} onClick={() => { handleComplete(todo.id) }}>{
                todo.completed ? <img src={checkIcon} alt="" /> : null
            }</div>

        </div>
        <p className="bg-transparent mr-2 outline-0 px-4 text-xl text-left w-11/12 cursor-pointer">{todo.title}</p>
        <button className="w-5 h-5"><img className="cross" src={crossIcon} alt="" onClick={() => {handleDelete(todo.id)}} /></button>
    </li>)
    return (
        <main>
            <ul>
                {list}
            </ul>
            <div></div>
        </main>
    )
}