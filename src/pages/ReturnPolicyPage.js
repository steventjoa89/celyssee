import React from "react";
import { COMPANY_WHATSAPP_NUMBER } from "../data/settings";

function ReturnPolicyPage() {
  return (
    <div className="max-w-5xl mx-auto mt-6 p-6">
      <h2 className="text-center font-bold uppercase">Return Policy</h2>
      <div className="text-sm md:text-base my-5 text-left space-y-5">
        <p className="font-bold">Our Return Policy</p>
        <p>
          At Celyssee, your satisfaction is our top priority. If you find that
          your purchase does not meet your expectations or is not in the
          condition you anticipated, you have the option to return it within 7
          days of receipt. We will cover the shipping costs for the return,
          ensuring a hassle-free process for you. Simply reach out to us via
          WhatsApp at {COMPANY_WHATSAPP_NUMBER}, and we will assist you through
          every step of the return procedure.
        </p>
        <p>
          To be eligible for a return, the product must be in its original,
          unused condition. Please be aware that we cannot accept returns for
          products that have been used.
        </p>
        <p>
          While we strive to ensure that every customer is happy with their
          purchase, we are unable to refund the original shipping costs.
        </p>
        <p>
          If you have any questions or need further assistance regarding our
          return policy, do not hesitate to contact us. Our customer service
          team is here to support you and make the return process as smooth as
          possible.
        </p>
        <p>
          Thank you for choosing Celyssee. We are committed to providing you
          with exceptional products and excellent service.
        </p>
      </div>
    </div>
  );
}

export default ReturnPolicyPage;
