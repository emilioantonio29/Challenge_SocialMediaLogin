import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import GoogleAuth from './components/google';
import FacebookAuth from './components/facebook';
import NavBar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <>
      <NavBar/>
        <body style={{display: "flex", flexDirection: "column", minHeight: "85vh"}} className='container'>
          <GoogleAuth/>
          <FacebookAuth/>
        </body>
      <Footer/>
    </>
  );
}

export default App;
