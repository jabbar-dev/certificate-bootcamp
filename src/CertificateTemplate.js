import React from 'react';
import './Certificate.css'; // Import your CSS file for styling

const CertificateTemplate = (props) => {
    let name = props.name;
    let course = props.course;
    let center = props.center;
    return (
        <center>
      <div className="certificate">
        <div className='logos'>
        </div>
        <div className='text'>
         THIS CERTIFICATE IS PROUDLY PRESENTED TO
        </div>
        <div className='StudentName'>
            {name}<br/>
        </div>
        <div className='line'>
            ___________________
        </div>
        <div className='belowText'>
        FOR SUCCESSFULLY COMPLETING HANDS-ON TRAINING IN 
        <b>  {course} </b><br/>
UNDER THE PROJECT OF  <br/>
<b>IT INDUSTRY READINESS BOOTCAMP PROGRAM </b>
<br/>
AT {center}


        </div>
        <div className='signs'>

        </div>
      </div>
      </center>
    );
  }

  export default CertificateTemplate;