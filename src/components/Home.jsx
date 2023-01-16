import axios from "axios";
import { useEffect, useState } from "react";
import { PuppyCard } from "./PuppyCard";

export const Home = () => {
  const [puppyData, setPuppyData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((res) => setPuppyData([res.data]));
  };
  //   console.log(puppyData);
  return (
    <div style={{ backgroundColor: "rgb(152, 163, 181)", marginTop: "-21px" }}>
      <h1 style={{ marginTop: "7%", paddingTop: "10px" }}>Puppy Breeds</h1>
      {puppyData.map((e, i) => (
        <PuppyCard key={i} card={e.message} />
      ))}
    </div>
  );
};
