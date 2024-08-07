import React from "react";
import parse from "html-react-parser";
import { COMPANY_INFO } from "../data/settings";
import { toProperCase } from "../utils/stringUtil";

function PrivacyPolicyPage() {
  const privacyPolicyArrData = [
    {
      id: 1,
      title: "Introduction",
      body: `Welcome to ${toProperCase(COMPANY_INFO.COMPANY_NAME)}. We are
            committed to protecting your privacy and ensuring a secure online
            experience. This privacy policy explains how we collect, use, and
            protect your personal data when you visit and interact with our
            website.`,
    },
    {
      id: 2,
      title: "Information We Collect",
      body: "We collect the following types of information:",
      bodyList: [
        "<b>Personal Information</b>: When you make a purchase or contact us, we collect personal details such as your name, email address, phone number, and shipping address.",
        "<b>Payment Information</b>: For processing transactions, we collect payment details, but we do not store credit card information ourselves. This information is securely processed by our payment service providers.",
        "<b>Technical Data</b>: We collect information about your device and browser, including IP address, browser type, and operating system, to enhance user experience and for analytical purposes.",
      ],
    },
    {
      id: 3,
      title: "How We Use Your Information",
      body: "We use your information for the following purposes:",
      bodyList: [
        "<b>Order Processing</b>: To process and fulfill your orders, manage payments, and handle shipping.",
        "<b>Customer Support</b>: To provide assistance and respond to inquiries or requests.",
        "<b>Marketing</b>: To send promotional materials, newsletters, and special offers if you have opted in. You can opt out at any time.",
        "<b>Website Improvement</b>: To analyze usage data and enhance our website and services.",
      ],
    },
    {
      id: 4,
      title: "Sharing Your Information",
      body: "We may share your information with:",
      bodyList: [
        "<b>Service Providers</b>: Trusted third-party service providers who assist us in operating our website, processing payments, and delivering orders.",
        "<b>Legal Requirements</b>: Authorities or agencies if required to comply with legal obligations or protect our rights.",
      ],
    },
    {
      id: 5,
      title: "Cookies and Tracking Technologies",
      body: "We use cookies and similar tracking technologies to:",
      bodyList: [
        "<b>Enhance Functionality</b>: To remember your preferences and provide a personalized experience.",
        "<b>Analyze Usage</b>: To understand how our website is used and improve our services.",
      ],
      additionalBody:
        "You can manage cookies through your browser settings. Please note that disabling cookies may affect your ability to use certain features of our website.",
    },
    {
      id: 6,
      title: "Data Security",
      body: "We take appropriate measures to protect your data from unauthorized access, loss, or misuse. This includes using encryption and secure servers. However, no method of transmission over the internet or electronic storage is completely secure.",
    },
    {
      id: 7,
      title: "Data Retention",
      body: "We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including to comply with legal obligations and resolve disputes.",
    },
    {
      id: 8,
      title: "Your Rights",
      body: "You have the following rights regarding your personal data:",
      bodyList: [
        "<b>Access</b>: Request access to the personal data we hold about you.",
        "<b>Correction</b>: Request corrections to any inaccurate or incomplete data.",
        "<b>Deletion</b>: Request deletion of your personal data, subject to legal requirements.",
        "<b>Opt-Out</b>: Opt out of receiving marketing communications at any time by following the unsubscribe instructions in the emails we send.",
      ],
    },
    {
      id: 9,
      title: "Children’s Privacy",
      body: "Our website is not intended for use by children under 13. We do not knowingly collect personal information from children under this age. If we become aware that we have collected such information, we will take steps to delete it.",
    },
    {
      id: 10,
      title: "Changes to This Policy",
      body: "We may update this privacy policy from time to time. Any changes will be posted on this page, and the effective date will be updated. We encourage you to review this policy periodically.",
    },
    {
      id: 11,
      title: "Contact Us",
      body: `For questions, concerns, or requests related to this privacy policy, please contact us at <a href='mailto:${COMPANY_INFO.COMPANY_EMAIL_ADDRESS}' className="underline underline-offset-4"><b>${COMPANY_INFO.COMPANY_EMAIL_ADDRESS}</b></a> .`,
    },
  ];

  return (
    <div data-aos="fade-up" className="max-w-5xl mx-auto p-6">
      <div className="text-xs md:text-sm my-5 text-left space-y-5">
        <p className="font-bold">Privacy Policy</p>
        <p>
          <span className="font-bold">Effective Date</span>: 31 August 2024
        </p>

        {privacyPolicyArrData.map((item, index) => (
          <div key={index} className="space-y-1">
            <p className="font-bold">{item.title}</p>
            {item.body && <p>{parse(item.body)}</p>}
            {item.bodyList && (
              <ul className="ml-4 list-disc">
                {item.bodyList.map((itemList, itemIndex) => (
                  <li key={itemIndex}>{parse(itemList)}</li>
                ))}
              </ul>
            )}
            {item.additionalBody && <p>{parse(item.additionalBody)}</p>}
          </div>
        ))}

        <p className="pt-4 font-bold">
          {toProperCase(COMPANY_INFO.COMPANY_NAME)}
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
