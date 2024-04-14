import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const PreviousTrees = () => {
  const [trees, setTrees] = useState([]);
  useEffect(() => {
    fetchTrees();
  }, []);

  const fetchTrees = async () => {
    try {
      const response = await axios.get("http://localhost:8080/binary-tree");
      console.log(response.data);
      setTrees(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <div>
      <h1>Previous Trees</h1>
      <table>
        <thead>
          <tr>
            <th>Root</th>
            <th>Left</th>
            <th>Right</th>
          </tr>
        </thead>
        <tbody>
          {trees.map((item) => (
            <tr key={item.id}>
              <td>{item.root}</td>
              <td>{item.left ? item.left.root : "null"}</td>
              <td>{item.right ? item.right.root : "null"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PreviousTrees;
