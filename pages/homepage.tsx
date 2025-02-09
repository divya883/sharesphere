import React from 'react';
import { SparklesCore } from '@/components/ui/sparkles';
import { userOptions } from '@/data';
import { Button } from '@/components/ui/MovingBorders';

const HomePage: React.FC = () => {

    localStorage.setItem("points", 10);

    return (
        <div className="min-h-screen bg-dark-900 flex flex-col items-center justify-center p-8">
            <div className="text-center">
                <h2 className="font-bold text-lg text-white">WELCOME BACK!</h2>
                <h1 className="text-5xl lg:text-6xl font-bold text-white relative z-20 mt-10">
                    You Have Helped 32 People So Far!!!
                </h1>
            </div>

            {/* Sparkles Effect */}
            <div className="relative w-full h-24">
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={800}
                    className="absolute top-0 left-0 w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            {/* Cards Section */}
            <div className="flex flex-wrap gap-6 mt-8 w-full max-w-4xl">
                {userOptions.map((card) => (
                    <Button
                        targetPath={card.path}
                        key={card.id}
                        className="flex-1 min-w-[250px] bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 hover:shadow-md transition"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <img
                                src={card.thumbnail}
                                alt={card.title}
                                className="w-16 md:w-24 lg:w-32 rounded-lg"
                            />
                            <div className="text-white">
                                <h1 className="text-xl md:text-2xl font-bold">{card.title}</h1>
                                <h2 className="text-md md:text-lg font-semibold text-gray-400">{card.company}</h2>
                                <p className="mt-2 text-gray-300">{card.desc}</p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
