import React from "react";
import success_img from "../assets/Success_img.png";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <img
          src={success_img}
          alt="Welcome"
          className="mx-auto mb-4 w-20 h-20 object-cover"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Thank you for choosing us!
        </h2>
        <p className="text-gray-600 mb-6">
          Form Submitted Successfully. We are excited to know more about you.
          Please check your mail box
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
