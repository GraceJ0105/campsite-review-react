import "./App.css";
import React, { useState } from "react";
import data from "./mock-data.json";
import { nanoid } from "nanoid";

export default function UserSubmission() {
  const [reviews, setReviews] = useState(data);
  const [addFormData, setAddFormData] = useState({
    campsiteName: " ",
    address: " ",
    vibe: " ",
    amenities: " ",
    location: " ",
    comfort: " ",
    views: " ",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      id: nanoid(),
      campsiteName: addFormData.campsiteName,
      address: addFormData.address,
      vibe: addFormData.vibe,
      amenities: addFormData.amenities,
      location: addFormData.location,
      comfort: addFormData.comfort,
      views: addFormData.views,
    };
    const newReviews = [...reviews, newReview];
    setReviews(newReviews);
  };

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Campsite Name</th>
            <th>Address</th>
            <th>Vibe</th>
            <th>Amenities</th>
            <th>Location</th>
            <th>Comfort</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr>
              <td>{review.campsiteName}</td>
              <td>{review.address}</td>
              <td>{review.vibe}</td>
              <td>{review.amenities}</td>
              <td>{review.location}</td>
              <td>{review.comfort}</td>
              <td>{review.views}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add a Review</h2>

      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="campsiteName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address..."
          onChange={handleAddFormChange}
        />

        <input
          type="number"
          name="vibe"
          min={1}
          max={5}
          required="required"
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="amenities"
          min={1}
          max={5}
          required="required"
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="location"
          min={1}
          max={5}
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="comfort"
          min={1}
          max={5}
          required="required"
          onChange={handleAddFormChange}
        />

        <input
          type="number"
          name="views"
          min={1}
          max={5}
          required="required"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
