import React from "react";
import { CONTACTS } from "../../../constants/constants";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col space-y-2 pt-6">
      <div className="flex flex-col">
        <span className="text-Snow text-xs font-bold">Email Address</span>
        <span
          className="text-xs text-Green transition-colors duration-300 hover:text-Lime-400"
          mailto
        >
          <Link
            href={`mailto:${CONTACTS.EMAIL}`}
            className="transition-colors duration-300 hover:underline hover:text-Lime-400"
          >
            {CONTACTS.EMAIL}
          </Link>
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-Snow text-xs font-bold">Phone</span>
        <span className="text-xs text-Green transition-colors duration-300 hover:text-Lime-400 cursor-pointer">
          <a
            href={`tel:${CONTACTS.PHONE}`}
            className="transition-colors duration-300 hover:underline hover:text-Lime-400"
          >
            {CONTACTS.PHONE}
          </a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
