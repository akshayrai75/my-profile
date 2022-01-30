import React from "react";
import CoverImg from "../assets/CoverImg.jpg";
import ProfilePic from "../assets/ProfilePic.jpg";
import "./home.css";

// const homeDiv = {
//   minHeight: "400px",
//   height: "auto",
//   width: "100%",
//   display: "flex",
//   padding: "10px",
//   backgroundImage: `url(${CoverImg})`,
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   profilePicDiv: {
//     width: "auto",
//     align: "center",
// padding: "15px",
// border: "3px solid white",
//     maxWidth: "200px",
//     maxHeight: "200px",
//     profilePicImg: {
//       maxWidth: "100%",
//       height: "auto",
//       borderRadius: 200 / 2,
//     border: "3px solid white",

//     },
//   },
// };

const Home = () => {
  return (
    <div className="homeDiv">
      {/* <div className="profilePicDiv">
        <img
          src={ProfilePic}
          className="profilePicImg"
          style={{ borderRadius: 200 / 2 }}
        />
      </div> */}
      <h1 className="myName">Akshay Rai Priyadarshi</h1>
    </div>
  );
};

export default Home;
