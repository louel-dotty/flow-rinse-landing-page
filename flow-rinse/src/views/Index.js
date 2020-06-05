import React from "react";
import featureImg from "assets/img/featured.png";
import logoOrange from "assets/img/logo-orange.svg";
import android from "assets/img/android.png";
import apple from "assets/img/apple.png";
import facebook from "assets/img/facebook.png";
import twitter from "assets/img/twitter.png";
import instagram from "assets/img/instagram.png";
import {Button} from 'reactstrap';

function Index() {
  return (
    <div id="content">
      <div className="section-container section-header">
        <div className="feature-header">
          <div className="container">
            <img data-aos="fade-down" className="feature-img" src={featureImg} alt="Featured App"/>
            <div>
              <img data-aos="fade-down" className="logo-orange" src={logoOrange} alt="Orange Logo"/>
              <p>Booking in a new way</p>
              <div className="container-btn">
                <Button className="btn-round" color="primary">
                  Download for Apple
                  <img src={apple} alt="Apple Logo"></img>
                </Button>
                <Button className="btn-round" color="primary">
                  Download for Android
                  <img src={android} alt="Android Logo"></img>
                </Button>
              </div>
              <div className="social-container">
                <a href="#"><img src={facebook} alt="Facebook Logo"></img></a>
                <a href="#"><img src={twitter} alt="Facebook Logo"></img></a>
                <a href="#"><img src={instagram} alt="Facebook Logo"></img></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container section-footer">
        <div className="footer-container">
          <div className="container">
            <img data-aos="fade-down" className="logo-orange" src={logoOrange} alt="Orange Logo"/>
            <p>Booking in a new way</p>
            <div className="container-btn">
              <Button className="btn-round" color="primary">
                Download for Apple
                <img src={apple} alt="Apple Logo"></img>
              </Button>
              <Button className="btn-round" color="primary">
                Download for Android
                <img src={android} alt="Android Logo"></img>
              </Button>
            </div>
            <div className="social-container">
              <a href="#"><img src={facebook} alt="Facebook Logo"></img></a>
              <a href="#"><img src={twitter} alt="Facebook Logo"></img></a>
              <a href="#"><img src={instagram} alt="Facebook Logo"></img></a>
              <section>&copy; Ka-book.com, 2020</section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
