import React, {Component} from 'react';
import './App.css'
import Display from './Display'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: 1,
      title: '',
      imageURL: '',
      content: '',
      posts: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deletePost = this.deletePost.bind(this)
  }

  handleChange(e){
    let {value, name} = e.target 
    this.setState({[name]: value})

  }

  handleSubmit(){
    let {imageURL, content, posts, title, id} = this.state
    this.setState({posts: [{
      id: id,
      title: title,
      imageURL: imageURL,
      content: content,
    },...posts]})
    this.setState({
      id: id + 1,
      title: '',
      imageURL: '',
      content: '',
    })}

    deletePost(id){
      let filtered = this.state.posts.filter(post => post.id !== id)
      this.setState({posts: [...filtered]})
    }
  

  render(){
    let {title, imageURL, content, posts} = this.state
    return(
      <div className="app">
          <h1>fred</h1>
        <div className='inputs'>
          <input name='title' placeholder='Add a Title' value={title} onChange={(e)=>this.handleChange(e)}/>
          <input name="imageURL" placeholder='Add an Image URL' value={imageURL} onChange={(e)=>this.handleChange(e)}/>
          <textarea name='content' placeholder='Add lots of Content!' value={content} onChange={(e)=>this.handleChange(e)}/>
        </div>
        <button onClick={()=>this.handleSubmit()}>Submit</button>
        <div>
          <h2>{title}</h2>
          <img src={imageURL}/>
          <p>{content}</p>
        </div>
        <div>
          <Display posts={posts} deletePost = {this.deletePost}/>
        </div>
      </div>
    )
  }
}


