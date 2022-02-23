//Style
import { Header } from "./Header.style";
import SearchIcon from "@mui/icons-material/Search";
import HeaderButton from "../HeaderButton";

//Pictures
import linkedin from "../../Image/linkedin.png";
import profile from '../../Image/profile.jpg';

//Icons
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

const HeaderComponent = () => {
  return (
    <Header>
      <div className="header-left">
        <img src={linkedin} alt="" />
        <div className="header-search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header-right">
        <HeaderButton Icon={HomeIcon} title="Home" />
        <HeaderButton Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderButton Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderButton Icon={ChatIcon} title="Messaging" />
        <HeaderButton Icon={NotificationsIcon} title="Notifications" />
        <HeaderButton avatar={profile} title="Me" />
      </div>
    </Header>
  );
};

export default HeaderComponent;
