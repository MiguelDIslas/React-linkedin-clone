import { Widget } from "./Widgets.style";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const WidgetsComponent = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widget-article">
      <div className="widget-article-left">
        <FiberManualRecordIcon />
      </div>
      <div className="widget-article-right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <Widget>
      <div className="widget-header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Intel to build $3B Arizona Factory", "Subtitle for Intel")}
      {newsArticle("Is it a time for promotion", "Subtitle for promotion")}
      {newsArticle(
        "NYT, Spotify partner to boost audience",
        "Subtitle for Spotify"
      )}
    </Widget>
  );
};

export default WidgetsComponent;
