import React, { useEffect, useState } from "react";
import AppleImage from "../assets/apple.svg";
import { CheckCircle, Circle } from "lucide-react";

export const QuoteModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const savedData = sessionStorage.getItem("quoteFormData");
    return (
      JSON.parse(savedData) || {
        products: [
          {
            name: "My Farms Apple Pear",
            description: "250 mg",
            sku: "FARMS32323",
            price: 30000.0,
            quantity: 1,
            image: AppleImage,
          },
          {
            name: "My Farms Apple",
            description: "150 mg",
            sku: "FARMS32323",
            price: 30.0,
            quantity: 1,
            image: AppleImage,
          },
        ],
        contactInfo: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address1: "",
          address2: "",
          city: "",
          state: "",
          country: "",
          message: "",
        },
      }
    );
  });

  useEffect(() => {
    sessionStorage.setItem("quoteFormData", JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateContactInfo = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      contactInfo: { ...prev.contactInfo, [name]: value },
    }));
  };

  const updateProductQuantity = (index, value) => {
    setFormData((prev) => {
      const updatedProducts = [...prev.products];
      updatedProducts[index].quantity = Math.max(1, value);
      return { ...prev, products: updatedProducts };
    });
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl">
            <div className="p-4">
              <div className="text-xl text-center mb-8">
                Product that you are interested in
              </div>
              <table className="w-full text-left border border-gray-300">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="rounded-md p-2 font-medium text-gray-600">
                      Product
                    </th>
                    <th className="rounded-md p-2 text-center font-medium text-gray-600">
                      Unit Price
                    </th>
                    <th className="rounded-md p-2 text-center font-medium text-gray-600">
                      Quantity
                    </th>
                    <th className="rounded-md p-2 text-center font-medium text-gray-600">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {formData.products.map((product, index) => (
                    <tr key={index}>
                      <td className="py-4 flex items-center">
                        <img
                          src={product.image}
                          alt="Product"
                          className="w-10 h-10 mr-3 rounded"
                        />
                        <div>
                          <p className="font-semibold">{product.name}</p>
                          <p className="text-sm text-gray-500">
                            {product.description}
                          </p>
                          <p className="text-sm text-gray-500">
                            SKU: {product.sku}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 text-center">
                        ${product.price.toLocaleString()}
                      </td>
                      <td className="py-4 text-center">
                        <input
                          type="number"
                          value={product.quantity}
                          onChange={(e) =>
                            updateProductQuantity(
                              index,
                              parseInt(e.target.value, 10)
                            )
                          }
                          className="w-16 border rounded-md"
                        />
                      </td>
                      <td className="py-4 text-center">
                        ${(product.price * product.quantity).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="text-lg text-center mb-8">
              We want to know a little more about you before we can reach out to
              you
            </div>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(formData.contactInfo).map(([key, value]) => (
                <div key={key} className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </label>
                  {key === "message" ? (
                    <textarea
                      name={key}
                      value={value}
                      onChange={updateContactInfo}
                      rows={4}
                      className="block w-full p-2 border rounded-md resize-none"
                      placeholder="Enter your message..."
                    />
                  ) : (
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={updateContactInfo}
                      className="w-full p-2 border rounded-md"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl">
              <div className="p-4">
                <div className="text-xl text-center mb-8">
                  Product that you are interested in
                </div>
                <table className="w-full text-left border border-gray-300">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="rounded-md p-2 font-medium text-gray-600">
                        Product
                      </th>
                      <th className="rounded-md p-2 text-center font-medium text-gray-600">
                        Unit Price
                      </th>
                      <th className="rounded-md p-2 text-center font-medium text-gray-600">
                        Quantity
                      </th>
                      <th className="rounded-md p-2 text-center font-medium text-gray-600">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.products.map((product, index) => (
                      <tr key={index}>
                        <td className="py-4 flex items-center">
                          <img
                            src={product.image}
                            alt="Product"
                            className="w-10 h-10 mr-3 rounded"
                          />
                          <div>
                            <p className="font-semibold">{product.name}</p>
                            <p className="text-sm text-gray-500">
                              {product.description}
                            </p>
                            <p className="text-sm text-gray-500">
                              SKU: {product.sku}
                            </p>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          ${product.price.toLocaleString()}
                        </td>
                        <td className="py-4 text-center">
                          <input
                            type="number"
                            value={product.quantity}
                            onChange={(e) =>
                              updateProductQuantity(
                                index,
                                parseInt(e.target.value, 10)
                              )
                            }
                            className="w-16 border rounded-md"
                            disabled={step === 3}
                          />
                        </td>
                        <td className="py-4 text-center">
                          ${(product.price * product.quantity).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-lg text-center mb-8 mt-10">
              We want to know a little more about you before we can reach out to
              you
            </div>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(formData.contactInfo).map(([key, value]) => (
                <div key={key} className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </label>
                  {key === "message" ? (
                    <textarea
                      name={key}
                      value={value}
                      onChange={updateContactInfo}
                      rows={4}
                      className="block w-full p-2 border rounded-md resize-none"
                      placeholder="Enter your message..."
                      disabled={step === 3}
                    />
                  ) : (
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={updateContactInfo}
                      className="w-full p-2 border rounded-md"
                      disabled={step === 3}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    isOpen && (
      <div
        style={step === 3 ? { paddingTop: "500px", marginBottom: "10px" } : {}}
        className="fixed inset-0 overflow-auto flex items-center justify-center  bg-opacity-50 backdrop-blur-sm"
          data-cy="quote-modal"
      >
        <div className="bg-white p-6 rounded-lg w-2/3 relative">
          <button
            className="absolute top-2 right-2 text-2xl font-bold"
            onClick={onClose}
          >
            ×
          </button>
          <div>
            {/* Stepper Component */}
            <div className="flex items-center justify-around mb-6">
              {["Select Products", "Contact Information", "Confirm"].map(
                (label, index) => (
                  <div key={index} className="flex items-center">
                    {/* Step Indicator */}
                    <div
                      className={`rounded-full p-1 border-2 ${
                        step > index ? "border-green-500" : "border-gray-300"
                      }`}
                    >
                      {step > index ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-300" />
                      )}
                    </div>

                    {/* Step Label */}
                    <div className="text-center mx-2">
                      <span
                        className={`${
                          step === index + 1
                            ? "font-bold text-black"
                            : "text-gray-500"
                        }`}
                      >
                        {label}
                      </span>
                    </div>

                    {/* Connector */}
                    {index < 2 && (
                      <div className="w-20 h-1 bg-gray-300 mx-2 rounded-full">
                        {step > index + 1 && (
                          <div className="w-full h-1 bg-teal-400 rounded-full" />
                        )}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>

            {renderStepContent()}
            <div className="mt-6 flex justify-between">
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
                >
                  Back
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Continue Shopping
                </button>
              )}
              {step === 3 ? (
                <button className="px-4 py-2 bg-green-600 text-white rounded-md">
                  Submit Quote Request
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className={`px-4 py-2 ${
                    step === 3
                      ? "bg-green-600"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white rounded-md`}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
