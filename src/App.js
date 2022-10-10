import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import GoogleAuth from './components/google';
import FacebookAuth from './components/facebook';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import GoogleAuthPage from './pages/google-auth';
import FacebookAuthPage from './pages/facebook-auth';
import NotFound from './pages/not-found';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/Challenge_SocialMediaLogin"  element={<HomePage/>}/>
            <Route path="/Challenge_SocialMediaLogin/google-auth"  element={<GoogleAuthPage/>}/>
            <Route path="/Challenge_SocialMediaLogin/facebook-auth"  element={<FacebookAuthPage/>}/>
            <Route path="/Challenge_SocialMediaLogin/*"  element={<NotFound/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
