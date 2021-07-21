import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        {id:1, message: 'First React Project!', likeCount:10},
        {id:2, message: 'Like pls.', likeCount:33}
      ],
      newPostText: ''
    },
    dialogsPage: {
      users: [
        {id: 'kendall', name: 'Kendall'},
        {id: 'amanda', name: 'Amanda'},
        {id: 'john', name: 'John'},
        {id: 'jessica', name: 'Jessica'}, 
        {id: 'emma', name: 'Emma'},
        {id: 'masha', name: 'Masha'},
      ],
      messages: [
        {id:1, message: 'Hi'},
        {id:2, message: 'How are you?'},
        {id:3, message: 'something...'},
        {id:4, message: 'something...'}
      ],
      newMessageBody: ''
    }
  },
  _callSubscriber(){},

  getState(){
    return this._state;
  },
  subscribe(observer){
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    
    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;