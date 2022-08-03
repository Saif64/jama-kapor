import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Jama Kapor.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; Saif</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Me</h4>
        <a href="http://google.com">Instagram</a>
        <a href="http://google.com">Youtube</a>
        <a href="https://google.com">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
