import './App.css';
import MyContainer from "./components/MyContainer";
import About from "./components/About";
import Header from "./components/Header";
import Menu from "./components/Menu";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <> <Header />  <MyContainer /> </> } />
          <Route path="/about" element={ <> <Header /> <About /> </> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
