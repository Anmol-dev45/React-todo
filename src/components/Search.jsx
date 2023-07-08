import checkIcon from "../assets/icon-check.svg"
export default function Search(props) {
    const { darkMode, handleChange, handleSubmit, inputValue, checked, handleCheck } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className={`${darkMode ? 'bg-dark-800 text-dark-200' : 'bg-light-200 text-light-700'} flex px-4 py-2 items-center`}>
                <div className="flex items-center">
                    <div className={`flex items-center justify-center rounded-full w-5 h-5 border-2 ${darkMode ? 'border-dark' : 'border-light'}`} onClick={handleCheck}>{
                        checked ? <img src={checkIcon} alt="" /> : null
                    }</div>

                </div>
                <input className="bg-transparent w-full mr-1 outline-0 px-4 text-xl" type="text" name="todo" value={inputValue} onChange={handleChange} />
            </div>
        </form>
    )
}