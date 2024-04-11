import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const PreviousTrees = () => {
  const [trees, setTrees] = useState([]);
  useEffect(() => {
    fetchTrees();
  }, []);

  const deleteTrees = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:8080/binary-tree/16"
      );
      console.log("Data deleted successfully");
      setTrees(response.data);
      console.log(trees);
    } catch (error) {
      console.error("Error deleting data:", error.message);
    }
  };
  const fetchTrees = async () => {
    try {
      const response = await axios.get("http://localhost:8080/binary-tree");
      setTrees(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <div>
      <h1>Previous Trees</h1>
      <table>
        <tbody>
          {trees.map((data, index) => (
            <tr key={index}>
              <td>{data.inputNumbers}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={deleteTrees}>Delete Trees</button>
    </div>
  );
};

export default PreviousTrees;
