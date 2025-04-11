import React, { useRef } from "react";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { toPng } from "html-to-image";
const IDCard = ({ formData }) => {
  const idCard1Ref = useRef();
  const idCard2Ref = useRef();

  const [changeLayout, setChangeLayout] = useState(true);
  const QRData = { ...formData };
  delete QRData.photoPreview;
  delete QRData.photo;

  const downloadAsPng = async () => {
    try {
      const cardRef = changeLayout ? idCard1Ref.current : idCard2Ref.current;

      if (!cardRef) {
        throw new Error("Card reference is not available");
      }

      const dataUrl = await toPng(cardRef, { quality: 0.95 });

      // Create a download link
      const link = document.createElement("a");
      link.download = `student-id-card-${formData.name
        .replace(/\s+/g, "-")
        .toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();

      alert("ID card downloaded successfully!");
    } catch (error) {
      console.error("Error downloading ID card:", error);
      alert("Failed to download ID card. Please try again.");
    }
  };

  const toggleChange = () => {
    setChangeLayout(!changeLayout);
  };

  if (formData.allergies == undefined) {
    formData.allergies = ["None"];
  }

  return (
    <div className="bg-white mt-6 rounded-l-2xl shadow-md p-6 flex flex-col items-center justify-center">
      <button
        className="p-1 rounded-md mb-4 bg-gray-300 border-2 border-gray-400 hover:bg-gray-400 hover:text-white transition duration-300 ease-in-out text-lg pr-4 pl-4"
        onClick={toggleChange}
      >
        Change Layout
      </button>
      {/* horizontal layout */}
      <div className={`${!changeLayout ? "hidden" : ""}`}>
        <div
          ref={idCard1Ref}
          className={` border-[1px] p-4 flex flex-col items-center justify-center rounded-2xl shadow-md w-96 bg-gray-200`}
        >
          <div className="flex flex-col items-center justify-center mb-4 bg-[#014169] pt-2 w-full rounded-t-2xl">
            <h1 className="text-2xl font-bold mb-2 text-white">ID Card</h1>
            <img
              src={
                formData.photoPreview ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcgsFWxeZOsU7bZQNSgF1SIOyWsnSpznp3P6Dv97RcaEtV40YsPE4Mt8InlAxuxe-TyE&usqp=CAU"
              }
              className="w-32 h-32 object-fill rounded-full border-black border-2 mb-4"
              alt="photo"
            />
          </div>
          <h2 className="font-bold text-lg">
            {formData.name || (
              <div className="h-2 bg-gray-200 rounded-3xl"></div>
            )}
          </h2>
          <h2 className="text-blue-400 text-xs ">{formData.rollNumber}</h2>
          <div className="flex gap-[2px] mb-3">
            <h2 className="font-bold">Class: {formData.class}</h2>
            <h2 className="italic">{formData.section}</h2>
          </div>
          <h2 className="font-bold text-red-400">
            Allergies:{" "}
            {formData.allergies[0] === "None"
              ? "None"
              : formData.allergies.join(", ")}
          </h2>
          <h2 className=" italic">Rack: {formData.rackNumber}</h2>

          <h2>Bus Route: {formData.busRoute}</h2>
          <div className="mt-4 mb-4">
            <QRCodeSVG
              value={JSON.stringify(QRData)}
              size={128}
              level={"H" || "L" || "M" || "Q" || "H"}
            />
          </div>
        </div>
      </div>
      {/* vertical layout */}
      <div className={`${changeLayout ? "hidden" : ""}`}>
        <div
          ref={idCard2Ref}
          className=" border-[1px] p-4 rounded-2xl shadow-md bg-gray-200 w-[36rem] pb-10"
        >
          <h1 className="text-center font-bold text-xl bg-[#014169] rounded-t-2xl p-4">
            ID Card
          </h1>
          <div className="mt-4 flex gap-10 ml-3">
            <img
              className="rounded-2xl w-36 h-42 object-fill border-black border-2 mb-4"
              src={
                formData.photoPreview ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcgsFWxeZOsU7bZQNSgF1SIOyWsnSpznp3P6Dv97RcaEtV40YsPE4Mt8InlAxuxe-TyE&usqp=CAU"
              }
              alt="photo"
            />

            <div className="flex flex-col items-start justify-center">
              <h2 className="font-bold text-lg">{formData.name}</h2>
              <h2 className="text-blue-400 text-xs ">{formData.rollNumber}</h2>
              <div className="flex gap-[2px] mb-3">
                <h2 className="font-bold">Class: {formData.class}</h2>
                <h2 className="italic">{formData.section}</h2>
              </div>

              <h2 className="font-bold text-red-400">
                Allergies:
                {formData.allergies[0] === "None"
                  ? "None"
                  : formData.allergies.join(", ")}
              </h2>
              <h2 className=" italic">Rack: {formData.rackNumber}</h2>
              <h2>Bus Route: {formData.busRoute}</h2>
            </div>

            <div className="mt-4 mb-4 flex items-center justify-center">
              <QRCodeSVG
                value={JSON.stringify(QRData)}
                size={128}
                level={"H" || "L" || "M" || "Q" || "H"}
                includeMargin={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={downloadAsPng}
          className="border-2 bg-gray-300 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out text-lg pr-4 pl-4 rounded-md p-2"
        >
          Download as PNG
        </button>
      </div>
    </div>
  );
};

export default IDCard;
