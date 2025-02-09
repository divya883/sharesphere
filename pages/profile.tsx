"use client";
import { useRouter } from "next/router";
import React from "react";

const ProfilePage: React.FC = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@ncsu.edu",
    phone: "+1 (123) 456-7890",
    points: 1200,
  };

  const router = useRouter();

  const handleClick = (targetPath: string) => {
    router.push(targetPath);
  };

  return (
    <div className="min-h-screen bg-dark-900 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          {/* Left Section - User Info */}
          <div className="flex items-center space-x-4">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe"
              alt="User Picture"
              className="h-16 w-16 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-gray-400">{user.email}</p>
              <p className="text-gray-400">{user.phone}</p>
              <p className="text-gray-300 mt-2">
                Purchased liability insurance for <span className="text-green-400">$5</span>
              </p>
              <p className="text-gray-300 flex items-center">
                <span className="text-green-400 mr-2">✔</span> Trusted ShareSphere member
              </p>
            </div>
          </div>

          {/* Right Section - Points */}
          <div className="flex items-center">
            <div className="text-right">
              <h2 className="text-5xl font-bold text-cyan-400">{user.points}</h2>
              <p className="text-gray-400">Points Earned</p>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Active Requests Card */}
          <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Active Requests</h3>
            <p className="mt-2 text-gray-300">
              View and manage your current active requests.
            </p>
            <button
              onClick={() => handleClick("/notifications")}
              className="mt-4 bg-pink-400 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md transition"
            >
              View Requests
            </button>
          </div>

          {/* Your Listings Card */}
          <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Your Listings</h3>
            <p className="mt-2 text-gray-300">
              View and manage items or services you have listed.
            </p>
            <button
              onClick={() => handleClick("/notifications")}
              className="mt-4 bg-pink-400 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md transition"
            >
              View Listings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
