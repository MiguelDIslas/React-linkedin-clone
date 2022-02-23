import { Sidebar } from "./Sidebar.style";
import Avatar from "@mui/material/Avatar";
import background from "../../Image/code.jpg";

const SiderbarComponent = () => {
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
        <Avatar className="sidebar-avatar" />
        <h2>Profile Name</h2>
        <h4>profile.name@gmail.com</h4>
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
