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
      <h1>
        Certificate of {certificate.name}
      </h1>
      <p>Course: {certificate.cousrse}</p>
      <p>Center: {certificate.center}</p>
      <CertificateTemplate name={certificate.name} course={certificate.cousrse} center={certificate.center}/>
    </div>
  );
}
