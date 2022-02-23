import {forwardRef} from 'react'
import { Post } from "./Post.style";
import Avatar from "@mui/material/Avatar";
import ShareButtonComponent from "../ShareButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

const PostComponent = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <Post ref={ref}>
      <div className="post-header">
        <Avatar src={photoUrl} />
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post-body">
        <p>{message}</p>
      </div>

      <div className="post-buttons">
        <ShareButtonComponent
          Icon={ThumbUpIcon}
          color={"gray"}
          title={"Like"}
        />
        <ShareButtonComponent
          Icon={CommentIcon}
          color={"gray"}
          title={"Comment"}
        />
        <ShareButtonComponent Icon={ShareIcon} color={"gray"} title={"Share"} />
        <ShareButtonComponent Icon={SendIcon} color={"gray"} title={"Send"} />
      </div>
    </Post>
  );
});

export default PostComponent;
