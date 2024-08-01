import React from "react";
import { COMPANY_INFO } from "../data/settings";
import { toProperCase } from "../utils/stringUtil";

function PrivacyPolicyPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="text-xs md:text-sm my-5 text-left space-y-5">
        <p className="font-bold">Privacy Policy</p>
        <p>
          <span className="font-bold">Effective Date:</span> 31 August 2024
        </p>

        <div className="space-y-2">
          <p className="font-bold">Introduction</p>
          <p>
            Welcome to {toProperCase(COMPANY_INFO.COMPANY_NAME)}. We are
            committed to protecting your privacy and ensuring a secure online
            experience. This privacy policy explains how we collect, use, and
            protect your personal data when you visit and interact with our
            website.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-bold">Information We Collect</p>
          <p>We collect the following types of information:</p>
          <ul className="ml-4 list-disc">
            <li>
              <b>Personal Information</b>: When you make a purchase or contact
              us, we collect personal details such as your name, email address,
              phone number, and shipping address.
            </li>
            <li>
              <b>Payment Information</b>: For processing transactions, we
              collect payment details, but we do not store credit card
              information ourselves. This information is securely processed by
              our payment service providers.
            </li>
            <li>
              <b>Technical Data</b>: We collect information about your device
              and browser, including IP address, browser type, and operating
              system, to enhance user experience and for analytical purposes.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="font-bold">How We Use Your Information</p>
          <p>We use your information for the following purposes:</p>
          <ul className="ml-4 list-disc">
            <li>
              <b>Order Processing</b>: To process and fulfill your orders,
              manage payments, and handle shipping.
            </li>
            <li>
              <b>Customer Support</b>: To provide assistance and respond to
              inquiries or requests.
            </li>
            <li>
              <b>Marketing</b>: To send promotional materials, newsletters, and
              special offers if you have opted in. You can opt out at any time.
            </li>
            <li>
              <b>Website Improvement</b>: To analyze usage data and enhance our
              website and services.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="font-bold">Sharing Your Information</p>
          <p>We may share your information with:</p>
          <ul className="ml-4 list-disc">
            <li>
              <b>Service Providers</b>: Trusted third-party service providers
              who assist us in operating our website, processing payments, and
              delivering orders.
            </li>
            <li>
              <b>Legal Requirements</b>: Authorities or agencies if required to
              comply with legal obligations or protect our rights.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="font-bold">Cookies and Tracking Technologies</p>
          <p>We use cookies and similar tracking technologies to:</p>
          <ul className="ml-4 list-disc">
            <li>
              <b>Enhance Functionality</b>: To remember your preferences and
              provide a personalized experience.
            </li>
            <li>
              <b>Analyze Usage</b>: To understand how our website is used and
              improve our services.
            </li>
          </ul>
          <p>
            You can manage cookies through your browser settings. Please note
            that disabling cookies may affect your ability to use certain
            features of our website.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-bold">Data Security</p>
          <p>
            We take appropriate measures to protect your data from unauthorized
            access, loss, or misuse. This includes using encryption and secure
            servers. However, no method of transmission over the internet or
            electronic storage is completely secure.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-bold">Data Retention</p>
          <p>
            We retain your personal data only for as long as necessary to
            fulfill the purposes for which it was collected, including to comply
            with legal obligations and resolve disputes.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-bold">Your Rights</p>
          <p>You have the following rights regarding your personal data:</p>
          <ul className="ml-4 list-disc">
            <li>
              <b>Access</b>: Request access to the personal data we hold about
              you.
            </li>
            <li>
              <b>Correction</b>: Request corrections to any inaccurate or
              incomplete data.
            </li>
            <li>
              <b>Deletion</b>: Request deletion of your personal data, subject
              to legal requirements.
            </li>
            <li>
              <b>Opt-Out</b>: Opt out of receiving marketing communications at
              any time by following the unsubscribe instructions in the emails
              we send.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="font-bold">Children’s Privacy</p>
          <p>
            Our website is not intended for use by children under 13. We do not
            knowingly collect personal information from children under this age.
            If we become aware that we have collected such information, we will
            take steps to delete it.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-bold">Changes to This Policy</p>
          <p>
            We may update this privacy policy from time to time. Any changes
            will be posted on this page, and the effective date will be updated.
            We encourage you to review this policy periodically.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-bold">Contact Us</p>
          <p>
            For questions, concerns, or requests related to this privacy policy,
            please contact us at{" "}
            <a
              href={`mailto:${COMPANY_INFO.COMPANY_EMAIL_ADDRESS}`}
              className="underline underline-offset-4"
            >
              <b>{COMPANY_INFO.COMPANY_EMAIL_ADDRESS}</b>
            </a>
            .
          </p>
        </div>

        <p className="pt-4 font-bold">
          {toProperCase(COMPANY_INFO.COMPANY_NAME)}
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
