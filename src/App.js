import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='page-wrapper'>

      <div className="page-left">
        <div className="page-container">
          {/* <Profile /> */}
          <Dialogs />
        </div>
      </div>

      <Navbar />

    </div>
  )
}

export default App;