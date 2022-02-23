//Style
import { Header } from "./Header.style";
import HeaderButton from "../HeaderButton";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
//Pictures
import linkedin from "../../Image/linkedin-logo.png";

//Icons
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutApp = () => {
    dispatch(logout());
    signOut(auth);
  }
  return (
    <Header>
      <div className="header-left">
        <a
          href="https://www.flaticon.com/free-icons/linkedin"
          title="linkedin icons"
        >
          <img src={linkedin} alt="" />
        </a>

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
        <HeaderButton
          avatar={user?.photoUrl ? user.photoUrl : user.email[0]}
          title="Me"
          onClick={logoutApp}
        />
      </div>
    </Header>
  );
};

export default HeaderComponent;
