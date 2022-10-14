import "./CommentWrapper.css"
function CommentWrapper(props) {
  return <div className="Comment-wrapper">{props.children}</div>;
}

export default CommentWrapper;