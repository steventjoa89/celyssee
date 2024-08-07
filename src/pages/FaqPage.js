import React from "react";
import Accordion from "../components/Accordion/Accordion";
import parse from "html-react-parser";
import { COMPANY_INFO } from "../data/settings";
import { toProperCase } from "../utils/stringUtil";

function FaqPage() {
  const faqs = [
    {
      title: "General Inquiries",
      description: `Answers to common questions about ${toProperCase(
        COMPANY_INFO.COMPANY_NAME
      )}, including company information and how to contact us.`,
      faqs: [
        {
          q: `What is the story behind ${toProperCase(
            COMPANY_INFO.COMPANY_NAME
          )}?`,
          a: `${toProperCase(
            COMPANY_INFO.COMPANY_NAME
          )} was founded to blend artistry and elegance in the world of fragrances. Our story is one of crafting exceptional perfumes that embody sophistication and timeless beauty, combining traditional techniques with modern creativity.`,
        },
        {
          q: `What makes ${toProperCase(COMPANY_INFO.COMPANY_NAME)} unique?`,
          a: `${toProperCase(
            COMPANY_INFO.COMPANY_NAME
          )} is distinguished by our meticulous selection of premium ingredients and our commitment to artisanal craftsmanship. Each fragrance is crafted to offer a unique and luxurious olfactory experience, reflecting our dedication to quality and innovation.`,
        },
        {
          q: `Where can I purchase ${toProperCase(
            COMPANY_INFO.COMPANY_NAME
          )} products?`,
          a: `${toProperCase(
            COMPANY_INFO.COMPANY_NAME
          )} products are currently available for purchase through our online boutique and via WhatsApp.`,
        },
        {
          q: `How can I contact ${toProperCase(COMPANY_INFO.COMPANY_NAME)}?`,
          a: `You can reach the ${toProperCase(
            COMPANY_INFO.COMPANY_NAME
          )} team through our Instagram account, email, or via WhatsApp.`,
        },
      ],
    },
    {
      title: "Order Management",
      description:
        "Details on how to track your perfume orders, make modifications, or cancel them if needed.",
      faqs: [
        {
          q: "How do I check the status of my order?",
          a: "As we currently sell our products through Indonesian marketplaces, you can track your order using the tracking system provided by the marketplace. For direct inquiries or additional assistance, please contact us via email or WhatsApp, and we will be happy to assist you in tracking your order.",
        },
        {
          q: "Can I place an order for a product that is out of stock?",
          a: "If a product is currently out of stock, you can inquire about availability by contacting us. We may be able to offer an estimated restock date or assist you with pre-ordering the item if available.",
        },
        {
          q: "Can I modify my order after placing it?",
          a: "Once an order is placed, we process it promptly to ensure swift delivery. If you need to make changes, please contact us as soon as possible. We will do our best to accommodate modifications before the order is dispatched.",
        },
        {
          q: "How can I cancel my order?",
          a: "If you wish to cancel your order, please notify us immediately via email or WhatsApp. We will attempt to cancel your order before it is shipped. If the order has already been processed, we will guide you through our return procedure.",
        },
        {
          q: `Does ${toProperCase(
            COMPANY_INFO.COMPANY_NAME
          )} ship internationally?`,
          a: `At this time, ${toProperCase(
            COMPANY_INFO.COMPANY_NAME
          )}'s shipping is limited to Indonesia. However, if you have an alternative shipping arrangement, we would be delighted to assist you in facilitating your purchase. Please feel free to explore options with a local shipping service.`,
        },
      ],
    },
    {
      title: "Product Details",
      description:
        "Comprehensive information about our fragrances profile, and how to use them effectively.",
      faqs: [
        {
          q: `What types of fragrances does ${toProperCase(
            COMPANY_INFO.COMPANY_NAME
          )} offer?`,
          a: `${toProperCase(
            COMPANY_INFO.COMPANY_NAME
          )} currently offers a curated selection of eau de parfum, featuring both classic and contemporary scents crafted to meet diverse preferences. In the future, we plan to expand our collection to include additional fragrance types and exclusive blends designed to captivate and inspire.`,
        },
        {
          q: "How do I choose the right fragrance for me?",
          a: "Selecting a fragrance is a personal journey. We recommend exploring our scent profiles and descriptions to find a match that resonates with your preferences.",
        },
        {
          q: "What is the difference between eau de parfum and eau de toilette?",
          a: "Eau de parfum and eau de toilette differ primarily in their concentration of fragrance oils. Eau de parfum has a higher concentration, offering a more intense and longer-lasting scent, while eau de toilette is lighter and more subtle.",
        },
        {
          q: `Are ${toProperCase(
            COMPANY_INFO.COMPANY_NAME
          )} perfumes suitable for sensitive skin?`,
          a: "Our fragrances are formulated with high-quality ingredients to minimize irritation. However, if you have particularly sensitive skin or allergies, we recommend performing a patch test before full application or consulting with a healthcare professional.",
        },
        {
          q: `How should I store my ${toProperCase(
            COMPANY_INFO.COMPANY_NAME
          )} perfumes?`,
          a: `To maintain the integrity and longevity of your fragrance, store it in a cool, dry place away from direct sunlight and heat. Keeping the perfume in its original box or a dark, airtight container can also help preserve its quality.`,
        },
        {
          q: `Are ${toProperCase(
            COMPANY_INFO.COMPANY_NAME
          )} perfumes vegan and cruelty-free?`,
          a: `${toProperCase(
            COMPANY_INFO.COMPANY_NAME
          )} is committed to ethical practices. Our perfumes are formulated without animal-derived ingredients and are not tested on animals. We ensure that our products meet high standards of cruelty-free and vegan-friendly.`,
        },
        {
          q: "Can I customize my fragrance?",
          a: "Currently, we do not offer customization for individual fragrances. However, our diverse range of scents allows you to find a blend that matches your unique preferences. Feel free to explore our collection to discover your perfect fragrance.",
        },
        {
          q: `How long will my ${toProperCase(
            COMPANY_INFO.COMPANY_NAME
          )} perfume last?`,
          a: "The longevity of a perfume can vary based on factors such as concentration, application, and skin type. Typically, eau de parfum offers longer-lasting wear compared to eau de toilette. To maximize longevity, apply the fragrance to pulse points and avoid excessive rubbing.",
        },
      ],
    },
    {
      title: "Billing and Promotions",
      description:
        "Clarifications on payment options, billing procedures, and current promotional offers available.",
      faqs: [
        {
          q: "What payment methods do you accept?",
          a: `${toProperCase(
            COMPANY_INFO.COMPANY_NAME
          )} currently accepts payments via bank transfer and Indonesian marketplace payment methods. We prioritize secure transactions to ensure a smooth and reliable checkout experience. In the future, we plan to expand our payment options to provide even greater convenience for our customers.`,
        },
        {
          q: "Can I use multiple discount codes on a single order?",
          a: "We allow the use of one discount code per order. If you have multiple codes, please choose the one that offers the greatest benefit.",
        },
        {
          q: "How will I receive my invoice?",
          a: "Currently, as we are selling exclusively through Indonesian marketplaces, invoices are provided through the marketplace platform. For direct transactions, please contact us via email or WhatsApp, and we will generate and send your invoice to the email address associated with your account.",
        },
        {
          q: "Are there any ongoing promotions or sales?",
          a: "We periodically offer promotions and sales on our website. To stay informed about our latest offers, subscribe to our newsletter or follow us on social media for updates on special deals and exclusive discounts.",
        },
        {
          q: "What are the shipping rates within Indonesia?",
          a: `
          Our shipping rates align with standard transportation costs across Indonesia. The approximate rates are as follows:
          <ul style="list-style-type: disc; padding-left: 20px;">
            <li>Jakarta: IDR 10,000</li>
            <li>West Java: IDR 15,000</li>
            <li>Central Java, East Java, and Bali: IDR 20,000</li>
            <li>Sumatra: IDR 25,000</li>
            <li>Kalimantan: IDR 35,000</li>
            <li>Sulawesi and surrounding regions: IDR 50,000</li>
            <li>Papua and surrounding regions: IDR 80,000</li>
          </ul>
          `,
        },
      ],
    },
    {
      title: "Returns and Exchanges",
      description:
        "Information on how to return or exchange perfumes, including our policies and procedures for a smooth process.",
      faqs: [
        {
          q: "Can I cancel my order?",
          a: "We are committed to ensuring you love your fragrance. If the scent you’ve received does not meet your expectations, please contact us via WhatsApp or email. We will gladly arrange a return of the unused perfume for a full refund or exchange.",
        },
        {
          q: "Can I return my purchase?",
          a: "Absolutely. If the fragrance does not meet your preferences, please reach out to us via WhatsApp. We will facilitate the return of your unused perfume and offer a refund or exchange to ensure you find a scent that perfectly suits you.",
        },
        {
          q: "What should I do if my order is missing items or damaged?",
          a: "We apologize for any inconvenience. Please contact us immediately via WhatsApp or email with a photo of the issue. We will promptly address the matter and ensure that you receive your order in perfect condition.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-full mx-8 md:mx-16 text-left">
      {faqs.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row">
          <div data-aos="fade-right" className="flex-1 p-4">
            <h2 className="text-center md:text-left text-xl md:text-2xl font-bold">
              {item.title}
            </h2>
            <p className="mt-2 md:mt-4 text-sm text-gray-600">
              {item.description}
            </p>
          </div>
          <div data-aos="fade-left" className="flex-1 p-4">
            {item.faqs.map((itemFaq, itemIndex) => (
              <Accordion
                key={itemIndex}
                title={itemFaq.q}
                isShowBottomBorder={true}
              >
                <span className="pb-3 text-sm text-gray-600">
                  {parse(itemFaq.a)}
                </span>
              </Accordion>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaqPage;
