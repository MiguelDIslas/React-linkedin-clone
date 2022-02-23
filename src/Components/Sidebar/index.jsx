import { Sidebar } from "./Sidebar.style";
import Avatar from "@mui/material/Avatar";
import background from "../../Image/code.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const SiderbarComponent = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar-recent-item">
      <div className="siderbar-hash">#</div>
      <p>{topic}</p>
    </div>
  );

  return (
    <Sidebar>
      <div className="siderbar-top">
        <img src={background} alt="" />
        <Avatar
          className="sidebar-avatar"
          src={user.photoUrl ? user.photoUrl : user.email[0]}
        />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar-stats">
        <div className="siderbar-stat">
          <p>Who viewed you</p>
          <p className="siderbar-stat-number">200</p>
        </div>
        <div className="siderbar-stat">
          <p>Views on post</p>
          <p className="siderbar-stat-number">500</p>
        </div>
      </div>

      <div className="siderbar-bottom">
        <p>Recent</p>
        {recentItem("React.js")}
        {recentItem("Vue.js")}
        {recentItem("Angular")}
        {recentItem("Next.js")}
        {recentItem("Laravel")}
      </div>
    </Sidebar>
  );
};

export default SiderbarComponent;
