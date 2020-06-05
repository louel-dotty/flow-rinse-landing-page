import React from "react";
import featureImg from "assets/img/featured.png";
import HeaderBG from "assets/img/Photo_Chevron.png";
import OrangeBG from "assets/img/Orange_Chevron.png";
import logoOrange from "assets/img/logo-orange.svg";
import android from "assets/img/android.png";
import apple from "assets/img/apple.png";
import img01 from "assets/img/img01.png";
import img02 from "assets/img/img02.png";
import beauty from "assets/img/beauty.svg";
import cleaning from "assets/img/cleaning.svg";
import dentist from "assets/img/dentist.svg";
import dining from "assets/img/dining.svg";
import generalHealth from "assets/img/general-health.svg";
import petGrooming from "assets/img/pet-grooming.svg";
import facebook from "assets/img/facebook.png";
import twitter from "assets/img/twitter.png";
import instagram from "assets/img/instagram.png";
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
            <img data-aos="fade-down" data-aos-duration="800" data-aos-delay="300" className="feature-img" src={featureImg} alt="Featured App"/>
            <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="500">
              <img data-aos="fade-down" data-aos-duration="800" data-aos-delay="600" className="logo-orange" src={logoOrange} alt="Orange Logo"/>
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

      <div className="section-container section-info section-one">
        <div className="section-info-layer section-info-layer-1">
          <img src={HeaderBG}/>
        </div>
        <div className="section-info-layer section-info-layer-2" data-aos="fade-left" data-aos-duration="800" data-aos-delay="300">
          <div className="column-info"></div>
          <div className="column-info">
            <div className="content">
              <h1>Who We Are</h1>
              <p>KaBook is a mobile application that addresses the challenges posed by the pandemic and resulting community quarantine - within the context of social distancing. This app reopens consumer access to basic services while minimizing possible contact with others, therefore also minimizing possible exposure to the virus. 
</p>
              <p>KaBook bridges the distance between merchants and consumers without increasing probabilities of exposure to the virus.
</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container section-info section-two">
        <div className="section-info-layer section-info-layer-1">
        </div>
        <div className="section-info-layer section-info-layer-2" data-aos="fade-left" data-aos-duration="800" data-aos-delay="300">
          <div className="column-info">
            <div className="content">
              <h1>What We Do</h1>
              <h3>For customers</h3>
              <ul>
                <li>
                  Search open businesses nearby or based on your location
                </li>
                <li>
                  Search for businesses based on categories
                </li>
                <li>
                  Book services based on availability
                </li>
              </ul>
              <h3>For businesses</h3>
              <ul>
                <li>
                  Control on number of customers to service on-site based on law-mandated rule
                </li>
                <li>
                  Avoid crowd within store area to reduce health risk
                </li>
              </ul>
            </div>
          </div>
          <div className="column-info images">
            <img src={img01} data-aos="fade-left" data-aos-duration="800" data-aos-delay="400"/>
            <img src={img02} className="two" data-aos="fade-left" data-aos-duration="800" data-aos-delay="700"/>
          </div>
        </div>
      </div>

      
      <div className="section-container section-info section-three">
        <div className="section-info-layer section-info-layer-1">
          <img src={OrangeBG}/>
        </div>
        <div className="section-info-layer section-info-layer-2" data-aos="fade-in" data-aos-duration="800" data-aos-delay="300">
          <div className="column-info">
            <div className="content">
              <h1>Services Covered</h1>
            </div>
          </div>
          <div className="column-info">
            <img src={dentist} alt="Apple Logo" data-aos="fade-down" data-aos-duration="800" data-aos-delay="600"></img>
            <img src={generalHealth} alt="Apple Logo" data-aos="fade-down" data-aos-duration="800" data-aos-delay="800"></img>
            <img src={petGrooming} alt="Apple Logo" data-aos="fade-down" data-aos-duration="800" data-aos-delay="1000"></img>
            <img src={beauty} alt="Apple Logo" data-aos="fade-down" data-aos-duration="800" data-aos-delay="1200"></img>
            <img src={cleaning} alt="Apple Logo" data-aos="fade-down" data-aos-duration="800" data-aos-delay="1400"></img>
            <img src={dining} alt="Apple Logo" data-aos="fade-down" data-aos-duration="800" data-aos-delay="1600"></img>
          </div>
        </div>
      </div>

      <div className="section-container section-footer">
        <div className="footer-container">
          <div className="container">
            <img data-aos="fade-down" className="logo-orange" src={logoOrange} alt="Orange Logo"/>
            <p data-aos="fade-down" data-aos-duration="800">Booking in a new way</p>
            <div className="container-btn" data-aos="fade-down" data-aos-duration="800" data-aos-delay="600">
              <Button className="btn-round" color="primary">
                Download for Apple
                <img src={apple} alt="Apple Logo"></img>
              </Button>
              <Button className="btn-round" color="primary">
                Download for Android
                <img src={android} alt="Android Logo"></img>
              </Button>
            </div>
            <div className="social-container" data-aos="fade-down" data-aos-duration="800" data-aos-delay="700">
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
