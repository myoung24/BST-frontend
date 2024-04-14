import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EnterNumbers = () => {
  const navigate = useNavigate();

  const [numbers, setNumbers] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Process Numbers");
    const nums = numbers
      .split(",")
      .map(Number)
      .filter((num) => !isNaN(num));

    console.log(nums);

    if (nums != "") {
      try {
        const response = await axios.post(
          "http://localhost:8080/binary-tree",
          nums
        );
        if (response.status !== 200)
          throw new Error("Failed to add binary tree");
        console.log("Binary tree added successfully");
      } catch (error) {
        console.error("Error adding binary tree: ", error.message);
        
      }
      navigate("/process-numbers");
    }
  };

  const handleChange = (event) => {
    setNumbers(event.target.value);
  };
  const previousTrees = (e) => {
    e.preventDefault();
    console.log("Previous Trees");
    navigate("/previous-trees");
  };
  return (
    <div>
      <h1>Enter Numbers</h1>
      <form action="enter-numbers" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <input type="submit" value="Submit" />
        <button onClick={previousTrees}>Show Previous</button>
      </form>
    </div>
  );
};

export default EnterNumbers;
