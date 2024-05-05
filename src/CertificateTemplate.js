import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Certificate.css';
import ribbon from './image/RIBBON.png'
import signs from './image/signs.png' 
import backImg from './image/back.jpg'

const CertificateTemplate = (props) => {
  let name = props.name;
  let course = props.course;
  let center = props.center;
  let id = props.id;


  const downloadCertificate = () => {
    const certificateDiv = document.getElementById('certificate');

    html2canvas(certificateDiv, {
      scale: 2, // Increase scale for better quality
      scrollX: 0,
      scrollY: 0,
      width: certificateDiv.offsetWidth,
      height: certificateDiv.offsetHeight,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight,
      useCORS: true
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [3375, 2625],
      }); // Set page size to landscape A4
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = canvas.height * imgWidth / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('certificate.pdf');
    });
  };

  return (
    <center>
      <div className="certificate" id="certificate">
      <img src={backImg} alt="Background" className="background-image" />
        <div className='logos'>
        <img src={ribbon} alt="Ribbon" style={{ width: '420px' }}/>
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
          <b> {course}</b><br/>
          UNDER THE PROJECT OF  <br/>
          <b>IT INDUSTRY READINESS BOOTCAMP PROGRAM</b><br/>
          AT {center}
        </div>
        <div className='signs'>
        <img src={signs} alt="Signs" style={{ width: '420px' }}/>
        </div>
        <div className='verifyNote'>
          verify at <b> verify.sibau-itbootcamp.com/certificiate/{id} </b>
        </div>
      </div>
      <button onClick={downloadCertificate}>Download Certificate</button>
    </center>
  );
}

export default CertificateTemplate;
