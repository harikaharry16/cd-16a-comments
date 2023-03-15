// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentData, onDeleteComment, likeButton} = props
  const {id, name, comment, date, isLiked, initial} = commentData
  console.log(name)

  const onClickLike = () => {
    likeButton(id)
  }

  const onDelete = () => {
    onDeleteComment(id)
  }

  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeText = isLiked ? 'sky' : 'grey'
  const dateTime = formatDistanceToNow(date)
  return (
    <li className="container">
      <div className="top">
        <div className="one-line">
          <button className={initial} type="button">
            {name[0]}
          </button>

          <div className="column-name-desc">
            <div className="name-time">
              <p className="name">{name}</p>
              <p className="time">{dateTime} </p>
            </div>

            <p className="comment">{comment}</p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="like-like">
          <img src={likeImg} alt="like" className="like-img" />
          <button className={likeText} type="button" onClick={onClickLike}>
            Like
          </button>
        </div>

        <button
          type="button"
          className="del-btn"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="del-img"
          />
        </button>
      </div>
      <hr className="hr-line" />
    </li>
  )
}

export default CommentItem
