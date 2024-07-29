import React from "react";

function HomePage() {
  const items = Array(20)
    .fill(null)
    .map((_, index) => `Hello world ${index + 1}`);

  return (
    <div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <h1 key={index} className="text-3xl font-title font-bold underline">
            {item}
          </h1>
        ))}
      </div>
      <h1 className="text-3xl font-title font-bold underline">Hello world!</h1>
    </div>
  );
}

export default HomePage;
