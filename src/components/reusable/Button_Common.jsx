import React from 'react';

const Button_Common = ({cname,link}) => {
    return(
      <div className="col-lg-12 col-md-12 col-xs-12  text-center"><a className={cname} href={link}>View More</a></div>
    );
}

export default Button_Common;