import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Certificate.css';
import ribbon from './image/RIBBON.png';
import signs from './image/signs.png';
import backImg from './image/back.jpg';
import { Helmet } from 'react-helmet';
import copy from 'copy-to-clipboard'; // Import the copy-to-clipboard library

const CertificateTemplate = (props) => {
  let name = props.name;
  let course = props.course;
  let center = props.center;
  let id = props.id;

  const url = `https://verifybootcamp.netlify.app/certificate/${id}`;

  const [copyButtonText, setCopyButtonText] = useState('Copy Sharable URL'); // Button text state

  const downloadCertificate = () => {
    const certificateDiv = document.getElementById('certificate');

    html2canvas(certificateDiv, {
      scale: 3, // Increase scale for better quality
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
      pdf.save(`${name}_certificate_itbootcamp.pdf`);
    });
  };

  const handleCopyButtonClick = () => {
    copy(url); // Copy URL to clipboard
    setCopyButtonText('Copied'); // Update button text
  };

  useEffect(() => {
    // Reset button text after a short delay
    const timer = setTimeout(() => {
      setCopyButtonText('Copy Sharable URL');
    }, 2000); // Reset button text after 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [copyButtonText]); // Run effect when copyButtonText changes

  return (
    <center>
      <div className="certificate" id="certificate">
        <img src={backImg} alt="Background" className="background-image" />
        <div className='logos'>
          <img src={ribbon} alt="Ribbon" style={{ width: '420px' }} />
        </div>
        <div className='text'>
          THIS CERTIFICATE IS PROUDLY PRESENTED TO
        </div>
        <div className='StudentName'>
          {name}<br />
        </div>
        <div className='line'>
          ___________________
        </div>
        <div className='belowText'>
          FOR SUCCESSFULLY COMPLETING HANDS-ON TRAINING IN
          <b> {course}</b><br />
          UNDER THE PROJECT OF  <br />
          <b>IT INDUSTRY READINESS BOOTCAMP PROGRAM</b><br />
          AT {center}
        </div>
        <div className='signs'>
          <img src={signs} alt="Signs" style={{ width: '420px' }} />
        </div>
        <div className='verifyNote'>
          <span className="badge text-bg-warning">Verify at</span>
          <b> {url} </b>
        </div>
        <br />
        <div className='btn-group'>
          <button type="button" className="btn btn-success" onClick={downloadCertificate}>Download Certificate</button>
          <button type="button" className="btn btn-info" onClick={handleCopyButtonClick}>{copyButtonText}</button>
        </div>
        <br /> <br />
      </div>
      <Helmet>
        <title>CONGRATULATIONS {name} FOR COMPLETING IT BOOTCAMP PROGRAM</title>
        <meta property="og:title" content="Certificate Title" />
        <meta property="og:description" content="Congratulations For Completing IT BOOTCAMP PROGRAM BY SUKKUR IBA UNIVERSITY & IS&TD GOVERNMENT OF SINDH" />
        <meta property="og:image" content="URL_of_the_image" />
        <meta property="og:url" content={url} />
      </Helmet>
    </center>
  );
}

export default CertificateTemplate;
