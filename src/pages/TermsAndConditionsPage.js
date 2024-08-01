import React from "react";
import parse from "html-react-parser";
import { COMPANY_INFO } from "../data/settings";

function TermsAndConditionsPage() {
  const termsAndConditionsArrData = [
    {
      id: 1,
      title: "Acceptance of Terms",
      body: "By using our Site, you agree to these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Site.",
    },
    {
      id: 2,
      title: "Changes to Terms",
      body: "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the Site. Your continued use of the Site after changes have been made constitutes your acceptance of the new Terms.",
    },
    {
      id: 3,
      title: "Products and Orders",
      body: `
      <ul class='ml-3 space-y-1 list-disc'>
        <li><b>Product Descriptions</b>: We strive to ensure that product descriptions are accurate. However, we do not warrant that product descriptions are error-free.</li>
        <li><b>Pricing</b>: All prices are subject to change without notice. We reserve the right to correct any pricing errors or inaccuracies.</li>
        <li><b>Orders</b>: All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason.</li>
      </ul>
      `,
    },
    {
      id: 4,
      title: "Payment",
      body: "We accept various forms of payment as listed on our Site. All payments are processed securely. By providing payment information, you authorize us to charge the payment method for the total amount of your order.",
    },
    {
      id: 5,
      title: "Shipping and Delivery",
      body: `
      <ul class='ml-3 space-y-1 list-disc'>
        <li><b>Shipping Costs</b>: Shipping costs are calculated based on your location and the shipping method selected.</li>
        <li><b>Delivery Times</b>: We strive to deliver your order within the estimated delivery timeframes. However, delivery times are not guaranteed and may vary based on factors outside our control.</li>
      </ul>
      `,
    },
    {
      id: 6,
      title: "Returns and Exchanges",
      body: "Return Policy: We accept returns and exchanges in accordance with our Return Policy. Please review our Return Policy for details on how to return or exchange a product. Damaged or Defective Items: If you receive a damaged or defective item, please contact us immediately so we can resolve the issue.",
    },
    {
      id: 7,
      title: "Intellectual Property",
      body: `All content on our Site, including but not limited to text, images, logos, and graphics, is the property of ${COMPANY_INFO.COMPANY_NAME} and is protected by intellectual property laws. You may not use any content from our Site without our express written permission.`,
    },
    {
      id: 8,
      title: "User Conduct",
      body: "You agree to use our Site only for lawful purposes and in a manner that does not infringe on the rights of others or restrict or inhibit anyone else's use and enjoyment of the Site.",
    },
    {
      id: 9,
      title: "Limitation of Liability",
      body: `To the fullest extent permitted by law, ${COMPANY_INFO.COMPANY_NAME} is not liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Site or the products purchased.`,
    },
    {
      id: 10,
      title: "Governing Law",
      body: "These Terms are governed by and construed in accordance with the laws of Indonesia. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Indonesia.",
    },
    {
      id: 11,
      title: "Contact Us",
      body: `If you have any questions or concerns about these Terms, please contact us at:<br /><br /><b>${COMPANY_INFO.COMPANY_NAME}</b><br />${COMPANY_INFO.COMPANY_EMAIL_ADDRESS}`,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="text-xs md:text-sm my-5 text-left space-y-5">
        <p className="font-bold">Terms and Conditions</p>
        <p>
          <span className="font-bold">Last Updated</span>: 31 August 2024
        </p>
        <p>
          Welcome to {COMPANY_INFO.COMPANY_NAME}! By accessing or using our
          website (the "Site"), you agree to be bound by the following terms and
          conditions (the "Terms"). Please read them carefully.
        </p>

        <ul className="ml-3 list-decimal space-y-3 font-bold">
          {termsAndConditionsArrData.map((item, index) => (
            <li key={index}>
              <div className="text-sm md:text-base">{item.title}</div>
              <div className="mt-1 font-normal">{parse(item.body)}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TermsAndConditionsPage;
