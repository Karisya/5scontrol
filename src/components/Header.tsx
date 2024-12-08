import React from "react";
import '../styles/Header.scss';

const Header: React.FC=()=>{

    return(
    <header className="header">
        <div className="header__logo">5S Control</div>
        <nav className="header__menu menu">
            <ul>
                <li><a href="#home">Главная</a></li>
                <li><a href="#tasks">Задачи 5S</a></li>
                <li><a href="#contacts">Контакты</a></li>
            </ul>
        </nav>
    </header>
)

}

export default Header