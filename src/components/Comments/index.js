import {Component} from 'react'
import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {username: '', userComment: '', count: 0, commentsList: []}

  onDeleteComment = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(each => each.id !== id),
    })
  }

  likeButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  renderList = () => {
    const {commentsList} = this.state
    return commentsList.map(each => (
      <CommentItem
        key={each.id}
        commentData={each}
        onDeleteComment={this.onDeleteComment}
        likeButton={this.likeButton}
      />
    ))
  }

  onAddComment = event => {
    event.preventDefault()
    const {username, userComment} = this.state

    const initialColor = `initial ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: v4(),
      name: username,
      comment: userComment,
      date: new Date(),
      isLiked: false,
      initial: initialColor,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      username: '',
      userComment: '',
    }))
  }

  onChangeName = event => {
    this.setState({username: event.target.value})
  }

  onChangeComment = event => {
    this.setState({userComment: event.target.value})
  }

  render() {
    const {username, userComment, commentsList} = this.state

    return (
      <div className="bg-container">
        <h1 className="head">Comments</h1>

        <div className="top-container">
          <form onSubmit={this.onAddComment} className="left-container">
            <div className="left-container">
              <p className="label-style">
                Say Something about 4.0 technologies.
              </p>
              <input
                type="text"
                placeholder="Your Name"
                className="input"
                value={username}
                onChange={this.onChangeName}
              />
              <textarea
                rows="12"
                cols="20"
                placeholder="Your Comment"
                value={userComment}
                onChange={this.onChangeComment}
              />
              <button type="submit" className="btn">
                Add Comment
              </button>
            </div>
          </form>

          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img"
            />
          </div>
        </div>

        <hr className="hr-line" />

        <div className="bottom-container">
          <p className="count-comment">
            <span className="count">{commentsList.length}</span>
            Comments
          </p>
        </div>
        <ul className="ul-list">{this.renderList()}</ul>
      </div>
    )
  }
}

export default Comments
