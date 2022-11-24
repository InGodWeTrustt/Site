import React from 'react'
import MyPosts from './MyPosts'
import ProfileInfo from './ProfileInfo'
import s from './Profile.module.css'

export default function Profile({state, addPost}) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={state.posts} addPost={addPost}/>
    </div>
  )
}
