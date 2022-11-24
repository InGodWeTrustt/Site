import React, { useRef } from 'react'
import s from './MyPosts.module.css'
import Post from './Post'

export default function MyPosts({ posts, addPost, updateNewText }) {

    let postElements = posts.map(({ msg, likesCount }) => <Post key={msg} msg={msg} likesCount={likesCount} />)

    const newPostElement = useRef()

    const addNewPost = () => {
        let text = newPostElement.current.value
        addPost(text)
        updateNewText('')
    }

    return (
        <div className={s.postblock}>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button
                    onClick={addNewPost}
                >
                    addNewPost
                </button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}
