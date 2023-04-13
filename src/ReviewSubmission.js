import React, { useState } from "react";
import "./App.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export default function UserSubmission() {
  const [campsite, setCampsite] = useState("");
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);

    setAddress(results[0].formatted_address);
    setCampsite(results[0].address_components[0].long_name);
    setCoordinates(ll);
  };
  return (
    <form>
      <div className="row">
        <div className="col-9">
          {" "}
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
                    placeholder: "Search Campsite ...",
                    className: "location-search-input",
                  })}
                  style={{ width: "700px" }}
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
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <label>
            Campsite Name:{" "}
            <input
              type="text"
              name="campsite-name"
              value={campsite}
              style={{ width: "644px" }}
            />
          </label>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-12">
          <label>
            Address:{" "}
            <input
              type="text"
              name="address"
              value={address}
              style={{ width: "700px" }}
            />
          </label>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-2">
          <label>
            Vibe: <input type="number" name="vibe" min={1} max={5} />
          </label>
        </div>
        <div className="col-sm-2">
          <label>
            Amentities: <input type="number" name="amenities" min={1} max={5} />
          </label>
        </div>
        <div className="col-sm-2">
          <label>
            Location: <input type="number" name="location" min={1} max={5} />
          </label>
        </div>
        <div className="col-sm-2">
          <label>
            Comfort: <input type="number" name="comfort" min={1} max={5} />
          </label>
        </div>
        <div className="col-sm-2">
          <label>
            Views: <input type="number" name="views" min={1} max={5} />
          </label>
        </div>
        <div className="col-sm-2">
          <label>
            Value: <input type="number" name="views" min={1} max={5} />
          </label>
        </div>
      </div>
      <input type="submit" value="Submit" className="mt-3 px-5" />
    </form>
  );
}
