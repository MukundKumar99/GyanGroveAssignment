import { FaLocationDot } from "react-icons/fa6";
import { format } from "date-fns";
import "./index.css";

const UpcomingEventCard = (props) => {
  const { eventData } = props;
  const { cityName, eventName, date, weather, distanceKm } = eventData;
  const formattedDate = date ? format(new Date(date), "MMMM dd, yyyy") : "";

  //NOTE: Image Url is in Google Drive link format which is not supported in src for img tag in HTML. For sample I hane taken image of same url. It can be simply changed by putting image url instead of same url.

  return (
    <li className="upcoming-event-list">
      <img
        src="https://res.cloudinary.com/dc2b69ycq/image/upload/v1711890755/Rectangle_7_uwmrub.svg"
        alt={eventName}
        className="event-image"
        loading="lazy"
      />
      <p className="event-date">{formattedDate}</p>
      <div className="event-image-caption">
        <h1 className="upcoming-event-name">{eventName}</h1>
        <div className="event-location-and-weather">
          <p className="event-location">
            <FaLocationDot className="location-icon-dark" />
            {cityName}
          </p>
          <p className="event-weather">
            {weather} | {Math.round(distanceKm / 100)} Km
          </p>
        </div>
      </div>
    </li>
  );
};

export default UpcomingEventCard;
