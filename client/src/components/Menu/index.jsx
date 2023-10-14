import React, { useEffect, useState } from "react";
import Cards from "../Card";
import axios from "axios";
import "./style.css";

const MenuComponent = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/menu")
      .then((res) => setMenu(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="menu-component">
      <div className="row">
        {menu.map(
          ({
            id,
            name,
            image,
            rating,
            match,
            preparation,
            ingredients,
            time,
          }) => {
            return (
              <Cards
                key={id}
                name={name}
                image={image}
                rating={rating}
                match={match}
                ingredients={ingredients}
                preparation={preparation}
                time={time}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default MenuComponent;
