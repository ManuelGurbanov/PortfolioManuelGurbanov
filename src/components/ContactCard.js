import React from "react";
import CopyEmailButton from "./CopyEmailButton";

const ContactCard = ({ name, description, url, isGmail, gmail }) => {
    return (
        <div className="w-full p-4 shadow-md bg-mycolors-bg rounded-2xl">
            <h3 className="text-lg font-semibold text-mycolors-2">{name}</h3>
            <p className="text-slate-500">{description}</p>

            {isGmail ? (
                <>
                    <p className="text-white">{gmail}</p>
                    <CopyEmailButton gmail={gmail} />
                </>
            ) : (
                <a href={url} target="_blank" rel="noreferrer" className="text-mycolors-2">Ir al sitio</a>
            )}
        </div>
    );
}

export default ContactCard;
