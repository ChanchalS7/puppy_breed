import { Link } from "react-router-dom";

export const Navbar = () => {
  const arr = [
    { title: "Home", path: "/" },
    { title: "Search", path: "/search" },
  ];
  return (
    <div
      style={{
        fontSize: "30px",
        backgroundColor: "teal",
        height: "60px",
        paddingTop: "13px",
        fontFamily: "sans-serif",
        position: "fixed",
        top: 0,
        right: 0,
        width: "100%",
      }}
    >
      {arr.map((e, i) => (
        <Link
          key={i}
          to={e.path}
          style={{
            margin: "40px",
            color: "yellow",
            fontSize: "40px",
            textDecoration: "none",
          }}
        >
          {e.title}
        </Link>
      ))}
    </div>
  );
};
