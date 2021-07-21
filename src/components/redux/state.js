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
      ]
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
    if(action.type === 'ADD-POST'){
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      };
      
      this._state.profilePage.posts.push(newPost);
      this._callSubscriber(this._state);
    } 
    else if(action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
};

export default store;
window.store = store;