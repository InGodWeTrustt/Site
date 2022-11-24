const store = {
    _state: {
        profilePage: {
            newPostText: 'Текст по умолчанию',
            posts: [
                { id: 1, msg: 'Привет Мир!', likesCount: 12 },
                { id: 2, msg: 'It\'s my first post!', likesCount: 12 },
                { id: 3, msg: 'Пост про дифференциальные уравнения', likesCount: 12 },
                { id: 3, msg: 'Пост про теорию вероятности и математическую статистику', likesCount: 12 },
            ]
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Test' },
                { id: 2, name: 'Test2' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 1, message: 'Hello' }
            ]
        },
        sidebar: []
    },
    _callSubscriber() { },
    getState() {
        return this._state
    },
    addPost() {
        let newPost = {
            id: 5,
            msg: this._state.profilePage.newPostText,
            likesCount: 2
        };

        this._state.profilePage.posts.push(newPost)
        this._callSubscriber(this._state)
    },
    updateNewPost(text) {
        this._state.profilePage.newPostText = text
        this._callSubscriber(this._state)
    },
    subscribe(observer){
        this._callSubscriber = observer
    }

}


export default store