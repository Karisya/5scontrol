import React, {useState} from "react";
import '../styles/Header.scss';
import { Link } from "react-router-dom";

const Header: React.FC=()=>{

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


    return(
    <header className="header">
        <div className="header__logo">5S Control</div>
        <nav className={`header__menu menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/tasks">Задачи 5S</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
            </ul>
        </nav>
        <div className="header__burger" onClick={toggleMenu}>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </div>
    </header>
)

}

export default Header