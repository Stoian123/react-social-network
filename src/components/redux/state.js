let rerenderEntireTree = () => {};

const state = {
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
}

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0
  };
  
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;