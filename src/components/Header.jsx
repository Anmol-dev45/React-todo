import sunIcon from "../assets/icon-sun.svg"
import moonIcon from "../assets/icon-moon.svg"
export default function Header({ darkMode, handleTheme }) {
    return (
        <header className="pb-8">
            <div className="flex justify-between items-center">
                <h1 className={`font-semibold text-3xl custom-ls ${darkMode ? 'text-dark-900' : 'text-light-200'}`}>TODO</h1>
                <div className="" onClick={handleTheme}>
                    <img src={darkMode ? sunIcon : moonIcon} alt="Theme icon" />
                </div>
            </div>
        </header>
    )
}