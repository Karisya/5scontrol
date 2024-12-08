import React from "react";
import Header from "../components/Header";  
import '../styles/HomePage.scss';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <section className="home-page__content">
        <h1>Добро пожаловать в систему 5S Control!</h1>
        <p>
          Система 5S — это методология управления, которая помогает
          организациям поддерживать порядок и эффективность на рабочем месте. 
          Она состоит из пяти шагов:
        </p>
        <ol>
          <li><strong>Сортировка</strong>: Удаление ненужных вещей.</li>
          <li><strong>Соблюдение порядка</strong>: Организация вещей на месте.</li>
          <li><strong>Сияние</strong>: Чистота и поддержание порядка.</li>
          <li><strong>Стандартизация</strong>: Создание стандартов для поддержания порядка.</li>
          <li><strong>Самодисциплина</strong>: Поддержание достигнутых результатов.</li>
        </ol>
        <p>
          Присоединяйтесь к нам, чтобы улучшить управление и повысить
          продуктивность на рабочем месте с помощью 5S!
        </p>
      </section>
    </div>
  );
};

export default HomePage;
