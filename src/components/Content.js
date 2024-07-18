import {React,useContext} from "react";
import BCKVID from "../assets/backgroundVideo.mp4"
import { Link } from "react-router-dom";
 import { AuthContext } from "../AuthContext";

const Content = () => {
   const {loggedIn}=useContext(AuthContext);
  return (
    <>
    <div id="layer"></div>
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={BCKVID} type="video/mp4"/>
      </video>
    </div>
    <div className="content">
    <h1>
        <div className="main-heading">
          <div className = "head-sentence1">
          <span className="quote">" </span>
            <span className = "reduce">SAVE</span> <span className = "food-waste">EVERY</span>
          </div>
          <div className = "head-sentence2"> 
            BITE<span className="quote"> ! "</span>
          </div>
        </div>
      </h1>
      <p className = "paragraph">
        {/* <span className="highlight">
        Food Folio revolutionizes food donation, empowering communities and sustainability.{" "}
        
        </span> */}
      </p>
      {loggedIn ? (
          <div className="logged-in-text">
            <p>Welcome Back !</p>
          </div>
        ) : (
          <div className="signup-container">
            <Link className="signup-button" to="/signup">
              <span className="highlight2">GET STARTED</span>
            </Link>
          </div>)};
    </div>
    </>
  );
};

export default Content;
