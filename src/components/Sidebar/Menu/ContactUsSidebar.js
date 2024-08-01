import React from "react";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { COMPANY_INFO } from "../../../data/settings";

function ContactUsSidebar({ toggleSidebar }) {
  const waMessage = "";

  return (
    <div className="p-4">
      <div className="flex flex-col justify-start text-left px-7">
        <p className="font-bold pb-6 text-lg">Contact Us</p>

        <p className="text-sm pb-6">
          Our Client Advisors will be pleased to assist you.
        </p>

        <ul className="pb-5 space-y-5 border-b border-gray-200">
          <li onClick={toggleSidebar}>
            <PhoneOutlinedIcon style={{ fontSize: "1.2rem" }} />
            <a
              href={`tel:${COMPANY_INFO.COMPANY_PHONE_NUMBER}`}
              className="ml-3 text-sm truncate overflow-hidden overflow-ellipsis whitespace-nowrap"
            >
              {COMPANY_INFO.COMPANY_PHONE_NUMBER}
            </a>
          </li>
          <li onClick={toggleSidebar}>
            <EmailOutlinedIcon style={{ fontSize: "1.2rem" }} />
            <a
              href={`mailto:${COMPANY_INFO.COMPANY_EMAIL_ADDRESS}`}
              className="ml-3 text-sm truncate overflow-hidden overflow-ellipsis whitespace-nowrap"
            >
              {COMPANY_INFO.COMPANY_EMAIL_ADDRESS}
            </a>
          </li>
          <li onClick={toggleSidebar}>
            <WhatsAppIcon style={{ fontSize: "1.2rem" }} />
            <a
              href={`https://wa.me/${COMPANY_INFO.COMPANY_WHATSAPP_NUMBER.replaceAll(
                "-",
                ""
              ).replace(/^0/, "+62")}?text=${encodeURIComponent(waMessage)}`}
              className="ml-3 text-sm truncate overflow-hidden overflow-ellipsis whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              {COMPANY_INFO.COMPANY_WHATSAPP_NUMBER}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactUsSidebar;
