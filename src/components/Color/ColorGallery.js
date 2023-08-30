import React, { useState, useEffect } from "react";
import axios from "axios";
import Color from "./Color";
import Footer from "../Footer";

const ColorGallery = () => {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const _fetchColors = async () => {
      const response = await axios.get(
        `http://localhost:8080/public/api/color`,
        {}
      );
      console.log(response.data);
      setColors(response.data);
      setLoading(false);
    };
    setLoading(true);

    _fetchColors();
  }, []);

  const sortedColors = [...colors].sort((a, b) =>
    a.ralNum.localeCompare(b.ralNum)
  );

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    width: "100%",
    marginBottom: "30px",
  };

  return (
    <div>
      <h2 className="header2">Available Colors</h2>
      <div style={gridContainerStyle}>
        {sortedColors.map((color) => (
          <div key={color.name}>
            <Color color={color} />
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default ColorGallery;
