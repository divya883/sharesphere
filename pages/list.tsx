"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import SearchBar from "@/components/ui/searchbar";
import LitUpButton from "@/components/ui/litUpButton";
import Cookies from "js-cookie";
import router from "next/router";

function ExpandableCardDemo() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const listingData = {}
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            const token = Cookies.get("token"); // Retrieve the JWT token from cookies

            const response = await fetch("http://localhost:8080/api/listings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to create listing");
            }

            const result = await response.json();
            console.log("Listing created successfully:", result);
        } catch (error: any) {
            console.error("Error during listing creation:", error);
            alert("Failed to create listing: " + error.message);
        }
    }

    const handleRequest = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            const token = Cookies.get("token");
            console.log(token)
            const response = await fetch("http://localhost:8080/api/requests", {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "listingId": "67a8c540e261280d76954968",
                    "message": "I need this adapter for my laptop."
                })
            });


            const result = await response.json();
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000);

        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <div className="h-full w-full bg-black-100 dark:bg-grid-white/[0.01] bg-grid-black/[0.1] flex items-center justify-center mt-5">
                <div className='max-w-7xl w-full mt-5 '>
                    <div className="flex flex-col items-center justify-center py-5 mt-5">
                        <SearchBar />
                    </div>
                    {showPopup && (
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="fixed bottom-10 right-10 px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg z-50"
                        >
                            REQUEST SUBMITTED
                        </motion.div>
                    )}
                    <AnimatePresence>
                        {active && typeof active === "object" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/50 h-full w-full z-10"
                            />
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {active && typeof active === "object" ? (
                            <div className="fixed inset-0 grid place-items-center z-[100]">
                                <motion.button
                                    key={`button-${active.title}-${id}`}
                                    layout
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: {
                                            duration: 0.05,
                                        },
                                    }}
                                    className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-neutral-800 rounded-full h-6 w-6"
                                    onClick={() => setActive(null)}
                                >
                                    <CloseIcon />
                                </motion.button>
                                <motion.div
                                    layoutId={`card-${active.title}-${id}`}
                                    ref={ref}
                                    className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
                                >
                                    <motion.div layoutId={`image-${active.title}-${id}`}>
                                        <Image
                                            priority
                                            width={200}
                                            height={200}
                                            src={active.src}
                                            alt={active.title}
                                            className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                        />
                                    </motion.div>

                                    <div>
                                        <div className="flex justify-between items-start p-4">
                                            <div className="">
                                                <motion.h3
                                                    layoutId={`title-${active.title}-${id}`}
                                                    className="font-bold text-neutral-200"
                                                >
                                                    {active.title}
                                                </motion.h3>
                                                <motion.p
                                                    layoutId={`description-${active.description}-${id}`}
                                                    className="text-neutral-400"
                                                >
                                                    {active.description}
                                                </motion.p>
                                            </div>

                                            <motion.a
                                                layoutId={`button-${active.title}-${id}`}
                                                href={active.ctaLink}
                                                target="_blank"
                                                className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                                            >
                                                {active.ctaText}
                                            </motion.a>
                                        </div>
                                        <div className="pt-4 relative px-4">
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="text-neutral-400 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                            >
                                                {typeof active.content === "function"
                                                    ? active.content()
                                                    : active.content}
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ) : null}
                    </AnimatePresence>
                    <ul className="max-w-2xl mx-auto w-full gap-4">
                        {cards.map((card, index) => (
                            <motion.div
                                layoutId={`card-${card.title}-${id}`}
                                key={`card-${card.title}-${id}`}
                                onClick={() => setActive(card)}
                                className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-800 rounded-xl cursor-pointer"
                            >
                                <div className="flex gap-4 flex-col md:flex-row ">
                                    <motion.div layoutId={`image-${card.title}-${id}`}>
                                        <Image
                                            width={100}
                                            height={100}
                                            src={card.src}
                                            alt={card.title}
                                            className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                                        />
                                    </motion.div>
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${card.title}-${id}`}
                                            className="font-medium text-neutral-200 text-center md:text-left"
                                        >
                                            {card.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${card.description}-${id}`}
                                            className="text-neutral-400 text-center md:text-left"
                                        >
                                            {card.description}
                                        </motion.p>
                                    </div>
                                </div>
                                <motion.button
                                    onClick={() => handleRequest}
                                    layoutId={`button-${card.title}-${id}`}
                                    className="px-4 py-2 text-sm rounded-full font-bold bg-gray-700 hover:bg-green-500 hover:text-white text-white mt-4 md:mt-0"
                                >
                                    {card.ctaText}
                                </motion.button>
                            </motion.div>
                        ))}
                        <div className="flex justify-center mt-4">
                            <span className='m-8'><LitUpButton title="Load More" position='center' handleClick={() => handleSubmit} /></span>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-white"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
    {
        description: "High-speed data transfer",
        title: "Type C Cable",
        src: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQRO-zwqUlBMHddaxBMF8QAjAqE4Q_RhbeF5Pe9ME7HpU8pbcdZpVGHM02IWZr6glCRHcGo7_9-gLalgEgjJsjf47K094hzePc_JE7igpxxSRBgL0TiZDf0hA",
        ctaText: "Select",
        ctaLink: "https://example.com/type-c-cable",
        content: () => {
            return (
                <p>
                    The Type C Cable is designed for high-speed data transfer and fast
                    charging. It is compatible with a wide range of devices, including
                    smartphones, tablets, and laptops. With its durable construction and
                    reversible connector, it offers convenience and reliability for all
                    your connectivity needs.
                </p>
            );
        },
    },
    {
        description: "High-definition video and audio",
        title: "HDMI Cable",
        src: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR_SRf1Sz_vj1r93SpWzXGRQok7yYXbUsNQeLpuIQHIp4ydtBj_mlOVUwLRQGwgm-Zpm0U3iT8DC8O5tOz4F1nyf5Q_4Ej0-6_3_Y5oyY3U",
        ctaText: "Select",
        ctaLink: "https://example.com/hdmi-cable",
        content: () => {
            return (
                <p>
                    The HDMI Cable provides high-definition video and audio transmission
                    for your home entertainment systems. It supports 4K resolution and is
                    compatible with a variety of devices, including TVs, monitors, gaming
                    consoles, and more. Enjoy crystal-clear picture and sound quality with
                    this essential accessory.
                </p>
            );
        },
    },
    {
        description: "Portable SSD",
        title: "Pendrive",
        src: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR27duWgf8J0k1TUUWEiR13BLiTi7KIJC7M9hZTeRWKuRfhptAKH2qnd7uJ4VbCtoJAL-fD5EMtL1byJ4WRB-YTzTF46G6WUHg-GIqD2OEn2b0bCNuLltNv",
        ctaText: "Select",
        ctaLink: "https://example.com/pendrive",
        content: () => {
            return (
                <p>
                    The SSD is a compact and portable storage solution that allows you to
                    carry your important files and documents wherever you go. With its
                    high storage capacity and fast data transfer speeds, it is perfect for
                    backing up data, transferring files, and more.
                </p>
            );
        },
    },
    {
        description: "Laptop Charger",
        title: "Laptop Charger",
        src: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTW_l2ygAHgcLkGOQHy3KhGtkjX1WRYxBNEp8uvVuwppMC2e5_IAsO5498OaIehp2F0JyD-Eq50lT9KRDMebhJaB5jX3ll3mmE_KuP2b_Do0vZbNpKWyGqy",
        ctaText: "Select",
        ctaLink: "https://example.com/laptop-charger",
        content: () => {
            return (
                <p>
                    The Laptop Charger is a reliable power supply for your laptop,
                    ensuring that you stay powered up and productive. It is compatible
                    with a wide range of laptop models and features a durable design for
                    long-lasting use. Keep your laptop charged and ready to go with this
                    essential accessory.
                </p>
            );
        },
    },
];

export default ExpandableCardDemo;