import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

const SEND_MESSAGE = 'SEND-MESSAGE'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY_TEXT = 'UPDATE-NEW-MESSAGE-BODY-EXT'

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
            newMessageBody: '',
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
    updateNewPost(text) {
        this._state.profilePage.newPostText = text
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                msg: this._state.profilePage.newPostText,
                likesCount: 2
            };

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY_TEXT) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if(action.type === SEND_MESSAGE){
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({ id: 6, message: this._state.dialogsPage.newMessageBody })
            this._callSubscriber(this._state)
        }
    }
}

window.store = store
export default store