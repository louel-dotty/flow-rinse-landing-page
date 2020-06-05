import React from "react";
import featureImg from "assets/img/featured.png";
import HeaderBG from "assets/img/Photo_Chevron.png";
import logoOrange from "assets/img/logo-orange.svg";
import android from "assets/img/android.png";
import apple from "assets/img/apple.png";
import {Button} from 'reactstrap';

var headerStyle = {
  backgroundImage: `url(${HeaderBG})`
}

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
            </div>
          </div>
        </div>
      </div>

      <div className="section-container section-info">
        <div className="section-info-layer section-info-layer-1">
          <img src={HeaderBG}/>
        </div>
        <div className="section-info-layer section-info-layer-2">
          <div className="column-info"></div>
          <div className="column-info">
            <h1>TEST</h1>
            <p>lorem</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Index;
