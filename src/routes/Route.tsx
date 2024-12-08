import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import HomePage from "../pages/HomePage"
import ContactPage from "../pages/ContactPage";
import TasksPage from '../pages/TasksPage';

const MainRoute: React.FC = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage/>} />
          <Route path="/contacts" element={<ContactPage/>} />
        </Routes>
      <div>
      <Outlet/>
      </div>
    </>
  );
};

export default MainRoute;