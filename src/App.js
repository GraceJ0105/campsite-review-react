import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ReviewTable from "./ReviewTable";
import UserSubmission from "./ReviewSubmission";
import CampsiteMap from "./CampsiteMap";
import video from "./background.mp4";
export default function App() {
  return (
    <div className="App">
      <video src={video} autoplay muted></video>

      <div className="container">
        <div className="card main">
          <h1>Campers - We Need You!</h1>
          <p>
            We spent the summer of 2022 exploring North America, and we were
            lucky enough to have plenty of pals to rely on for recommendations
            of where to stay, but we realised that there wasn't one place to go
            and find out where the best campsites were. When we set off on our
            adventure, we started to take notes and review each site we stayed
            at, so when the time comes, we can share with any pals that follow
            in our foot steps. Then we thought - why stop there? This should be
            out there for anyone to use and contribute. That's where you come in
            - ontribute your reviews below and use the map to find your next
            sweet camp spot.
          </p>

          <div className="row">
            <div className="col-sm-8">
              <UserSubmission />
            </div>
            <div className="col-sm-4">
              <CampsiteMap />
            </div>
          </div>
        </div>
        <div className="card reviewTable">
          <ReviewTable />
        </div>{" "}
        <footer>
          Coded by Grace Johnson, open source on{" "}
          <a
            href="https://github.com/GraceJ0105/campsite-review-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHUB
          </a>
        </footer>
      </div>
    </div>
  );
}