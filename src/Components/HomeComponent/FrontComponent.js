import React from 'react';

import imgHome from '../../Assets/Images/woman.png';
import imgHomeFlip from "../../Assets/Images/image.png";
import LogoComponent from "../Shared/LogoComponent";
import logoGreen from "../../Assets/Images/yourcase-logo-green.png";

const  FrontComponent = () => {
  return (
    <div className="content-front">

      <LogoComponent className="your-case-logo d-none d-sm-none d-md-block" styles={{width: "190px"}}/>

      {/*When the logo color update in the next desktop version, delete this element*/}
      <img className="your-case-logo d-sm-block d-md-none" style={{width: "190px"}} src={logoGreen} alt=""/>

      <div className="row m-0">
        <div className="col-lg-7 col-md-6 col-12 p-2">
          <div className="ptp-20 text-left p-responsive">
            <h1 className="title color-primary">What happened to you <br/> matters to us.</h1>
            <p className="pb-4 color-primary-light">Find the attorney you need in minutes. Free.</p>
            <button className="btn btn-front mb-5 mb-md-0">Get started now</button>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-12 content-img-home p-0">
          <img className="img-home" src={imgHome} alt=""/>
          <div className="content-img-home-flip">
            <span className="bg-primary position-absolute vh-23 w-100" style={{bottom: "-1px"}}>{""}</span>
            <div className="content-img-home-flip-green">
              <img className="img-home-flip" src={imgHomeFlip} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default FrontComponent;