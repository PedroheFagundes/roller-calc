import { HashRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from "./Routes";


function App() {


  return (
    <HashRouter>
      <div className='template'>
        <Header />
        <Routes />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
