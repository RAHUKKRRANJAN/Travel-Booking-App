import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./DetailedView.css";

const DetailedView = () => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    const fetchAccommodation = async () => {
      try {
        const response = await axios.get(
          `https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings/${id}`
        );
        setAccommodation(response.data);
      } catch (error) {
        console.error("Error fetching accommodation: ", error);
      }
    };

    fetchAccommodation();
  }, [id]);

  return (
    <div className="detailed-view-container">
      <h1>Accommodation Details</h1>
      {accommodation ? (
        <div className="accommodation-details">
          <img
            src={accommodation.imageURL}
            alt={accommodation.name}
            className="accommodation-image"
          />
          <div className="details">
            <h2>{accommodation.name}</h2>
            <p>Description: {accommodation.description}</p>
            <p>Price: ${accommodation.price}</p>
            <p>Listed By: {accommodation.listedBy}</p>
            <p>Zipcode: {accommodation.zipcode}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailedView;
