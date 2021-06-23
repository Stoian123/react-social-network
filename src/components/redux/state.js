const state = {
  profilePage: {
    posts: [
      {id:1, message: 'First React Project!', likeCount:10},
      {id:2, message: 'Like pls.', likeCount:33}
    ]
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

export default state;