
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import NewUser from './Pages/NewUser';
import RegisterUser from './Pages/RegisterUser';

const App = () => {
  return (
    <div className="central">
      <div className='app'>
        <div className='bannerText'> Flexi Yoga Center</div>
        <div className='formForEntry'>
          <Router>
            <Routes>
              <Route path='/' element={<NewUser />} />
              <Route path='/Login' element={<RegisterUser />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
