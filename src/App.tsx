import './global-styles/index.scss';
import Navbar from './components/Navbar';
import DarkModeToggle from './components/DarkModeToggle';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className="App">
      <DarkModeToggle />
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
