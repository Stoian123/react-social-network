import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='page-wrapper'>

      <div className="page-left">
        <div className="page-container">
          <Profile />
        </div>
      </div>

      <Navbar />

    </div>
  )
}

export default App;