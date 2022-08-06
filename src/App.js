import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import GoogleAuth from './containers/google-auth';
import FacebookAuth from './containers/facebook-auth';
import NavBar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <>
      <NavBar/>
        <div style={{display: "flex", flexDirection: "column", minHeight: "85vh"}} className='container'>
          <GoogleAuth/>
          <FacebookAuth/>
        </div>
      <Footer/>
    </>
  );
}

export default App;
