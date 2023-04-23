import React, { useState } from "react";
import "./App.css";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export default function GoogleAutoComplete() {
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
            
 
  );
  
}
