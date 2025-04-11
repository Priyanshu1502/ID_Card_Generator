import React from "react";
import { useState, useEffect } from "react";
import IDCard from "./components/IDCard";

const CLASS_OPTIONS = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
];
const DIVISION_OPTIONS = ["A", "B", "C", "D", "E"];
const BUS_ROUTES = ["Route 1", "Route 2", "Route 3", "Route 4", "Route 5"];

const ALLERGY_OPTIONS = [
  "None",
  "Peanuts",
  "Dairy",
  "Gluten",
  "Eggs",
  "Soy",
  "Fish",
  "Shellfish",
  "Tree Nuts",
  "Wheat",
];

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    class: CLASS_OPTIONS[0],
    section: DIVISION_OPTIONS[0],
    allergies: ["None"],
    photo: null,
    photoPreview: null,
    rackNumber: "",
    busRoute: BUS_ROUTES[0],
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          photo: file,
          photoPreview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      photo: formData.photoPreview,
    };

    setSubmittedData(submissionData);

    localStorage.setItem("studentIdCardData", JSON.stringify(submissionData));
  };

  const handleAllergyChange = (allergy) => {
    let updatedAllergies;

    if (allergy === "None") {
      updatedAllergies = ["None"];
    } else {
      const currentAllergies = formData.allergies.includes("None")
        ? formData.allergies.filter((a) => a !== "None")
        : [...formData.allergies];

      if (currentAllergies.includes(allergy)) {
        updatedAllergies = currentAllergies.filter((a) => a !== allergy);

        if (updatedAllergies.length === 0) {
          updatedAllergies = ["None"];
        }
      } else {
        updatedAllergies = [...currentAllergies, allergy];
      }
    }

    setFormData({
      ...formData,
      allergies: updatedAllergies,
    });
  };

  // Inside your App component
  useEffect(() => {
    const savedData = localStorage.getItem("studentIdCardData");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setFormData({
        ...parsed,
        photo: null, // reset the file input
        photoPreview: parsed.photo, // restore preview
      });
      setSubmittedData(parsed);
    }
  }, []);

  return (
    <div className="p-20 bg-gray-300">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg shadow-md"
      >
        <h1 className="font-bold text-4xl text-center">ID Card Generator</h1>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-gray-700 mb-1"
          >
            Name<span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="rollNumber"
            className="block text-sm font-bold text-gray-700 mb-1"
          >
            Roll Number<span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="rollNumber"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="class"
            className="block text-sm font-bold text-gray-700 mb-1"
          >
            Class<span className="text-red-400">*</span>
          </label>
          <select
            id="class"
            name="class"
            value={formData.class}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {CLASS_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="section"
            className="block text-sm font-bold text-gray-700 mb-1"
          >
            Division<span className="text-red-400">*</span>
          </label>
          <select
            id="section"
            name="section"
            value={formData.section}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {DIVISION_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Allergies<span className="text-red-400">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {ALLERGY_OPTIONS.map((allergy) => (
              <div key={allergy} className="flex items-center">
                <input
                  type="checkbox"
                  id={`allergy-${allergy}`}
                  checked={formData.allergies.includes(allergy)}
                  onChange={() => handleAllergyChange(allergy)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor={`allergy-${allergy}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {allergy}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="photo"
            className="block text-sm font-bold text-gray-700 mb-1"
          >
            Photo<span className="text-red-400">*</span>
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handlePhotoChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 file:bg-blue-500 file:text-white file:rounded-md file:py-2 file:px-4 file:border-0 hover:file:bg-blue-600 transition-colors"
          />
          {formData.photoPreview && (
            <div className="mt-2 flex  ">
              <img
                src={formData.photoPreview || "/placeholder.svg"}
                alt="Preview"
                className="h-42 w-42 border-2 border-gray-300 rounded-md p-2 object-fill"
              />
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="rackNumber"
            className="block text-sm font-bold text-gray-700 mb-1"
          >
            Rack Number<span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="rackNumber"
            name="rackNumber"
            value={formData.rackNumber}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="busRoute"
            className="block text-sm font-bold text-gray-700 mb-1"
          >
            Bus Route<span className="text-red-400">*</span>
          </label>
          <select
            id="busRoute"
            name="busRoute"
            value={formData.busRoute}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {BUS_ROUTES.map((route) => (
              <option key={route} value={route}>
                {route}
              </option>
            ))}
          </select>
        </div>

        <div>
          <input
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            {/* Generate ID Card */}
          </input>
        </div>
      </form>
      <IDCard formData={submittedData} />
    </div>
  );
};

export default App;
