import Dialogs from './components/Dialogs/Dialogs';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';

import './App.css';

function App(props) {
  return (
    <div className='page-wrapper'>
      <div className="page-left">
        <div className="page-container">
        <Route path='/profile' render={() => <Profile state={props.state.profilePage}
          dispatch={props.dispatch}/>}/>
        <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        </div>
      </div>
    <Navbar />
    </div>
  )
}

export default App;