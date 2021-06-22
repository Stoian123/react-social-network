import Dialogs from './components/Dialogs/Dialogs';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

function App(props) {
  return (
    <BrowserRouter>
      <div className='page-wrapper'>
        <div className="page-left">
          <div className="page-container">
          <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
          <Route path='/dialogs' render={() => <Dialogs users={props.users} messages={props.messages}/>}/>
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          </div>
        </div>
      <Navbar />
      </div>
    </BrowserRouter>
  )
}

export default App;