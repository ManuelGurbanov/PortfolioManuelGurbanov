import React from "react";
import ContactCard from "./ContactCard";

const Contact = () => {
    return (
        <section className="w-full p-4 mt-4 mb-10 shadow-md rounded-2xl bg-mycolors-bg ring-mycolors-ring ring-1">
            <h1 className="mb-6 text-xl font-semibold text-mycolors-2">Contacto</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <ContactCard 
                    name="Dirección de Correo"
                    description="Personal"
                    gmail="mgurbanov@dc.uba.ar"
                    isGmail={true}
                />
                <ContactCard 
                    name="Dirección de Correo"
                    description="Alternativa"
                    gmail="manuelgurbanov@gmail.com"
                    isGmail={true}
                />
            </div>
        </section>
    );
}

export default Contact;
