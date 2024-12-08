import React from "react";
import '../styles/Header.scss';
import { Link } from "react-router-dom";

const Header: React.FC=()=>{

    return(
    <header className="header">
        <div className="header__logo">5S Control</div>
        <nav className="header__menu menu">
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/tasks">Задачи 5S</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
            </ul>
        </nav>
    </header>
)

}

export default Header