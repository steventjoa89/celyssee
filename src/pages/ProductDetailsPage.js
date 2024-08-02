import React, { useState } from "react";
import ProductInfo from "../components/ProductDetails/ProductInfo";
import Card from "../components/Card/Card";
import { PERFUME_CATALOG } from "../data/data";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { id } = useParams();

  const [selectedItemSize, setSelectedItemSize] = useState(0);

  const selectedPerfume = PERFUME_CATALOG.find(
    (perfume) => perfume.id === parseInt(id)
  );

  const getSimilarityScore = (selectedPerfume, perfume) => {
    let score = 0;

    // Compare notes
    if (selectedPerfume.notes && perfume.notes) {
      const commonNotes = selectedPerfume.notes.filter((note) =>
        perfume.notes.includes(note)
      );
      score += commonNotes.length;
    }

    // Compare descriptions
    const selectedDescriptionWords =
      selectedPerfume.description?.toLowerCase().split(/\W+/) || [];
    const perfumeDescriptionWords = (perfume.description || "")
      .toLowerCase()
      .split(/\W+/);
    const commonWords = selectedDescriptionWords.filter((word) =>
      perfumeDescriptionWords.includes(word)
    );
    score += commonWords.length;

    // Compare gender
    if (
      selectedPerfume.gender &&
      perfume.gender &&
      selectedPerfume.gender === perfume.gender
    ) {
      score += 1; // Adjust the increment as needed
    }

    return score;
  };

  const getSuggestedPerfumes = (selectedPerfume, numSuggestions = 4) => {
    const perfumesWithScores = PERFUME_CATALOG.filter(
      (perfume) => perfume.id !== selectedPerfume.id
    )
      .map((perfume) => ({
        ...perfume,
        similarityScore: getSimilarityScore(selectedPerfume, perfume),
      }))
      .sort((a, b) => b.similarityScore - a.similarityScore);
    return perfumesWithScores.slice(0, numSuggestions);
  };

  const suggestedPerfumes = getSuggestedPerfumes(selectedPerfume, 4);

  return (
    <>
      {/* ProductDetails */}
      <div className="container mx-auto p-4 flex flex-col md:flex-row">
        {/* Left Panel: Product Images */}
        <div className="w-full md:w-1/2 lg:pr-4 mb-4 md:mb-0">
          {/* This is for images */}
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            Image Carousel
          </div>
        </div>

        {/* Right Panel: Product Info & Description */}
        <div className="w-full md:w-1/2 md:pl-4">
          <ProductInfo
            item={selectedPerfume}
            selectedSize={selectedItemSize}
            setSelectedSize={setSelectedItemSize}
          />
        </div>
      </div>

      {/* Suggestions */}
      <div className="w-full flex items-center justify-center">
        <div className="flex w-full flex-col">
          <h2 className="relative font-title text-2xl mt-8 mb-5">
            You may also like
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-16 h-[2px] bg-black"></span>
          </h2>
          <div className="grid">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
              {suggestedPerfumes.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailsPage;
