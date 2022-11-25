const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState = {
    newPostText: 'Текст по умолчанию',
    posts: [
        { id: 1, msg: 'Привет Мир!', likesCount: 12 },
        { id: 2, msg: 'It\'s my first post!', likesCount: 12 },
        { id: 3, msg: 'Пост про дифференциальные уравнения', likesCount: 12 },
        { id: 3, msg: 'Пост про теорию вероятности и математическую статистику', likesCount: 12 },
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                msg: state.newPostText,
                likesCount: 0
            }

            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer