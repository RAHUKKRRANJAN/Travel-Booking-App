import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Listing from "./components/Listing";
import DetailedView from "./components/DetailedView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Listing />} />
        <Route path="/accommodation/:id" element={<DetailedView />} />
      </Routes>
    </Router>
  );
}

export default App;
