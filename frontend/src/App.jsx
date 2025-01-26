import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ContactUs from './components/ContactUs';
import QuestionsComponent from './components/QuestionsComponent';
import Register from './components/Account/Register';
import BackGround from './Layout/BackGround';
import Services from './components/ServicesComponent';
import SearchTab from './Layout/SearchTab';
import Navbar from './Layout/Navbar';
import SignIn from './components/Account/SignIn';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* <BackGround /> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Navbar/>
        <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/questions" element={<QuestionsComponent/>}/>
        <Route path="/about" element={<AboutComponent/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        </Routes>
      
  </>);
};

export default App;
