import './global-styles/index.scss';
import Header from './components/global/Header';
import AppRouter from './routes/AppRouter';
import Footer from './components/global/Footer';
import { useAppContext } from './AppContext';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';



function App() {
  const { isMenuOpen } = useAppContext();
  const loc = useLocation();
  const mainContentRef = useRef<HTMLDivElement>(null);


    useEffect(() => {

      if(!!loc.hash) {
        const element = document.getElementById(loc.hash.substring(1));

        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo(0, 0);
      }

    }, [loc.pathname]);

  return (
    <div className="App">
      <button className="skip-link primary-cta" onClick={() => {
        if (mainContentRef.current) {
          mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
          mainContentRef.current.focus();
        }
      }}>Skip to Content</button>
      <div className={`page-wrapper ${isMenuOpen ? 'show-menu' : ''}`}>
      <div className={`page-wrapper__inner ${isMenuOpen ? 'show-menu' : ''}`}>
        <Header />
        <div id="main-content" tabIndex={-1} ref={mainContentRef}>
          <AppRouter />
        </div>
        <Footer />
        </div>

      </div>
    </div>
  );
}

export default App;
