import React, { useState } from "react";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(2);
  const [isQuoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isIframeOpen, setIframeOpen] = useState(false);

  const handleAddToQuote = () => {
    setIframeOpen(true);
    // Navigate to the QuotePage route when "Add to Quote" is clicked
    // navigate("/quote");
  };

  // Function to handle quantity change
  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg grid md:grid-cols-2 gap-8">
        {/* Left: Product Images */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-300 h-64 w-full"></div>
          <div className="bg-gray-300 h-64 w-full"></div>
          <div className="bg-gray-300 h-64 w-full"></div>
          <div className="bg-gray-300 h-64 w-full"></div>
        </div>

        {/* Right: Product Details */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Men’s winter jacket</h1>
          <p className="text-xl text-gray-600 font-semibold">$99</p>

          <p className="mt-2 text-gray-700">
            Revamp your style with the latest designer trends in men’s clothing
            or achieve a perfectly curated wardrobe thanks to our line-up of
            timeless pieces.{" "}
          </p>

          {/* Color Selection */}
          <div className="mt-4">
            <h3 className="text-md font-semibold">Color</h3>
            <div className="flex space-x-2 mt-2">
              <span className="w-8 h-8 bg-orange-500 rounded-full border-2 border-gray-300 cursor-pointer"></span>
              <span className="w-8 h-8 bg-black rounded-full border-2 border-gray-300 cursor-pointer"></span>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-4">
            <h3 className="text-md font-semibold">Size</h3>
            <div className="flex space-x-2 mt-2">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-md hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-4">
            <h3 className="text-md font-semibold">Quantity</h3>
            <div className="flex items-center mt-2">
              <button
                className="px-3 py-1 border rounded-l-md bg-gray-100 hover:bg-gray-200"
                onClick={() => handleQuantityChange(-1)}
              >
                −
              </button>
              <span className="px-4 py-1 border">{quantity}</span>
              <button
                className="px-3 py-1 border rounded-r-md bg-gray-100 hover:bg-gray-200"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6">
            <button className="w-full py-3 bg-black text-white rounded-md text-lg">
              Add to Cart
            </button>
            <button
            data-cy='add-to-quote'
              className="w-full mt-2 py-3 bg-blue-600 text-white rounded-md text-lg"
              onClick={handleAddToQuote}
            >
              Add to Quote
            </button>
          </div>
        </div>
      </div>

      {isIframeOpen && (
  <div
    className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50"
    onClick={() => setIframeOpen(false)}
  >
    <iframe
      src="/quote"
      className="w-full h-full"  // Ensures iframe takes full width and height
      title="Quote Modal"
      frameBorder="0"
    />
  </div>
)}

      {/* <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      /> */}

      {/* Modal for third-party script */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-lg font-bold"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold">Quote Request</h2>
            <iframe
              src="https://thirdparty-quote.com/form"
              className="w-full h-60 mt-4 border"
            ></iframe>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ProductPage;
