import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Listing.css";

const Listing = () => {
  const [listings, setListings] = useState([]);
  const [page, setPage] = useState(1);
  const limitPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (searchTerm.trim() === "") {
          response = await axios.get(
            `https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings?page=${page}&limit=${limitPerPage}`
          );
        } else {
          const allDataResponse = await axios.get(
            `https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings`
          );
          const filteredData = allDataResponse.data.filter((listing) =>
            listing.name.toLowerCase().includes(searchTerm.toLowerCase())
          );

          const startIndex = (page - 1) * limitPerPage;
          const endIndex = startIndex + limitPerPage;
          response = { data: filteredData.slice(startIndex, endIndex) };
        }
        setListings(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [page, searchTerm, limitPerPage]);

  const getRandomImageUrl = (url) => {
    const randomParam = Math.random().toString(36).substring(7);
    const separator = url.includes("?") ? "&" : "?";

    return `${url}${separator}cache=${randomParam}`;
  };

  return (
    <div className="listing-container">
      <h1>Accommodation Listings</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul>
        {listings.map((listing) => (
          <li className="listing-item" key={listing.id}>
            <Link to={`/accommodation/${listing.id}`}>
              <img src={getRandomImageUrl(listing.imageURL)} alt="" />
              {listing.status ? (
                <button>Book Now</button>
              ) : (
                <button>Inactive Listing</button>
              )}
            </Link>
            <h2>{listing.name}</h2>
            <p>{listing.description}</p>
            <p>Price: ${listing.price}</p>
            <p>Listed By: {listing.listedBy}</p>
            <p>Zipcode: {listing.zipcode}</p>
            <p>Listed On: {new Date(listing.listedOn).toLocaleDateString()}</p>
            <p>Status: {listing.status ? "Active" : "Inactive"}</p>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((prevPage) => prevPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Listing;
