import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import Button from "../components/Button/Button";
import { COMPANY_INFO } from "../data/settings";
import { toProperCase } from "../utils/stringUtil";
import TitleManager from "../components/TitleManager/TitleManager";

function AboutUsTextSection({ title = "", description = "" }) {
  return (
    <div data-aos="fade-up" className="py-5 lg:py-6 text-center">
      <h1 className="font-title text-gray-700 text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h1>
      <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}

function ImagePanel({ image = "" }) {
  return (
    <div data-aos="fade-right" className="flex-1">
      <img
        src={image}
        alt="About Us"
        className="h-auto md:h-[45vh] w-full object-cover"
      />
    </div>
  );
}

function ImageDescriptionPanel({ title = "", description = "", children }) {
  return (
    <div
      data-aos="fade-left"
      className="flex-1 flex flex-col justify-center items-center p-6 xs:p-8 md:p-10 lg:p-12 xl:p-14"
    >
      <h1 className="font-title text-gray-700 text-2xl md:text-3xl font-bold mb-4">
        {title}
      </h1>
      <p className="text-base md:text-lg text-gray-500 mb-3">{description}</p>
      {children}
    </div>
  );
}

function AboutUsImageSection({
  imagePosition = "left",
  image = "",
  title = "",
  description = "",
  children,
}) {
  return (
    <div className="py-5 lg:py-6 flex flex-col md:flex-row text-center">
      {imagePosition === "left" ? (
        <>
          <ImagePanel image={image} />
          <ImageDescriptionPanel title={title} description={description} />
        </>
      ) : (
        <>
          <ImageDescriptionPanel title={title} description={description}>
            {children}
          </ImageDescriptionPanel>
          <ImagePanel image={image} />
        </>
      )}
    </div>
  );
}

function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <>
      <TitleManager templateKey="ABOUT_US" />
      <div className="text-gray-800 min-h-screen p-6">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2">
          {/* Our Journey */}
          <AboutUsTextSection
            title="Our Journey"
            description={`At ${toProperCase(
              COMPANY_INFO.COMPANY_NAME
            )}, our passion for perfume transcends the
        ordinary. Our story began with a simple, yet profound belief: fragrance
        is more than just a scent—it's an experience that evokes memories,
        emotions, and personal expression.`}
          />

          {/* Crafting Scents Section */}
          <AboutUsImageSection
            image={`${process.env.PUBLIC_URL}/images/about-us/about-us-1.avif`}
            title="Crafting Distinctive Scents"
            description={`At ${toProperCase(
              COMPANY_INFO.COMPANY_NAME
            )}, each fragrance is a work of art,
          meticulously designed to tell a unique story. Our team of expert
          perfumers draws from a palette of rare and exquisite ingredients,
          blending them with precision and creativity. From the initial concept
          to the final product, every step is infused with dedication and a
          quest for perfection.`}
          />

          {/* Commitment Section */}
          <AboutUsImageSection
            imagePosition="right"
            image={`${process.env.PUBLIC_URL}/images/about-us/about-us-2.avif`}
            title="A Commitment to Excellence"
            description={`At ${toProperCase(
              COMPANY_INFO.COMPANY_NAME
            )}, we are dedicated to crafting exquisite fragrances that reflect our passion for quality and craftsmanship. Every scent is meticulously developed to offer an unparalleled olfactory experience, designed to evoke emotions and memories with each use.`}
          />

          {/* Sustainability Section */}
          <AboutUsImageSection
            image={`${process.env.PUBLIC_URL}/images/about-us/about-us-3.avif`}
            title="Sustainability and Ethical Practices"
            description={`We are committed to sustainability and ethical practices in every aspect of our business. From responsibly sourcing our ingredients to minimizing our environmental footprint, we ensure that our production methods are both eco-friendly and socially responsible.`}
          />

          {/* Innovative Section */}
          <div className="py-4">
            <AboutUsTextSection
              title="Innovative and Evolving"
              description={`Our dedication to excellence drives us to continuously innovate and evolve. We embrace new techniques and ideas while staying true to our core values. This commitment to innovation ensures that our fragrances remain at the forefront of the industry.`}
            />
          </div>

          {/* Craftsmanship Section */}
          <AboutUsImageSection
            image={`${process.env.PUBLIC_URL}/images/about-us/about-us-4.avif`}
            title="Craftsmanship and Quality"
            description={`Each ${toProperCase(
              COMPANY_INFO.COMPANY_NAME
            )} fragrance is a testament to our dedication to craftsmanship and quality. Our skilled artisans work tirelessly to create scents that are both luxurious and memorable, reflecting our commitment to delivering the finest products.`}
          />

          {/* Positive Impact Section */}
          <AboutUsTextSection
            title="Positive Impact and Responsibility"
            description={`We are passionate about making a positive impact on the world. By supporting fair trade practices and using sustainable resources, we aim to contribute to a better future while delivering exceptional products. Every fragrance we create embodies our dedication to ethical responsibility and excellence.`}
          />

          {/* Invitation Section */}
          <AboutUsImageSection
            imagePosition="right"
            image={`${process.env.PUBLIC_URL}/images/about-us/about-us-5.avif`}
            title="Join Us on Our Journey"
            description={`We invite you to explore our collection and discover a fragrance
              that resonates with your soul. Whether you're seeking a signature
              scent or a special gift, ${toProperCase(
                COMPANY_INFO.COMPANY_NAME
              )} offers an
              array of choices to enhance your fragrance journey. Experience the
              elegance and sophistication that define our brand, and let 
              ${toProperCase(
                COMPANY_INFO.COMPANY_NAME
              )} become a part of your own story.`}
          >
            <div className="mt-3">
              <Button onClick={() => navigate(ROUTES.BEST_SELLERS)}>
                Explore Our Collection
              </Button>
            </div>
          </AboutUsImageSection>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
