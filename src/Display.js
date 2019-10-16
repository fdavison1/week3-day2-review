import React from 'react'

export default function Display(props){
    // let posts = props
    let mappedPosts = props.posts.map( posts => (
        <div key='{posts.id}'>
            <h3>{posts.title}</h3>
            <img src={posts.imageURL}/>
            <p>{posts.content}</p>
            <button onClick={()=>props.deletePost(posts.id)}>X</button>
        </div>
    ))
    return(
    <div>
        {mappedPosts}
    </div>)
}