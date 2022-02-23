import { ShareButton } from "./ShareButton.style";

const ShareButtonComponent = ({Icon, color, title}) => {
  return (
    <ShareButton>
          <Icon style={{ color: color }} />
          <h4>{title}</h4>
    </ShareButton>
  );
};

export default ShareButtonComponent;
