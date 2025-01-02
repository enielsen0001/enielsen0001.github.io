import './global-styles/index.scss';
import Header from './components/global/Header';
import AppRouter from './routes/AppRouter';
import Footer from './components/global/Footer';
import { useAppContext } from './AppContext';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';



function App() {
  const { isMenuOpen } = useAppContext();
  const loc = useLocation();


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
      <div className={`page-wrapper ${isMenuOpen ? 'show-menu' : ''}`}>
      <div className={`page-wrapper__inner ${isMenuOpen ? 'show-menu' : ''}`}>
        <Header />
        <AppRouter />
        <Footer />
        </div>

      </div>
    </div>
  );
}

export default App;
