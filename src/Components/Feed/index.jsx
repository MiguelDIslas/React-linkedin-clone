import { useState, useEffect } from "react";
import { Feed } from "./Feed.style";
import ShareButtonComponent from "../ShareButton";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import FlipMove from "react-flip-move";

//Icons
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import PostComponent from "../Posts";
import {  collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";


const FeedComponent = () => {
  const user = useSelector(selectUser);

  const [posts, setPosts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const postsCollection = collection(db, "posts");
    const q = query(postsCollection, orderBy('timestamp', 'desc'));
    onSnapshot(q,(snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
     } )
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    const postsCollection = collection(db, "posts");
    addDoc(postsCollection, {
      name: user.displayName,
      description: user.email,
      message: inputValue,
      photoUrl: user.photoUrl ? user.photoUrl : "",
      timestamp: serverTimestamp(),
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
      <FlipMove>
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
      </FlipMove>
    </Feed>
  );
};

export default FeedComponent;
