import { useState } from "react";
// import { axios } from "axios";
export const SearchPage = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const callPuppy = () => {
    let url = `https://dog.ceo/api/breed/${text}/images`;
    let res = fetch(url);
    res
      .then((data) => data.json().then((data) => setData(data.message)))
      .catch((er) => alert(er));
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(152, 163, 181)",
        marginTop: "5%",
        paddingTop: "20px",
        minHeight: "700px",
      }}
    >
      <div style={{ marginBottom: "7%" }}>
        <input
          style={{
            width: "50%",
            height: "50px",
            borderRadius: "10px",
            border: "none",
            fontSize: "20px",
            textAlign: "center",
          }}
          type="text"
          placeholder="Enter Breed Name"
          onChange={(e) => setText(e.target.value)}
        />{" "}
        <button
          style={{
            width: "10%",
            height: "53px",
            borderRadius: "10px",
            border: "none",
            paddingTop: "3px",
            fontSize: "17px",
          }}
          onClick={() => callPuppy()}
        >
          Search Breed
        </button>
      </div>
      <div className="imgDiv">
        {data.map((e, i) => (
          <img src={e} alt="N/A" key={i} />
        ))}
      </div>
    </div>
  );
};
