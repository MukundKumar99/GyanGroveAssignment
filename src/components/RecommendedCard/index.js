import { FaLocationDot } from "react-icons/fa6";
import { format } from "date-fns";
import "./index.css";

const RecommendedCard = (props) => {
  const { recommendedData } = props;
  const { cityName, distanceKm, date, eventName, imgUrl, weather } =
    recommendedData;

  //NOTE: Image Url is in Google Drive link format which is not supported in src for img tag in HTML. For sample I hane taken image of same url. It can be simply changed by putting image url instead of same url.

  const formattedDate = date ? format(new Date(date), "MMMM dd, yyyy") : "";
  return (
    <li className="recommended-card-list">
      <img
        src="https://res.cloudinary.com/dc2b69ycq/image/upload/v1711880390/Rectangle_4-1_ywqpnk.svg"
        alt={cityName}
        className="city-image"
      />
      <div className="image-caption">
        <div className="city-name-and-date-container">
          <h1 className="event-name">{eventName}</h1>
          <p className="date">{formattedDate}</p>
        </div>
        <div className="location-weather-container">
          <p className="city-name">
            <FaLocationDot className="location-icon-light" /> {cityName}
          </p>
          <p className="weather-and-distance">
            {weather} | {Math.round(distanceKm / 100)} Km
          </p>
        </div>
      </div>
    </li>
  );
};

export default RecommendedCard;
