import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ReviewTable from "./ReviewTable";
import UserSubmission from "./ReviewSubmission";

import video from "./background.mp4";
import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export default function App() {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    console.log(results);
    setAddress(value);
    setCoordinates(ll);
  };
  return (
    <div className="App">
      <video src={video} autoPlay muted></video>

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
             
            </div>
          </div>
        </div>
        <div>
          <p>lat: {coordinates.lat}</p>
          <p>long: {coordinates.lng}</p>
          <p>Address: {address}</p>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div key={suggestions.description}>
                <input
                  {...getInputProps({
                    placeholder: "Search Places ...",
                    className: "location-search-input",
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
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
