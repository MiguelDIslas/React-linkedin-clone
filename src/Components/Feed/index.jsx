import { useState, useEffect } from "react";
import { Feed } from "./Feed.style";
import ShareButtonComponent from "../ShareButton";
//Icons
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import PostComponent from "../Posts";
import { db } from "../../firebase";
import firebase from "firebase";

const FeedComponent = () => {
  const [posts, setPosts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Miguel",
      description: "Test",
      message: inputValue,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
      setInputValue('');
  };

  return (
    <Feed>
      <div className="feed-input-container">
        <div className="feed-input">
          <BorderColorIcon />
          <form action="">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed-input-options">
          <ShareButtonComponent
            Icon={PhotoSizeSelectActualIcon}
            color={"var(--post-blue)"}
            title={"Photo"}
          />
          <ShareButtonComponent
            Icon={YouTubeIcon}
            color={"var(--post-green)"}
            title={"Video"}
          />
          <ShareButtonComponent
            Icon={EventIcon}
            color={"var(--post-amber)"}
            title={"Event"}
          />
          <ShareButtonComponent
            Icon={ArticleIcon}
            color={"var(--post-red)"}
            title={"Write article"}
          />
        </div>
      </div>

      {/* Post  */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        return (
          <PostComponent
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        );
      })}
    </Feed>
  );
};

export default FeedComponent;
