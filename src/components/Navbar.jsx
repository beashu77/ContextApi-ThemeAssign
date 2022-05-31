import React,{useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Styles from './dataStyle.module.css';


const Navbar = () => {
    const {isLight,toggleTheme}=useContext(ThemeContext)
  return (
    <div className={Styles.navbar}>
        <h3 >My Dasboard</h3>
        <button onClick={toggleTheme}>
            {`Make ${isLight ? "dark" :"light"}`}
        </button>
    </div>
  )
}

export default Navbar