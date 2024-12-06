import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div className='font-jost'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
