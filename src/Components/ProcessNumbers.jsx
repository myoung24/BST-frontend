import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const ProcessNumbers = () => {
  const [trees, setTrees] = useState([]);

  const fetchTrees = async () => {
    try {
      const response = await axios.get("http://localhost:8080/binary-tree");
      setTrees(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchTrees();
  }, []);

  return (
    <div>
      <h1>Process Numbers</h1>
      <table>
        <tbody>
          {trees.map((data, index) => (
            <tr key={index}>
              <td>{data.inputNumbers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProcessNumbers;
