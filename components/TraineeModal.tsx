"use client";

import React from "react";

interface Trainee {
  id: number;
  name: string;
  image: string;
  country: string; // Two-letter country code (e.g., "KR", "JP")
  zodiac: string;
  mbti: string;
  favoriteColor: string;
  favoriteFood: string;
  favoriteArtist: string;
  nationality: string;
  tmi: string[];
}

// Mapping of country codes to full country names
const countryNameMap: { [key: string]: string } = {
  MM: "Myanmar",
  KR: "South Korea",
  JP: "Japan",
  CA: "Canada",
  US: "United States",
  PH: "Philippines",
  TH: "Thailand",
  CN: "China",
  VN: "Vietnam",
  ID: "Indonesia",
};

// Function to get country flag emoji
const getCountryFlagEmoji = (countryCode: string) => {
  if (!countryCode) return "🌍"; // Default if no country is provided
  return countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join("");
};

const TraineeModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  trainee: Trainee | null;
}> = ({ isOpen, onClose, trainee }) => {
  if (!isOpen || !trainee) return null;

  const countryCode = trainee.country.toUpperCase();
  const countryName = countryNameMap[countryCode] || "Unknown Country";

  // Handle clicking outside the modal content
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[99999]"
      onClick={handleBackdropClick}
    >
      <div className="bg-[#01274F] px-6 py-8 rounded-[2px] shadow-lg text-center max-w-[90%] w-[100%] md:w-[50%] flex flex-col z-[100000] text-[#F4FAFE] max-h-[90vh] overflow-y-auto">
        {/* Profile Image Container */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4">
          <img
            src={trainee.image}
            alt={trainee.name}
            className="w-full h-full rounded-full border-8 border-[#92D0F3] bg-[#b8c2d5]"
          />
          <img
            src="/assets/icons/btn-crest-logo-transparent.png"
            alt="Crest Logo"
            className="absolute bottom-0 left-0 w-10 h-10 md:w-12 md:h-12"
          />
        </div>

        {/* Trainee Info */}
        <h2 className="text-2xl font-bold">{trainee.name}</h2>
        <p className="text-md mb-2">
          {getCountryFlagEmoji(countryCode)} {countryName}
        </p>
        <hr className="border-[#F4FAFE] my-4" />

        {/* Dreamers Info */}
        <h3 className="text-lg font-semibold mb-[10px]">DREAMER'S INFO:</h3>
        <p>
          🌟 <b>Stage Name:</b> {trainee.name}
        </p>
        <p>
          ♒ <b>Zodiac Sign:</b> {trainee.zodiac}
        </p>
        <p>
          🧠 <b>MBTI:</b> {trainee.mbti}
        </p>
        <p>
          🎨 <b>Favorite Color:</b> {trainee.favoriteColor}
        </p>
        <p>
          🍽 <b>Favorite Food:</b> {trainee.favoriteFood}
        </p>
        <p>
          🎤 <b>Favorite Artist/Group:</b> {trainee.favoriteArtist}
        </p>
        <p>
          🗺 <b>Nationality:</b> {trainee.nationality}
        </p>
        {/* TMI Section */}
        {trainee.tmi && trainee.tmi.length > 0 && (
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold">TMI:</h3>
            <ul className="list-disc list-inside">
              {trainee.tmi.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Buttons */}
        <button
          className="mt-8 px-6 py-2 bg-gray-500 text-[#F4FAFE] font-bold rounded-[2px] cursor-not-allowed"
          disabled
        >
          Trainee Profile (Coming Soon)
        </button>
        <button
          className="mt-2 px-6 py-2 bg-[#F4FAFE] text-[#01274F] font-bold rounded-[2px]"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TraineeModal;
