import React from 'react';
import "./ComingSoonComponent.scss";

import LogoComponent from "../Shared/LogoComponent";

const ComingSoonComponent = () => {

  const year = new Date().getFullYear();
  return (
    <div className="bkg-coming-soon vh-100 bkg-p-auto d-flex align-items-center">

      <LogoComponent light className="your-case-logo pl-3" styles={{width: "204px"}}/>

      <p className="bkg-coming-soon p-0 m-0">Coming soon.</p>

      <p className="bkg-inc pl-2">
        <small className="white-opacity">
          <i className="fa fa-copyright">&nbsp;</i>{year} YourCase.com, LLC.
        </small>
      </p>

    </div>
  )
};


export default ComingSoonComponent;