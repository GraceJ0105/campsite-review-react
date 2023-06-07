import "./App.css";
import React, { useState } from "react";
import data from "./mock-data.json";
import { nanoid } from "nanoid";

export default function UserSubmission(props) {
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
      campsiteName: props.name,
      address: props.address,
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
      <form onSubmit={handleAddFormSubmit}>
        <div className="row mt-2">
          <div className="col-5">
            <input
              type="text"
              name="campsiteName"
              value={props.name}
              required="required"
              placeholder="Campsite name"
              onChange={handleAddFormChange}
            />
          </div>
          <div className="col-7">
            <input
              type="text"
              name="address"
              value={props.address}
              required="required"
              placeholder="Address"
              onChange={handleAddFormChange}
            />
          </div>
        </div>
        <label className="mt-2"> Vibe:</label>
        <input
          type="number"
          name="vibe"
          min={1}
          max={5}
          required="required"
          onChange={handleAddFormChange}
          className="mt-2"
        />
        <label className="mx-1"> Amenities:</label>
        <input
          type="number"
          name="amenities"
          min={1}
          max={5}
          required="required"
          onChange={handleAddFormChange}
        />
        <label className="mx-1"> Location:</label>
        <input
          type="number"
          name="location"
          min={1}
          max={5}
          onChange={handleAddFormChange}
        />
        <label className="mx-1"> Comfort:</label>
        <input
          type="number"
          name="comfort"
          min={1}
          max={5}
          required="required"
          onChange={handleAddFormChange}
        />
        <label className="mx-1"> Views:</label>
        <input
          type="number"
          name="views"
          min={1}
          max={5}
          required="required"
          onChange={handleAddFormChange}
        />
        <br />
        <button type="submit" className="mt-2">
          Add
        </button>
      </form>
      <div className="row m-3">
        <table>
          <thead>
            <tr>
              <th>Campsite Name</th>
              <th>Address</th>
              <th className="text-center">Vibe</th>
              <th className="text-center">Amenities</th>
              <th className="text-center">Location</th>
              <th className="text-center">Comfort</th>
              <th className="text-center">Views</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr>
                <td>{review.campsiteName}</td>
                <td>{review.address}</td>
                <td className="text-center">{review.vibe}</td>
                <td className="text-center">{review.amenities}</td>
                <td className="text-center">{review.location}</td>
                <td className="text-center">{review.comfort}</td>
                <td className="text-center">{review.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
