import profilePageSlice from "./feautures/profilePage/profilePageSlice";

const { configureStore } = require("@reduxjs/toolkit");



// создание пустого хранилища Redux
const configStore = configureStore({
    reducer: {
        profilePage : profilePageSlice,
        dialogsPage: ''
    }
})



export default configStore