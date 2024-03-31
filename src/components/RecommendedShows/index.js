import { Component } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import RecommendedCard from "../RecommendedCard";
import "./index.css";

class RecommendedShows extends Component {
  state = { recommendedData: [], isLoading: false };

  componentDidMount() {
    this.fetchRecommendedShowsApi();
  }

  fetchRecommendedShowsApi = async () => {
    this.setState({ isLoading: true });
    const recommendedShowsApiUrl =
      "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";
    const response = await fetch(recommendedShowsApiUrl);
    if (response.ok) {
      const fetchedData = await response.json();
      this.setState({ recommendedData: fetchedData.events, isLoading: false });
    }
  };

  renderSuccessView = () => {
    const { recommendedData } = this.state;
    return (
      <ul className="recommended-data-list-container">
        {recommendedData.map((eachData) => (
          <RecommendedCard
            recommendedData={eachData}
            key={eachData.distanceKm}
          />
        ))}
      </ul>
    );
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div className="recommended-views-bg-container">
        <div className="recommended-heading-bg-container">
          <div className="recommended-title-container">
            <h1 className="recommended-title">
              Recommended Shows
              <FaLongArrowAltRight className="arrow" />
            </h1>
          </div>
          <a href="#view_more" className="recommended-see-all-link">
            See all
          </a>
        </div>
        {isLoading ? null : this.renderSuccessView()}
      </div>
    );
  }
}

export default RecommendedShows;
