
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from './pages/Shared/Footer';
import Header from './pages/Shared/Header';
import 'react-photo-view/dist/react-photo-view.css';
import './Assets/styles/App.css';

function App() {
  return (
    <div>
       <div><Toaster/></div>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </div>
  );
}

export default App;
