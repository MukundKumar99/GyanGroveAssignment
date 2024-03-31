import { Component } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import UpcomingEventCard from "../UpcomingEventCard";

import "./index.css";

class UpcomingEvents extends Component {
  state = { upcomingData: [], isLoading: false };

  componentDidMount() {
    this.fetchRecommendedShowsApi();
  }

  fetchRecommendedShowsApi = async () => {
    this.setState({ isLoading: true });
    const recommendedShowsApiUrl =
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming";
    const response = await fetch(recommendedShowsApiUrl);
    if (response.ok) {
      const fetchedData = await response.json();
      this.setState({ upcomingData: fetchedData.events, isLoading: false });
    }
  };

  renderSuccessView = () => {
    const { upcomingData } = this.state;
    return (
      <ul className="upcoming-list-bg-container">
        {upcomingData.map((eachData) => (
          <UpcomingEventCard eventData={eachData} key={eachData.distanceKm} />
        ))}
      </ul>
    );
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div className="upcoming-events-bg-container">
        <div className="upcoming-heading-bg-container">
          <div className="upcoming-title-container">
            <h1 className="upcoming-title">
              Upcoming Events
              <FaLongArrowAltRight className="arrow" />
            </h1>
          </div>
          <a href="#view_more" className="upcoming-see-all-link">
            See all
          </a>
        </div>
        {isLoading ? null : this.renderSuccessView()}
      </div>
    );
  }
}

export default UpcomingEvents;
