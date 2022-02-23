import { Wrapper } from "./HeaderButton.style";
import Avatar from "@mui/material/Avatar";

const HeaderButton = ({avatar, Icon, title, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      {Icon && <Icon className="header-button-icon" />}
      {avatar && <Avatar className="header-button-icon" src={avatar} />}
      <h3 className="header-button-title">{title}</h3>
    </Wrapper>
  );
};

export default HeaderButton;
