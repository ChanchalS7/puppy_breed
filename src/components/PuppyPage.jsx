import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
export const PuppyPage = () => {
  const [showData, setShowData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://dog.ceo/api/breed/${id}/images`).then(({ data }) => {
      setShowData(data.message);
    });
  }, [id]);

  return (
    <div style={{ backgroundColor: "rgb(152, 163, 181)", marginTop: "-21px" }}>
      <h1 style={{ marginTop: "7%", paddingTop: "10px" }}>Puppy Images</h1>
      <div className="imgDiv">
        {showData.map((e, i) => (
          <img key={i} src={e} alt="N/A" />
        ))}
      </div>
    </div>
  );
};
