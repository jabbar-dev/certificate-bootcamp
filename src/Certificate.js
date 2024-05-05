import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { CertificateData } from "./CertificateData";
import CertificateTemplate from "./CertificateTemplate";

export default function Certificate() {

  const [certificate, setCertificate] = useState(null);
  const params = useParams();
  const { hi } = params

  useEffect(() => {
    console.log(CertificateData);
    
    const selectedCertificate = CertificateData.find(
      (cert) => cert.certificate_id === parseInt(hi)
    );
    setCertificate(selectedCertificate);
  }, [hi]);

  if (!certificate) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     <center><h1>Congratulations On Completing IT BOOTCAMP PROGRAM</h1></center>
      <CertificateTemplate name={certificate.name} course={certificate.cousrse} center={certificate.center} id={parseInt(hi)}/>
    </div>
  );
}
