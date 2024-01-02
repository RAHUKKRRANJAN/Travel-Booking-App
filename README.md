# Travel Booking Web App

This project is a travel booking web application built with React that allows users to search for accommodations and make reservations.

## Features

- **Accommodation Listings:** View a list of accommodations with details.
- **Search Functionality:** Search accommodations by name.
- **Pagination:** Navigate through multiple pages of accommodation listings.
- **Detailed View:** Click on a listing to view more details.
- **Responsive Design:** The app is responsive and works on various devices.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`

## Usage

1. Run the app: `npm start`
2. Access the app in your web browser at `http://localhost:3000`

## Technologies Used

- React
- React Router for routing
- Axios for API requests
- HTML5 and CSS3

## API Used

The application fetches accommodation data from the mock API:
- Base URL: `https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings`

## Folder Structure

- `src/`
  - `components/`: Contains React components
  - `App.js`: Main component handling routes and layout
  - `index.js`: Entry point for the React application

## Assumptions:

Added search by accommodation name:- Added a search bar so you can easily find a place by typing its name. This helps you quickly locate the exact accommodation you're looking for among many options. It makes finding specific places much easier and more convenient for you.

Dynamic Status-based 'Book button’:- Made a button that says 'Book Now' for available places, and 'Inactive Listing' for ones that are not available. This helps users know if a place can be booked or not, avoiding confusion and making it easier to use the website.

Improved 'Listed On' date format:- Changed the 'Listed On' date to a nicer format for users to read easily. Now it looks more familiar and clear, making it simpler for people to understand when the accommodation was listed.

App works on all devices:- Made the app work well on all devices. It adjusts its look and how it works to fit on big screens like computers, smaller screens like phones, and everything in between. This helps everyone have a good experience, no matter what device they're using.

Basic CSS styling used:- Used simple CSS for making things look good in the project. It might not be fancy, but it works well for what we needed without making things too complicated.

