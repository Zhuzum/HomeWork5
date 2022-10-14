import UserInfo from "./UserInfo";
import CommentWrapper from "./CommentWrapper";
import { dateFormat } from "../Helpers/General";

const Comment = (props) => {
  return (
    <div className="Comment">
      <div className="userInfo">
        <UserInfo author={props.author} />
      </div>
      <div className="commentWrapper">
        <CommentWrapper>
          <p className="Comment-text">{props.text}</p>
          <div className="Comment-date">{props.date}</div>
        </CommentWrapper>
      </div>
    </div>
  );
};

export default Comment;