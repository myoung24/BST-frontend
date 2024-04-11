import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the Home Page</p>
      <Link to="/enter-numbers">
        <button>Enter Numbers</button>
      </Link>
    </div>
  );
};

export default Home;
