import './global-styles/index.scss';
import Header from './components/global/Header';
import DarkModeToggle from './components/global/DarkModeToggle';
import AppRouter from './routes/AppRouter';
import Footer from './components/global/Footer';
import { useAppContext } from './AppContext';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';



function App() {
  const { isMenuOpen } = useAppContext();

  return (
    <div className="App">
      <DarkModeToggle />
      <div className={`page-wrapper ${isMenuOpen ? 'show-menu' : ''}`}>
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
