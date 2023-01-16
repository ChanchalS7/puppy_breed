import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const PuppyCard = ({ card }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    var keys = Object.keys(card);
    setData(keys);
  }, [card]);
  
  return (
    <div>
      <div className="homeDiv">
        {data.map((e, i) => (
          <Link style={{ textDecoration: "none" }} key={i} to={`/puppy/${e}`}>
            {" "}
            <h1 className="card">{e}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};
