import React from "react";
import { useState } from "react";

import DetailsMenu from "./DeatilsMenu.js";
import PythonLogo from "./img/PythonLogo.png";
import JavaLogo from "./img/JavaLogo.png";

import CertificateCard from "./CertificateCard";
import EnglishCertif from "./img/EnglishCertif.jpg";
import MachineLearningCertif from "./img/MachineLearningCertif.jpg";

const CertificatesList = [
    {
        id: 0,
        name: "Fullstack Python",
        imgUrl: PythonLogo,
        description: "Curso de Desarrollo Web con Python y Django dictado por la Agencia Codo a Codo 4.0",
        stack: "Python, Django, MySQL, Metodología Scrum"
    },
    {
        id: 1,
        name: "Fullstack Java",
        imgUrl: JavaLogo,
        description: "Curso de Desarrollo Web con Python y Django",
        stack: "Java, Vue.js, Git, MySQL, Metodología Scrum"
    },
    {
        id: 2,
        name: "Machine Learning con Python",
        imgUrl: PythonLogo,
        description: "Dictado por Argentina Programa 4.0",
        stack: "Python, Jupyter, Pandas, Numpy",
        certifUrl: MachineLearningCertif
    },
    {
        id: 3,
        name: "Inglés para Desarrolladores de Software",
        imgUrl: JavaLogo,
        description: "Curso de Inglés técnico para Desarrolladores de Software dictado por el CUI (Centro Universitario de Idiomas)",
        certifUrl: EnglishCertif
    }
]

const Certificates = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
  
    const handleCardClick = (certificate) => {
      setSelectedCertificate(certificate);
    };
  
    const handleCloseDetails = () => {
      setSelectedCertificate(null);
    };
  
    return (
      <section className="w-full p-4 mt-4 mb-10 shadow-md rounded-2xl bg-mycolors-bg ring-mycolors-ring ring-1">
        <h1 className="mb-6 text-xl font-semibold text-mycolors-2">Certificados</h1>
  
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {CertificatesList.map((certificate) => (
            <CertificateCard 
              key={certificate.id} 
              imgUrl={certificate.imgUrl} 
              name={certificate.name} 
              stack={certificate.stack}
              onClick={() => handleCardClick(certificate)}
            />
          ))}
        </div>
  
        {selectedCertificate && (
          <DetailsMenu 
            imgUrl={selectedCertificate.imgUrl} 
            name={selectedCertificate.name} 
            description={selectedCertificate.description} 
            stack={selectedCertificate.stack}
            onClose={handleCloseDetails} 
            certifUrl={selectedCertificate.certifUrl}
          />
        )}
      </section>
    );
  };
  
  export default Certificates;