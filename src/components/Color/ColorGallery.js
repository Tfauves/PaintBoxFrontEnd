import React, { useState, useEffect } from "react";
import axios from "axios";
import Color from "./Color";

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

  return (
    <div>
      <h2>Available Colors</h2>

      {sortedColors.map((color) => (
        <div key={color.name}>
          <Color color={color} />
        </div>
      ))}
    </div>
  );
};
export default ColorGallery;
