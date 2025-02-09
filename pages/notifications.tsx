"use client";
import React, { useEffect, useId, useState } from "react";
import { motion } from "framer-motion";

const Notifications: React.FC = () => {
  const [active, setActive] = useState<(typeof initialCards)[number] | boolean | null>(null);
  const [cards, setCards] = useState(initialCards); // State for cards
  const [showPopup, setShowPopup] = useState(false);
  const id = useId();

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  const handleAccept = () => {
    setShowPopup(true);
    let val: number | null = parseInt(localStorage.getItem("points")) + 10;
    localStorage.setItem("points", val);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  const handleReject = (index: number) => {
    setCards((prevCards) => prevCards.filter((_, i) => i !== index)); // Remove the card from the list
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-4xl font-extrabold text-center py-8">Notifications</h1>

      {/* Popup positioned at the bottom-right */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="fixed bottom-10 right-10 px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg z-50"
        >
          10 points added!
        </motion.div>
      )}

      <ul className="max-w-3xl mx-auto w-full space-y-6">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            className="p-6 bg-neutral-800 border border-white/10 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col items-center gap-4">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-bold text-xl text-white text-center"
              >
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-neutral-400 text-center"
              >
                {card.description}
              </motion.p>
              <div className="flex items-center justify-center space-x-4">
                <motion.button
                  layoutId={`accept-button-${card.title}-${id}`}
                  className="px-6 py-3 text-sm rounded-full font-bold bg-green-500 hover:bg-green-600 text-white shadow-md transition-all duration-200"
                  onClick={handleAccept}
                >
                  {card.ctaText}
                </motion.button>
                <motion.button
                  layoutId={`reject-button-${card.title}-${id}`}
                  className="px-6 py-3 text-sm rounded-full font-bold bg-red-500 hover:bg-red-600 text-white shadow-md transition-all duration-200"
                  onClick={() => handleReject(index)}
                >
                  {card.rejectText}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
};

const initialCards = [
  {
    description: "Items",
    title: "Harry is requesting an HDMI cable for 2 days",
    ctaText: "Accept",
    rejectText: "Reject",
  },
  {
    description: "Items",
    title: "Ron is requesting a Kindle for a week",
    ctaText: "Accept",
    rejectText: "Reject",
  },
  {
    description: "Interests",
    title: "Luna is requesting a badminton match",
    ctaText: "Accept",
    rejectText: "Reject",
  },
  {
    description: "Housing",
    title: "Hermione is looking for a tenant to sublease her room",
    ctaText: "Accept",
    rejectText: "Reject",
  },
  {
    description: "Study Buddy",
    title: "Draco is looking for a tutor for Potions",
    ctaText: "Accept",
    rejectText: "Reject",
  },
];

export default Notifications;
