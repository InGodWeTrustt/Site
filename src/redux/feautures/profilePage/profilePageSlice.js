import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newPostText: 'Текст по умолчанию',
    posts: [
        { id: 1, msg: 'Привет Мир!', likesCount: 12 },
        { id: 2, msg: 'It\'s my first post!', likesCount: 12 },
        { id: 3, msg: 'Пост про дифференциальные уравнения', likesCount: 12 },
        { id: 3, msg: 'Пост про теорию вероятности и математическую статистику', likesCount: 12 },
    ]
}

const profilePageSlice = createSlice({
    name: 'profilePage',
    initialState,
    reducers: {}
})


// Экспортируем во внешний мир наш редьюсер
export default profilePageSlice.reducer