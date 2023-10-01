import Header from './common/siteLayout/Header';
import Footer from './common/siteLayout/Footer'
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route, Link ,NavLink} from 'react-router-dom';
import './App.css';
import About from './pages/about'
import ContactUs from './pages/contcat-us'
import Home from './pages/home'
import Service from './pages/services';
import SiteLayout from './common/siteLayout';

function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route index element={<SiteLayout><Home/></SiteLayout>}></Route>
        <Route path='about' element={<SiteLayout><About/></SiteLayout>} ></Route>
        <Route path='contact' element={<SiteLayout><ContactUs/></SiteLayout>}></Route>
        <Route path='services' element={<SiteLayout><Service/></SiteLayout>}></Route>
        
      </Routes>
      </main>
    </BrowserRouter>
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />)

export default App;
