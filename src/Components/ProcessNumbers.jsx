import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const ProcessNumbers = () => {
  const [trees, setTrees] = useState([]);
  useEffect(() => {
    fetchTrees();
  }, []);

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
      <h1>Process Numbers</h1>
      <div>
        {trees.map((item) => (
          <div key={item.id}>
            <p>Root: {item.root}</p>
            <p>Left: {item.left ? item.left.id : "null"}</p>
            <p>Right: {item.right ? item.right.id : "null"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessNumbers;
