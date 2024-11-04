import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResumePage from '../components/pages/ResumePage';
import AboutPage from '../components/pages/AboutPage';
import ProjectsPage from '../components/pages/ProjectsPage';

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
  );
};

export default AppRouter;